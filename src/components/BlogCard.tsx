// components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Post = {
  id: string;
  slug: string;
  title: string;
  coverImage?: { url: string };
};

type Props = {
  post: Post;
};

const BlogCard = ({ post }: Props) => {
  return (
    <div className="flex border rounded-lg overflow-hidden shadow-lg">
      {post.coverImage?.url && (
        <div className="basis-1/4">
          <Image
            width={500}
            height={300}
            src={post.coverImage.url}
            alt={post.title}
            className="object-cover h-14 w-full"
          />
        </div>
      )}

      <div className="basis-3/4 py-2 px-5">
        <h2 className="text-lg font-bold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
