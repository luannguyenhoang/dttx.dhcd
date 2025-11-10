import { GET_LADI_PAGE } from "@/app/api/graphQL/getPadiPage";
import { getSeoData } from "@/utils/getSeoData";
import { generateMetadataFromFullHead } from "@/utils/seoUtils";
import { Metadata } from "next";
import { ReactNode } from "react";

export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const variables = { uri: "tuyen-sinh-bao-ho-lao-dong" };

  const { seo } = await getSeoData(GET_LADI_PAGE, "pageBy", [], variables);

  return {
    ...generateMetadataFromFullHead(
      seo.fullHead || "",
      seo.focusKeywords || ""
    ),
    robots: "index, follow"
  };
}

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
