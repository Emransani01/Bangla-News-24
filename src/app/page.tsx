import MainNews from "@/components/MainNews";
import NewsCard from "@/components/NewsCard";
import MostRead from "@/components/MostRead";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  firstPublished: string;
}

interface Section {
  curationId: string;
  title: string;
  articles: News[];
}

interface NewsResponse {
  data: Section[];
}

export default async function Home() {
  const res: Response = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news sections");
  }

  const data: NewsResponse = await res.json();

  const sections: Section[] = data.data;

  if (!sections.length) {
    throw new Error("No news sections found");
  }

  const mainNews: News[] = sections[0].articles;

  const otherSections: Section[] = sections.slice(1);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-7xl">
        {/* Main Content + Most Read */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="min-w-0 lg:col-span-2">
            <MainNews news={mainNews} />

            {/* Other Sections */}
            <div className="mt-6 grid gap-8">
              {otherSections.map((section: Section) => (
                <div key={section.curationId}>
                  <h2 className="mb-4 border-b-2 border-red-600 pb-2 text-xl font-bold text-gray-900">
                    {section.title}
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.articles.map((news: News) => (
                      <NewsCard key={news.id} news={news} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most Read */}
          <div className="min-w-0 lg:col-span-1">
            <MostRead />
          </div>
        </div>
      </div>
    </div>
  );
}
