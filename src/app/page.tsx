import { Metadata } from "next";
import Hero from "./components/Hero/Hero";
import MoreSozaiBtn from "./components/MoreSozaiBtn/MoreSozaiBtn";
import SozaiList from "./components/SozaiList/SozaiList";
import { getList } from "@/libs/microcms";

export const metadata: Metadata= {
  title: 'SOZAI',
  description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
  openGraph: {
    title: 'SOZAI',
    description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: 'SOZAI',
    images: [
      {
        width: '1200',
        height: '630',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/ogp/home-ogp.png`
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
      <Hero />
      <SozaiList title="新しいSOZAI" contents={Sozaies.contents} isHome={true}/>
      <MoreSozaiBtn />
    </>
  );
}
