import type { Metadata } from "next";
import { BUSINESS } from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/ServicePage";

const service = getServiceBySlug("rust-repair")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    url: `${BUSINESS.url}/services/rust-repair`,
  },
  alternates: { canonical: `${BUSINESS.url}/services/rust-repair` },
};

export default function RustRepairPage() {
  return <ServicePage service={service} />;
}
