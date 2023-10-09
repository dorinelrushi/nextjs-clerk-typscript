// @ts-ignore

import Header from "@/components/Header";
import WriteComment from "@/components/WriteComment";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
      <Header />
      <WriteComment />
    </div>
  );
}
