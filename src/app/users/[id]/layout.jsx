import { Suspense } from "react";

const UsersProfileLayout = async ({ children }) => {

  return (
    <main>
      <h2>User Profile!</h2>
      <Suspense fallback={<p>Loading ...</p>}>
        {children}
      </Suspense>
    </main>
  );
}

export default UsersProfileLayout;
