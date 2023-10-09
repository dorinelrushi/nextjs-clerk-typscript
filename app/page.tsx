import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

function Home() {
  return (
    <div className="p-[20px]">
      <h2 className="text-[20px] text-[white] mb-[20px]">Log in </h2>
      <button className="p-[10px] bg-[#2d3d85] text-[white] rounded-[5px]">
        <Link href="/dashboard">Go to dashboard page</Link>
      </button>
    </div>
  );
}

export default Home;
