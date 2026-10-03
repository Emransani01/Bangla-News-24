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

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const formattedDate = new Date(
    news.firstPublished,
  ).toLocaleString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Link
      href={`/news/${news.id}`}
      className="block h-full min-w-0"
    >
      <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

        {/* Image */}
        <figure className="relative aspect-video w-full overflow-hidden">
          <Image
            height={600}
            width={600}
            src={news.imageUrl}
            alt={news.title}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </figure>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">

          <p className="mb-2 text-xs font-bold text-red-600">
            {news.category}
          </p>

          <h2 className="mb-3 text-base font-bold leading-7 text-gray-900">
            {news.title}
          </h2>

          <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-600">
            {news.description}
          </p>

          <p className="mt-auto border-t border-gray-100 pt-3 text-xs text-gray-400">
            {formattedDate}
          </p>

        </div>
      </article>
    </Link>
  );
};

export default NewsCard;