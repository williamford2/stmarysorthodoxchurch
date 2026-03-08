import type { Metadata } from "next";

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({ title, description, path = "" }: MetadataOptions): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://stmarysendicott.org"}${path}`,
      siteName: "St. Mary's Orthodox Christian Church",
      locale: "en_US",
      type: "website",
    },
  };
}
