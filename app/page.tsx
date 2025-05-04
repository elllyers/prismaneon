import prisma from "@/lib/prisma";
import UserForm from "./components/userform";

const users = await prisma.user.findMany();
console.log(users);

export default function Home() {
  return (
    <div className="relative h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Welcome to User Management</h1>
        <p className="text-sm text-gray-500 text-center">
          This is a simple user management system built with Next.js and Prisma.
        </p>
      </div>
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start overflow-y-auto custom-scrollbar bg-slate-950/20 rounded-lg p-8 shadow-lg h-[500px] sm:h-[600px] w-full sm:w-[500px] mt-[5px]">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <h2>
              {user.name} <span>---&gt;</span> {user.email}
            </h2>
          </div>
        ))}
      </div>
      <div className="fixed top-22 right-0 w-full sm:w-[500px] bg-slate-950/20 shadow-lg rounded-lg p-8 z-10">
        <h1 className="text-2xl font-bold">Create User</h1>
        <p className="text-sm text-gray-500">
          Fill out the form below to create a new user.
        </p>
        <UserForm />
      </div>
    </div>
  );
}
