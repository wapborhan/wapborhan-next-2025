import Loader from "@/components/Loader";

// app/posts/[slug]/loading.tsx
export default function Loading() {
  return (
    <div className="flex gap-5 animate-pulse">
      <Loader />
      <Loader />
      <Loader />
    </div>
  );
}
