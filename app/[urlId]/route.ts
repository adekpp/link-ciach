import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { urlId: string } }
) {
  const { urlId } = params;

  try {
    const url = await prisma.url.findUnique({
      where: {
        urlId: urlId,
      },
    });

    if (!url) {
      return NextResponse.json({ error: "Brak linku" }, { status: 404 });
    }

    await prisma.url.update({
      where: {
        urlId: urlId,
      },
      data: {
        accessCount: {
          increment: 1,
        },
      },
    });

    return NextResponse.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Wystąpił błąd" }, { status: 500 });
  }
}
