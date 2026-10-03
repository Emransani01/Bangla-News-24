import Link from "next/link";

interface News {
  id: string;
  title: string;
}

interface MostReadResponse {
  data: News[];
}

const MostRead = async () => {
  const res: Response = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
  );

  const data: MostReadResponse = await res.json();

  const news: News[] = data.data;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-6 w-1 shrink-0 rounded-full bg-red-600"></span>

          <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
            সর্বাধিক পঠিত
          </h1>
        </div>

        <p className="mt-1 text-xs text-gray-500">
          পাঠকদের সবচেয়ে বেশি পড়া খবর
        </p>
      </div>

      {/* News List */}
      <div className="divide-y divide-gray-100">
        {news.map(
          (n: News, i: number): React.ReactElement => (
            <Link
              key={n.id}
              href={`/news/${n.id}`}
              className="group flex min-w-0 gap-3 px-4 py-4 transition duration-200 hover:bg-gray-50 sm:gap-4 sm:px-5"
            >
              {/* Number */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 sm:h-9 sm:w-9">
                <p className="text-base font-bold text-red-600 sm:text-lg">
                  {i + 1}
                </p>
              </div>

              {/* Title */}
              <p className="min-w-0 text-sm font-semibold leading-6 text-gray-800 transition duration-200 group-hover:text-red-600">
                {n.title}
              </p>
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default MostRead;