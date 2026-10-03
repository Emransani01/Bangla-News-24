import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  firstPublished: string;
}

interface MainNewsProps {
  news: News[];
}

const MainNews = ({ news }: MainNewsProps) => {
  const firstNews: News = news[0];

  const otherNews: News[] = news.slice(1);

  const formattedDate: string = new Date(
    firstNews.firstPublished,
  ).toLocaleString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex flex-col gap-5 lg:flex-row">

      {/* Main News */}
      <Link
        href={`/news/${firstNews.id}`}
        className="w-full lg:w-1/2"
      >
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">

          <figure className="overflow-hidden">
            <Image
              height={600}
              width={600}
              src={firstNews.imageUrl}
              alt={firstNews.title}
              className="h-64 w-full object-cover transition duration-300 hover:scale-105 sm:h-72"
            />
          </figure>

          <div className="p-5">
            <p className="mb-2 text-sm font-bold text-red-600">
              {firstNews.category}
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-900">
              {firstNews.title}
            </h2>

            <p className="mb-4 line-clamp-3 text-base leading-7 text-gray-600">
              {firstNews.description}
            </p>

            <p className="border-t border-gray-100 pt-3 text-xs text-gray-400">
              {formattedDate}
            </p>
          </div>
        </div>
      </Link>

      {/* Other News */}
      <div className="grid w-full gap-3 lg:w-1/2">
        {otherNews.slice(0, 4).map((all: News) => (
          <Link
            key={all.id}
            href={`/news/${all.id}`}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-red-200 hover:shadow-md"
          >
            <p className="mb-1 text-xs font-bold text-red-600">
              {all.category}
            </p>

            <h3 className="text-base font-semibold leading-6 text-gray-800 transition hover:text-red-600">
              {all.title}
            </h3>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default MainNews;