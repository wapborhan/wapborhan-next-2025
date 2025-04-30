import { getHashnodePosts } from "../../lib/blog";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getHashnodePosts();
  if (!posts) {
    return <p>Post Not Found</p>;
  }
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-5 lg:pt-20 pt-5 bg-grid-white/[0.1]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts &&
          posts.map((post) => (
            <div
              key={post?.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {post?.coverImage && (
                <Image
                  width={500}
                  height={300}
                  src={post.coverImage?.url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {post?.author?.photo && (
                    <Image
                      width={32}
                      height={32}
                      src={post?.author?.photo}
                      alt={post?.author?.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  <span className="text-sm ">{post?.author?.name}</span>
                </div>

                <h2 className="text-xl font-bold mb-2">
                  <Link
                    href={`/blog/${post?.slug}`}
                    className="hover:text-blue-600"
                  >
                    {post?.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4">{post?.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post?.tags?.map((tag) => (
                    <span
                      key={tag?.slug}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tag?.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
