import type { Metadata } from "next";
import { BUSINESS } from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/ServicePage";

const service = {
  ...getServiceBySlug("corvette-work")!,
  image: "/images/services/corvette-page.webp",
};

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    url: `${BUSINESS.url}/services/corvette-work`,
  },
  alternates: { canonical: `${BUSINESS.url}/services/corvette-work` },
};

export default function CorvetteWorkPage() {
  return <ServicePage service={service} />;
}
