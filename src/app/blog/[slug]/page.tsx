import { fetchPostBySlug } from "@/lib/postDetails";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="goBack my-5">
        <a
          href="/blog"
          className="text-[var(--text-color)] border-[1px] border-[var(--primary-color)] py-2 px-4 rounded-lg bg-[var(--background-color)]  transition duration-300 ease-in-out"
        >
          ← Back to Blog
        </a>
      </div>
      <div className="mb-8">
        <Image
          src={post.coverImage.url}
          width={1200}
          height={600}
          alt={post.title}
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
        />
      </div>

      <h1 className="text-4xl font-extrabold mb-6  leading-tight">
        {post.title}
      </h1>

      <article
        className="prose prose-lg prose-gray max-w-none space-y-5 text-xl"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />
    </main>
  );
}
