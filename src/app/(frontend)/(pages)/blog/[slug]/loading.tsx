export default function Loading() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 md:py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <section className="relative">
              <div className="w-full pb-2 ">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Image skeleton */}
                  <div className="relative md:aspect-video w-full max-sm:h-[35vh] animate-pulse bg-neutral-200" />
                </div>
              </div>
            </section>
            <div className="">
              <div className="mb-6 flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-center">
                <div className="text-sm flex-col gap-y-2 md:flex-row flex gap-x-4 text-neutral-500">
                  {/* Meta data skeletons */}
                  <div className="flex h-4 w-24 animate-pulse rounded bg-neutral-200" />
                  <div className="flex h-4 w-20 animate-pulse items-center gap-1 rounded bg-neutral-200" />
                  <div className="flex h-4 w-16 animate-pulse items-center rounded bg-neutral-200" />
                </div>
                {/* Share button skeleton */}
                <div className="h-8 w-32 animate-pulse rounded bg-neutral-200" />
              </div>
            </div>
            {/* Content skeletons */}
            <div className="animate-pulse space-y-4">
              <div className="h-8 w-3/4 rounded bg-neutral-200" />
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-11/12 rounded bg-neutral-200" />
              <div className="h-4 w-10/12 rounded bg-neutral-200" />
            </div>
          </article>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                {/* Sidebar heading skeleton */}
                <div className="mb-3 h-4 w-24 animate-pulse rounded bg-neutral-200" />
                {/* TOC skeletons */}
                <div className="space-y-2 text-sm">
                  <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
                  <div className="h-4 w-11/12 animate-pulse rounded bg-neutral-200" />
                  <div className="h-4 w-10/12 animate-pulse rounded bg-neutral-200" />
                </div>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                {/* Share heading skeleton */}
                <div className="mb-3 h-4 w-20 animate-pulse rounded bg-neutral-200" />
                {/* Share buttons skeleton */}
                <div className="h-8 w-full animate-pulse rounded bg-neutral-200" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
