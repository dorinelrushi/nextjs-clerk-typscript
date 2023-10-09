"use client";
import { useUser } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <div className="text-[white]">Hello {user.fullName} !</div>;
  }

  return <div>Not signed in</div>;
}
