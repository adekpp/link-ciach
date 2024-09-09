import { nanoid } from "nanoid";
import { validateUrl } from "../../utils";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function POST(req: Request) {
  try {
    const { originalUrl } = await req.json();
    console.log(originalUrl);
    const baseUrl = process.env.BASE_URL;
    const urlId = nanoid(5);

    if (!validateUrl(originalUrl)) {
      return NextResponse.json(
        { error: "Niepoprawny adres URL" },
        { status: 400 }
      );
    }
    const url = await prisma.url.create({
      data: {
        urlId,
        originalUrl,
        shortUrl: `${baseUrl}/${urlId}`,
      },
    });
    return NextResponse.json(url.shortUrl, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Wystąpił błąd" }, { status: 500 });
  }
}

