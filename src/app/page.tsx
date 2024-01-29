import LoginButton from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-orange-500">
      <LoginButton>
      <Button>SignIn</Button>
      </LoginButton>
    </main>
  );
}
