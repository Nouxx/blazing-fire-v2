import "./globals.css";

import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Footer } from "@/components/Footer/Footer";
import { AppHeaderContainer } from "@/components/Header/containers/AppHeaderContainer";
import { Flex } from "@/components/ui/Flex/Flex";

// todo: move this logic out of the layout
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Blazing Fire",
  description: "All-in-one application to manage your diet",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // hydration warning needs to be ignored since next-themes updates the html element.
    // this is one level deep, so it won't block hydration warnings on other elements.
    // https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Flex as="main" direction="column" className="min-h-screen">
            <Flex
              fullWidth
              direction="column"
              className="flex-1 gap-20"
              justify="between"
            >
              <AppHeaderContainer />

              <Flex direction="column" className="gap-20 max-w-5xl p-5">
                {children}
              </Flex>

              <Footer />
            </Flex>
          </Flex>
        </ThemeProvider>
      </body>
    </html>
  );
}
