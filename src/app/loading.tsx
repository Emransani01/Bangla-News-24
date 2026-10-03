const Loading = () => {
  return (
    <main className="w-full px-4 py-8 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-7xl">
        {/* Main Content + Most Read */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="min-w-0 lg:col-span-2">
            {/* Main News Skeleton */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="h-64 w-full animate-pulse bg-gray-200 sm:h-72"></div>

                <div className="space-y-3 p-5">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>

                  <div className="h-7 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-7 w-4/5 animate-pulse rounded bg-gray-200"></div>

                  <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>

                  <div className="h-3 w-32 animate-pulse rounded bg-gray-200"></div>
                </div>
              </div>

              {/* Side News Skeleton */}
              <div className="grid gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-2 h-3 w-16 animate-pulse rounded bg-gray-200"></div>

                    <div className="h-5 w-full animate-pulse rounded bg-gray-200"></div>
                    <div className="mt-2 h-5 w-4/5 animate-pulse rounded bg-gray-200"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Cards Skeleton */}
            <div className="mt-8">
              <div className="mb-4 h-7 w-40 animate-pulse rounded bg-gray-200"></div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="aspect-video w-full animate-pulse bg-gray-200"></div>

                    <div className="space-y-3 p-4">
                      <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>

                      <div className="h-5 w-full animate-pulse rounded bg-gray-200"></div>
                      <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200"></div>

                      <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                      <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Most Read Skeleton */}
          <div className="min-w-0 lg:col-span-1">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-5 py-4">
                <div className="h-6 w-36 animate-pulse rounded bg-gray-200"></div>
                <div className="mt-2 h-3 w-48 animate-pulse rounded bg-gray-200"></div>
              </div>

              <div className="divide-y divide-gray-100">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex gap-4 px-5 py-4">
                    <div className="h-9 w-9 shrink-0 animate-pulse rounded-full bg-gray-200"></div>

                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                      <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
