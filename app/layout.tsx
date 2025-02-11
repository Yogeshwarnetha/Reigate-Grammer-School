import RootLayoutServer, { metadata } from "./RootLayoutServer";
import RootLayoutClient from "./RootLayoutClient";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayoutServer>
      <RootLayoutClient>{children}</RootLayoutClient>
    </RootLayoutServer>
  );
}