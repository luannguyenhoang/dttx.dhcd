"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/molecules/Header";
import dynamic from "next/dynamic";

const Footer = dynamic(() =>
  import("@/app/components/molecules/Footer").then((mod) => mod.Footer)
);

export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Danh sách các trang không có header và footer
  const standalonePages = [
    "/tuyen-sinh-nna",
    "/tuyen-sinh-quan-tri-nhan-luc",
    "/tuyen-sinh-cong-tac-xa-hoi",
    "/tuyen-sinh-viet-nam-hoc",
    "/tuyen-sinh-bao-ho-lao-dong",
    "/tuyen-sinh-luan"
  ];

  const isStandalonePage = standalonePages.includes(pathname);

  if (isStandalonePage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
