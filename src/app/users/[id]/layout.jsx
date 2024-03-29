import { Suspense } from "react";

const UsersProfileLayout = async ({ children }) => {

  return (
    <main className={`usersProfile`}>
      <Suspense fallback={<p>Loading ...</p>}>
        {children}
      </Suspense>
    </main>
  );
}

export default UsersProfileLayout;
