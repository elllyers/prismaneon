// components/UserForm.tsx
"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StatusMessage {
  text: string;
  type: "success" | "error";
}

export default function UserForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [status, setStatus] = useState<StatusMessage | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            location: formData.get("location"),
            password: formData.get("password"),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          // Display the specific error message from the server
          setStatus({ text: data.error, type: "error" });
          return;
        }

        // Reset form
        (e.target as HTMLFormElement).reset();

        // Show success message
        setStatus({ text: "User created successfully!", type: "success" });

        // Refresh the current route
        router.refresh();
      } catch (error) {
        console.error("Error creating user:", error);
        setStatus({
          text: "Failed to create user. Please try again.",
          type: "error",
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {status && (
        <div
          className={`mb-4 p-2 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.text}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded"
          autoComplete="email"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isPending ? "Creating..." : "Create User"}
      </button>
    </form>
  );
}
