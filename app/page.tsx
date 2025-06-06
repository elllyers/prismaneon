import prisma from "@/lib/prisma";
import UserForm from "./components/userform";
import { MemoTransaction } from "./components/word-transition";

const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" },
});
console.log(users);

export default function Home() {
  return (
    <main className="h-screen max-w-none">
      <div className="block gap-2 sm:gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Welcome to User Management
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 text-center">
          This is a simple user management system built with Next.js and Prisma.
        </p>
      </div>
      <div className="flex h-screen p-4 sm:p-8 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden">
        <div className="flex-grow flex flex-col gap-4 sm:gap-[32px] items-center sm:items-start overflow-y-auto custom-scrollbar bg-slate-950/20 rounded-lg p-4 sm:p-8 shadow-lg">
          {users.map((user) => (
            <div key={user.id} className="user-item text-sm sm:text-base">
              <h2>
                {user.name} <span>---&gt;</span> {user.email}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 bg-slate-950/20 shadow-lg rounded-lg p-4 sm:p-8">
          <MemoTransaction mainWord="Create User" minWord="Create" />
          <p className="text-xs sm:text-sm text-gray-500">
            Fill out the form below to create a new user.
          </p>
          <UserForm />
        </div>
      </div>
    </main>
  );
}
