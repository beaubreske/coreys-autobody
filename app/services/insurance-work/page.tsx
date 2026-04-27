import type { Metadata } from "next";
import { BUSINESS } from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/ServicePage";

const service = getServiceBySlug("insurance-work")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    url: `${BUSINESS.url}/services/insurance-work`,
  },
  alternates: { canonical: `${BUSINESS.url}/services/insurance-work` },
};

export default function InsuranceWorkPage() {
  return <ServicePage service={service} />;
}
