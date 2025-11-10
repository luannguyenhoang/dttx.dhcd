import HomePage from "@/app/home/HomePage";
import { getSeoData } from "@/utils/getSeoData";
import { generateMetadataFromFullHead } from "@/utils/seoUtils";
import { Metadata } from "next";
import { GET_TRANG_CHU } from "./api/graphQL/getTrangChu";
import { SchemaWrapper } from "./components/atoms/SchemaWrapper";

export const revalidate = 0;
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSeoData(GET_TRANG_CHU, "pageBy");

  return {
    ...generateMetadataFromFullHead(
      seo.fullHead || "",
      seo.focusKeywords || ""
    ),
    robots: "index, follow"
  };
}
export default function Home() {
  return (
    <>
      <SchemaWrapper query={GET_TRANG_CHU} nodeKey="pageBy" />
      <HomePage />
    </>
  );
}
