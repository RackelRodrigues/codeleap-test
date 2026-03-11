import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "./contexts/GlobalContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "CodeLeap - Frontend Challenge",
  description:
    "Frontend challenge developed for the Junior Developer position at CodeLeap",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
