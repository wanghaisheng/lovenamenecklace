"use client"
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    const path = localStorage.getItem("backPage")
  return (
    <div className="w-full flex justify-center py-12">
      <SignUp forceRedirectUrl={path} signInUrl="/sign-in" />
    </div>
  );
}
