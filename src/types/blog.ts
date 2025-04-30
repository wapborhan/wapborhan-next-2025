// types/hashnode.ts
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    dateAdded: string;
    content: string;
    excerpt: string;
    coverImage: {
      url: string;
      attribution: string;
    };
    tags: {
      name: string;
      slug: string;
    }[];
    author: {
      username: string;
      name: string;
      photo: string;
    };
  }