import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeta Reticula - From Metaheuristics to JAMSTACK generative AI",
  openGraph: {
    title: "BoB - Replication for Fault Tolerance in LLM Transformer inference scalability",
    description:
      "Build an E-commerce website of your own choosing with the use of Vector Anisotropic Learning and SMR-aware RPC layers",
    images: [
      {
        url: "https://demo.useliftoff.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fromn conversational AI to CSS and Autoregressional motif grammars and lexicons",
    description:
      "EinsteinDB and IPFS powered",
    images: ["https://demo.useliftoff.com/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://demo.useliftoff.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
