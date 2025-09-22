"use client";

import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Post = {
  id: string;
  slug: string;
  title: string;
  coverImage?: { url: string };
};

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => {
  const pathname = usePathname();
  console.log("Current pathname:", pathname);

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {pathname === "/" ? (
          <>
            {posts
              .map((post) => <BlogCard key={post.id} post={post} />)
              .slice(0, 5)}
            <div className="mt-12 text-center w-full">
              <Link href="/blog" className="py-2 px-5 border rounded-md">
                All Blogs
              </Link>
            </div>
          </>
        ) : (
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        )}
      </div>
    </>
  );
};

export default Blog;
