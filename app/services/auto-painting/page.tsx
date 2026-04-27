import type { Metadata } from "next";
import { BUSINESS } from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/ServicePage";

const service = getServiceBySlug("auto-painting")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    url: `${BUSINESS.url}/services/auto-painting`,
  },
  alternates: { canonical: `${BUSINESS.url}/services/auto-painting` },
};

export default function AutoPaintingPage() {
  return <ServicePage service={service} />;
}
