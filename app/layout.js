export const metadata = {
  title: "Evergreen Next.js starter",
  description: "Minimal Next.js app that runs the Evergreen lifecycle scan in CI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
