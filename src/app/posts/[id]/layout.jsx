import { Suspense } from "react";

const PostLayout = async ({ children }) => {

  return (
    <main className={`post`}>
      <Suspense fallback={<p>Loading ...</p>}>
        {children}
      </Suspense>
    </main>
  );
}

export default PostLayout;