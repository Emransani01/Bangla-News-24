import NewsCard from "@/components/NewsCard";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  firstPublished: string;
}

interface CategoryNewsResponse {
  title: string;
  data: News[];
}

interface CategoryNewsProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryNews = async ({
  params,
}: CategoryNewsProps): Promise<React.ReactElement> => {
  const { categoryId }: { categoryId: string } = await params;

  const res: Response = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  const data: CategoryNewsResponse = await res.json();

  const categoryNews: News[] = data.data;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-7xl py-8">

        {/* Category Title */}
        <h1 className="mb-6 border-b-2 border-red-700 pb-3 text-xl font-bold text-gray-900 sm:text-2xl">
          {data.title}
        </h1>

        {/* News Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryNews.map(
            (news: News): React.ReactElement => (
              <NewsCard
                key={news.id}
                news={news}
              />
            ),
          )}
        </div>

      </div>
    </div>
  );
};

export default CategoryNews;