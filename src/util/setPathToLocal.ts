import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const setLocal = (router: AppRouterInstance) => {
    localStorage.setItem("backPage", window.location.pathname ?? "/");
    console.log("working")
    router.push("/sign-in")
 }