import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import GoogleAdsense from "./components/GoogleAdsense/GoogleAdsense";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
      {!!process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleTagManager gtmId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
      {!!process.env.GOOGLE_ADSENSE_ID && (
        <GoogleAdsense pId={process.env.GOOGLE_ADSENSE_ID} />
      )}
    </html>
  );
}
