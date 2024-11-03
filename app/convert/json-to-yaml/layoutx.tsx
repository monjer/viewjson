import Script from 'next/script';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/4.5.0/fxparser.min.js" strategy="beforeInteractive" />
      {children}
    </>
  );
}