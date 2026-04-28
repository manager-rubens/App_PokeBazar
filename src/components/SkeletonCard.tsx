export function SkeletonCard() {
  return (
    <article className="item-card overflow-hidden rounded-[24px] bg-white/70 shadow-soft" aria-hidden="true">
      <div className="skeleton h-[65%] w-full" />
      <div className="p-4">
        <div className="skeleton h-4 w-3/4 rounded-full" />
        <div className="mt-4 flex items-center gap-2">
          <div className="skeleton h-6 w-6 rounded-full" />
          <div className="skeleton h-3 w-20 rounded-full" />
        </div>
      </div>
    </article>
  );
}
