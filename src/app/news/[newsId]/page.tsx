import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BodyItem {
  type: "image" | "text";
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
  text?: string;
}

interface News {
  id: string;
  title: string;
  description?: {
    blocks: unknown[];
  };
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: string[];
  topics: {
    id: string;
    name: string;
  }[];
  tags: string[];
  imageUrl: string;
  body: BodyItem[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

interface NewsResponse {
  success: boolean;
  cachedAt: string;
  data: News;
}

interface NewsDetailsProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetails = async ({
  params,
}: NewsDetailsProps): Promise<React.ReactElement> => {
  const { newsId } = await params;

  const res: Response = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    notFound();
  }

  const result: NewsResponse = await res.json();

  if (!result.success || !result.data) {
    notFound();
  }

  const news = result.data;

  const formattedDate = new Date(news.firstPublished).toLocaleString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      {/* Back to Home */}
      <div className="mb-5">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-red-600 transition hover:text-red-700"
        >
          ← সকল খবর
        </Link>
      </div>

      {/* Category */}
      {news.topics.length > 0 && (
        <p className="mb-3 text-sm font-bold text-red-600">
          {news.topics[0].name}
        </p>
      )}

      {/* Title */}
      <h1 className="mb-5 text-2xl font-bold leading-relaxed text-gray-900 sm:text-3xl lg:text-4xl">
        {news.title}
      </h1>

      {/* Author + Date + Word Count */}
      <div className="mb-8 border-b border-gray-200 pb-5 text-sm leading-6 text-gray-500">
        <p>প্রকাশিত: {formattedDate}</p>

        {news.byline.length > 0 && (
          <p className="mt-1">লেখক: {news.byline.join(", ")}</p>
        )}

        <p className="mt-1">{news.wordCount} শব্দ</p>
      </div>

      {/* Article Body */}
      <article>
        {news.body.map((item, index) => {
          /* IMAGE */
          if (item.type === "image" && item.url) {
            return (
              <figure key={`image-${index}`} className="my-6 sm:my-8">
                <Image
                  src={item.url}
                  alt={item.altText || news.title}
                  width={item.width || 1024}
                  height={item.height || 575}
                  className="h-auto w-full rounded-lg object-cover sm:rounded-xl"
                />

                {item.caption && (
                  <figcaption className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                    {item.caption}
                  </figcaption>
                )}

                {item.copyrightHolder && (
                  <p className="mt-1 text-xs text-gray-400">
                    {item.copyrightHolder}
                  </p>
                )}
              </figure>
            );
          }

          /* TEXT */
          if (item.type === "text" && item.text) {
            return (
              <p
                key={`text-${index}`}
                className="mb-5 whitespace-pre-line text-base leading-8 text-gray-800 sm:mb-6 sm:text-lg sm:leading-9"
              >
                {item.text}
              </p>
            );
          }

          return null;
        })}
      </article>

      {/* Tags */}
      {news.tags.length > 0 && (
        <div className="mt-8 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-6">
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 sm:text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Source */}
      <div className="mt-6 border-t border-gray-200 pt-5 sm:mt-8">
        <p className="text-xs text-gray-500 sm:text-sm">
          Source: {news.source}
        </p>
      </div>
    </main>
  );
};

export default NewsDetails;
