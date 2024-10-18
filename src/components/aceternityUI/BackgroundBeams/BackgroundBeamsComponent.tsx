"use client";
import WorksPage from "../../WorksPage";
import { BackgroundBeams } from "./BackgroundBeams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <WorksPage />
      </div>
      <BackgroundBeams />
    </div>
  );
}
