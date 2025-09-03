import Nav from "@components/nav";
export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="flex flex-row">{children}</div>
    </>
  );
}
