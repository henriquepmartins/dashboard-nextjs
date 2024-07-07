"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function UpVote() {
  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <div>
      <Button
        onClick={() => {
          setUpvoteCount(upvoteCount + 1);
        }}
        className="text-zinc-800 mt-10"
      >
        UpVote
      </Button>
    </div>
  );
}
