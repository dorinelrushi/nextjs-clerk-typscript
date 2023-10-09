"use client";
import { db } from "@/firebase";
import firebase from "firebase/compat/app";
import { useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useCollection } from "react-firebase-hooks/firestore";
function WriteComment() {
  const { isSignedIn, user, isLoaded } = useUser();

  const username = user?.fullName;

  const inputRef = useRef<HTMLInputElement>(null);

  const sendPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;

    db.collection("posts").add({
      message: inputRef.current.value,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value = "";
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your message" ref={inputRef} />
        <button onClick={sendPost} type="submit" className="bg-[#4e86ee]">
          Send
        </button>
      </form>
    </div>
  );
}

export default WriteComment;
