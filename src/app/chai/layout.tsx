export default function ChaiPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Chai Page Layout</h2>
      {children}
    </>
  );
}
