import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="scheme-dark dark font-robot">
     <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='tracking-tight'>{children}</body>
    </html>
  );
}
