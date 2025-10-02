import Nav from "@components/nav";
export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // public\images\1725308238042220.jpg
  return (
    <>
      <Nav />
      <div className="overflow-hidden bg-[url(../../public/images/1725308238042220.jpg)] backdrop-blur-sm size-full">{children}</div>
    </>
  );
}
