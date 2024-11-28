import { Metadata } from "next";
import Hero from "./components/Hero/Hero";
import MoreSozaiBtn from "./components/MoreSozaiBtn/MoreSozaiBtn";
import SozaiList from "./components/SozaiList/SozaiList";
import { getList } from "@/libs/microcms";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'SOZAI',
  description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
  openGraph: {
    title: 'SOZAI',
    description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式のダウンロードが可能。',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: 'SOZAI',
    images: [
      {
        width: '1200',
        height: '630',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/ogp/home-ogp-christmas.png`
      }
    ],
    locale: 'jp',
    type: 'website',
  }
}

export default async function Home() {

  const Sozaies = await getList({ limit: 9 })

  return (
    <>
      {/* <Hero /> */}
      <SozaiList title="新しい素材" contents={Sozaies.contents} isHome={true} />
      <MoreSozaiBtn />
    </>
  );
}
