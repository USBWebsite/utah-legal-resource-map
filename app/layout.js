export const metadata = {
  title: "Utah Legal Resource Finder",
  description: "Find legal help in Utah by county.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
