// RootLayoutClient.tsx
"use client"; // Mark as client component

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  <FloatingButton onClick={() => alert("Floating Button Clicked!")} />


  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingButton onClick={() => alert("Floating Button Clicked!")} />} 
    </>
  );
}
