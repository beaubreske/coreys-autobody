import type { Metadata } from "next";
import { BUSINESS } from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/ServicePage";

const service = getServiceBySlug("collision-repair")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    url: `${BUSINESS.url}/services/collision-repair`,
  },
  alternates: { canonical: `${BUSINESS.url}/services/collision-repair` },
};

export default function CollisionRepairPage() {
  return <ServicePage service={service} />;
}
