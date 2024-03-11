import Link from 'next/link'

const Users = async () => {

  const users = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users`);
  const data = await users.json();

  return (
    <main className={`usersProfile page`}>
      <h2>Users Page!</h2>
      {data?.length ? (
        <nav className='mainProfiles'>
          {data.map(
            (user) => 
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </li>
            )
          }
        </nav>
      ) : null}
    </main>
  );
}

export default Users;