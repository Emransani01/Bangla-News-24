import Link from "next/link";

interface Category {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

interface CategoryResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  data: Category[];
}

const NaveLinks = async (): Promise<React.ReactElement> => {
  const res: Response = await fetch(
    "https://news-api-v2.vercel.app/api/categories",
  );

  const data: CategoryResponse = await res.json();

  const navs: Category[] = data.data;

  const filteredNavs: Category[] = navs.filter(
    (n: Category): boolean => n.scrapable,
  );

  return (
    <nav className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 lg:gap-x-8">
        <Link
          href="/"
          className="text-sm font-medium transition hover:text-red-500"
        >
          হোম
        </Link>

        {filteredNavs.map(
          (n: Category): React.ReactElement => (
            <Link
              key={n.slug}
              href={`/category/${n.slug}`}
              className="text-sm font-medium transition hover:text-red-500"
            >
              {n.title}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
};

export default NaveLinks;