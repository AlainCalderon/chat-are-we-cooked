import Nav from "@components/nav";
export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-10">{children}</div>
    </>
  );
}
