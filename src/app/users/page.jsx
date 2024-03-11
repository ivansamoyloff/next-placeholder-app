const Users = async () => {

  const users = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users`);
  const data = await users.json();

  return (
    <main>
      <h2>Users Page!</h2>
      {data?.length ? data.map((user) => <h3 key={user.id}>{user.name}</h3>) : null}
    </main>
  );
}

export default Users;