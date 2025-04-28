export const fetchPostBySlug = async (slug: string) => {
    const query = `
      query Publication {
        publication(host: "blog.wapborhan.com") {
          post(slug: "${slug}") {
            title
            coverImage{
        url
      }
            content {
              html
              markdown
            }
          }
        }
      }
    `;
  
    const res = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
  
    const json = await res.json();
    return json.data.publication.post;
  };
  