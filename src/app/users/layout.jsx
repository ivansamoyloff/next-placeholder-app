import Link from 'next/link'

const UsersLayout = async ({ children }) => {

  const users = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users`);
  const data = await users.json();

  return (
    <div className={`usersLayout`}>
      {data?.length ? (
        <nav>
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
      {children}
    </div>
  );
}

export default UsersLayout;