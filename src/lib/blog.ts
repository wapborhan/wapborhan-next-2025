// lib/hashnode.ts
import { BlogPost} from '../types/blog';

const HASHNODE_API_URL = 'https://gql.hashnode.com'; // Correct endpoint
const BLOG_HOST = 'blog.wapborhan.com';

// lib/hashnode.ts
export async function getHashnodePosts(): Promise<BlogPost[]> {
    const query = `
     query Publication {
    publication(host: "${BLOG_HOST}") {
      posts(
      first: 50
      
      ) {
        edges {
          node {
            id
            title
            url
            slug
            brief
            publishedAt
            coverImage {
              url
              attribution
            }
            author {
              name
              profilePicture
              socialMediaLinks {
                facebook
                twitter
                github
                instagram
                website
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
    
    `;
  
    try {
      const response = await fetch(HASHNODE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Hashnode API response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      
      if (result.errors) {
        console.error('GraphQL errors:', result.errors);
        throw new Error(result.errors[0].message);
      }
  
      if (!result.data?.publication) {
        throw new Error('Publication not found - check the host name');
      }
  
console.log(result);


      return result.data.publication.posts.edges.map((edge: any) => ({
        id: edge.node.id,
        title: edge.node.title,
        slug: edge.node.slug,
        brief: edge.node.brief,
        publishedAt: edge.node.publishedAt,
        coverImage: edge.node.coverImage,
        author: edge.node.author,
      }));
      
    } catch (error) {
      console.error('Failed to fetch Hashnode posts:', error);
      throw new Error(`Failed to fetch posts: ${error instanceof Error ? error.message : String(error)}`);
    }
  }