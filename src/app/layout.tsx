import { TrackingSession } from "@/app/components/atoms/TrackingSession";
import Header from "@/app/components/molecules/Header";
import "@/app/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import { FixHead } from "./components/atoms/FixHead";
import { LayoutContent } from "./components/template/LayoutContent";

const Footer = dynamic(() =>
  import("@/app/components/molecules/Footer").then((mod) => mod.Footer)
);

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID_DTTXDHCD;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="HQo1tWo-oQVaxjFtRSF2bhr_pKurP_gWgAWG99Pmlzw"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <div className="max-w-[1920px] mx-auto">
          <FixHead />
          {gtmId && <GoogleTagManager gtmId={gtmId} />}
          <TrackingSession />
          <LayoutContent>{children}</LayoutContent>
        </div>
      </body>
    </html>
  );
}
