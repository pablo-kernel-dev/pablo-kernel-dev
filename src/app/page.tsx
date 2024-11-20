import { redirect } from "next/navigation";
import Link from "next/link";

export default function AppHome() {
  redirect("/home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-5xl">Hello World!</h1>
      <p className="text-center text-3xl">Go to <Link href={"/home"} className={"text-cyan-500 hover:text-cyan-700 hover:underline"}>home</Link></p>
      <p className="text-center text-3xl text-stone-800">For some reason, this page should NOT be displayed. Please go back to the home page.</p>
    </main>
  );
}