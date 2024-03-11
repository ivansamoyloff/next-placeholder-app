import Link from 'next/link'

const PostsLayout = async ({ children }) => {
  const users = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/posts`);
  const data = await users.json();
  console.log(data);
  return (
    <div className='postLayout'>
      {data?.length ? (
        <nav>
          {data.map(
            (post) => 
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            )
          }
        </nav>
      ) : null}
      {children}
    </div>
  );
}

export default PostsLayout;
