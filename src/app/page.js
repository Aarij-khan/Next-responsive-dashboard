"use client";

import Link from "next/link";

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Home Page</h1>
        <Link href="/dashboard">
          <p className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go to Dashboard
          </p>
        </Link>
      </div>
    </div>
  );
}
