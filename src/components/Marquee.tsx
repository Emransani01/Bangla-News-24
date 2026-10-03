import Link from "next/link";
import MarqueeText from "react-fast-marquee";

interface News {
  id: string;
  title: string;
}

const Marquee = async (): Promise<React.ReactElement> => {
  const res: Response = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10",
  );

  const data: { data: News[] } = await res.json();

  const headlines: News[] = data.data;

  return (
    <div className="sticky top-0 z-50 w-full bg-white px-3 py-2 sm:px-6 lg:px-10">
      <div className="flex items-center overflow-hidden rounded-md bg-red-600 shadow-md">

        {/* Label */}
        <div className="shrink-0 bg-red-700 px-3 py-2 text-sm font-bold text-white sm:px-5 sm:text-base">
          সর্বশেষ
        </div>

        {/* Headlines */}
        <div className="min-w-0 flex-1">
          <MarqueeText
            speed={100}
            pauseOnHover={true}
          >
            {headlines.map(
              (h: News): React.ReactElement => (
                <Link
                  key={h.id}
                  href={`/news/${h.id}`}
                  className="text-sm font-medium text-white hover:underline sm:text-base"
                >
                  {h.title}

                  <span className="mx-3 font-bold text-white sm:mx-5">
                    •
                  </span>
                </Link>
              ),
            )}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;