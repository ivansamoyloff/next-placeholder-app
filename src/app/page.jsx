import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1>Home Page!</h1>
      <h2>Here you can find: </h2>
      <Link href={`/users`}><h3>Users</h3></Link>
      <Link href={`/todos`}><h3>Todos</h3></Link>
      <Link href={`/posts`}><h3>Posts</h3></Link>       
    </main>
  );
}
