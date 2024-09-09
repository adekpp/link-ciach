import { notFound, redirect } from "next/navigation";
import { prisma } from "@/prisma/client";

export default async function RedirectPage({
  params,
}: {
  params: { urlId: string };
}) {
  const { urlId } = params;

  try {
    const url = await prisma.url.findUnique({
      where: {
        urlId: urlId,
      },
    });

    if (!url) {
      notFound();
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


    redirect(url.originalUrl);
  } catch (error) {
    console.error("Error in RedirectPage:", error);
    throw error;
  }
}
