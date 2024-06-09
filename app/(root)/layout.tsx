import SparklesPreview from "@/components/sparklesmain";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <SparklesPreview />
        <main>{children}</main>
    </div>
  );
}
