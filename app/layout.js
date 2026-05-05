export const metadata = {
  title: "Utah Legal Resource Finder",
  description: "Find local, regional and statewide legal resources in Utah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
