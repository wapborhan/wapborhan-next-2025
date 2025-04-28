// app/blog/[slug]/metadata.ts
import { getPostBySlug } from "@/lib/postDetails";

export async function generatePostMetadata(slug: string) {
  const post = await getPostBySlug(slug).catch(() => null);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: post.title,
    description: post.brief,
    openGraph: {
      title: post.title,
      description: post.brief,
      images: post.coverImage ? [{ url: post.coverImage.url }] : [],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}