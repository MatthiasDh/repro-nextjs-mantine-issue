"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href={"/app"}>
        Go to app, this will become a landingpage to promote the app
      </Link>
    </div>
  );
}
