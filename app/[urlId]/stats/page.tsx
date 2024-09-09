"use client";
import { useGetCounts } from "@/hooks/use-get-counts";
import Link from "next/link";

export default function StatsPage({ params }: { params: { urlId: string } }) {
  const { counts } = useGetCounts(params.urlId);
  return (
    <section className="flex w-full py-10 md:py-24 lg:py-24 justify-center">
      <div className="flex flex-col justify-center px-4 md:px-6 text-center gap-y-6 items-center">
        <div>
          <p className="text-[#121212] dark:text-white text-2xl">
            Kliknięcia w <Link href={`https://linkciach.pl/${params.urlId}`} className="text-blue-500 underline">{`linkciach.pl/${params.urlId}`}</Link>
          </p>
        </div>
        <div className=" flex justify-center items-center border-[2px] size-[120px] border-green-500 rounded-full p-12 text-[#121212] dark:text-white">
          <span className="text-2xl">{counts}</span>
        </div>
      </div>
    </section>
  );
}
