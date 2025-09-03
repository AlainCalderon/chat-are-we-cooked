import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="scheme-dark font-robot">
      <body className='tracking-tight'>{children}</body>
    </html>
  );
}
