import type { Metadata } from "next";
import { BUSINESS } from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/ServicePage";

const service = getServiceBySlug("restoration-projects")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    url: `${BUSINESS.url}/services/restoration-projects`,
  },
  alternates: { canonical: `${BUSINESS.url}/services/restoration-projects` },
};

export default function RestorationProjectsPage() {
  return <ServicePage service={service} />;
}
