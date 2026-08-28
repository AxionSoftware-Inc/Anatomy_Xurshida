import type { Metadata } from "next";
import PackageExplorer from "./PackageExplorer";

export const metadata: Metadata = {
  title: "Paketlar — RigRent",
  description: "RigRent paketlarini batafsil ko‘ring, real ish muhitini ko‘zdan kechiring va o‘zingizga mos variantni tanlang.",
};

export default function PackagesPage() {
  return <PackageExplorer />;
}
