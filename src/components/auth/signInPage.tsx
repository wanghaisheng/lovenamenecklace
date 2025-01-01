"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const path = localStorage.getItem("backPage");
  return (
    <div className="w-full flex justify-center py-12">
      <SignIn forceRedirectUrl={path} signUpUrl="/sign-up" />;
    </div>
  );
}
