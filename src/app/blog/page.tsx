import { getHashnodePosts } from "../../lib/blog";

import Blog from "./Blog";

export default async function BlogPage() {
  const posts = await getHashnodePosts();

  if (!posts || posts.length === 0) {
    return <p className="text-center py-10">No posts found</p>;
  }
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-5 lg:pt-20 pt-5 bg-grid-white/[0.1]">
      <div className="title">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Blog</h2>
      </div>
      <Blog posts={await getHashnodePosts()} />
    </div>
  );
}
