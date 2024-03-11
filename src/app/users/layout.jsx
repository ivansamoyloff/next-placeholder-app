import { Suspense } from "react";

export default function UsersLayout({ children }) {
  return (
    <div>
      <h1>Users Layout</h1>
        {children}
    </div>
  );
}