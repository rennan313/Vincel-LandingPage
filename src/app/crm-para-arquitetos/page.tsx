import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/seo/SolutionPageLayout";
import { solutionMetadata } from "@/lib/metadata";
import { getSolutionBySlug } from "@/content/solutions";

const content = getSolutionBySlug("crm-para-arquitetos")!;

export const metadata: Metadata = solutionMetadata(content);

export default function Page() {
  return <SolutionPageLayout content={content} />;
}
