import Link from 'next/link';

const Post = async ({ params }) => {

  const post = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/posts/${params.id}`);
  const data = await post.json();

  return (
    <>
      <h2>{data.title}</h2>
      <h4>{data.body}</h4>
    </>
  );
}

export default Post;