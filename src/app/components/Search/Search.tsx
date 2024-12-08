"use client"

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CircleX, Search } from 'lucide-react';
import Link from 'next/link';


type Anchor = {
    element: string;
    id: string;
    text: string;
    location: number;
};

type ResultData = {
    anchors: Anchor[];
    content: string;
    excerpt: string;
    filters: Record<string, unknown>;
    locations: number[];
    meta: {
        title: string;
        image: string;
    };
    raw_content: string;
    raw_url: string;
    sub_results: unknown[];
    url: string;
    weighted_locations: unknown[];
    word_count: number;
};

type ResultType = {
    id: string;
    data: () => Promise<ResultData>;
};

export interface PagefindWindow extends Window {
    pagefind?: {
        search: (query: string) => Promise<{ results: ResultType[] }>;
    };
}

// windowオブジェクトの型をPagefindWindowの型に当てはまるように指定
declare const window: PagefindWindow;

export default function SearchButton() {
    // 検索ワードを格納
    const [query, setQuery] = useState<string>('');
    // 検索結果を格納
    const [results, setResults] = useState<ResultType[]>([]);
    //dialogの開閉状態
    const [isOpen, setIsOpen] = useState(false);

    // pagefindのファイルを読み込みにいく
    useEffect(() => {
        const loadPagefind = async () => {
            if (!window.pagefind) {
                try {
                    window.pagefind = await import(
                // @ts-ignore
            /* webpackIgnore: true */'/pagefind/pagefind.js'
                    );
                } catch (e) {
                    window.pagefind = {
                        search: async () => ({ results: [] as ResultType[] }),
                    };
                }
            }
        };
        loadPagefind();
    }, []);

    // 検索結果を取得
    async function handleSearch() {
        if (window.pagefind) {
            const search = await window.pagefind.search(query);
            setResults(search.results);
        }
    }

    function handleChangeOpen() {
        setIsOpen((prev) => !prev); // 現在の状態に基づいて切り替え
        if (isOpen) {
            setQuery(""); // ダイアログを閉じるときに検索ワードをリセット
        }
    }

    function handleClear() {
        setQuery("")
    }

    // 検索ワードが入力された際にhandleSearchを発火する
    useEffect(() => {
        handleSearch();
    }, [query]);


    return (
        <Dialog open={isOpen} onOpenChange={handleChangeOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Search className="h-[1.1rem] w-[1.1rem]" />
                </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-3 h-[400px]">
                {/* 検索窓 */}
                <div className="relative w-full">
                    <Search className="absolute left-[15px] top-[50%] translate-y-[-50%] w-[1.1rem] h-[1.1rem]" />
                    <input
                        type="text"
                        placeholder="検索"
                        className="h-[45px] w-full px-[40px] border-[2px] rounded-sm font-bold"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className='absolute right-[15px] top-[50%] translate-y-[-50%]' onClick={handleClear}>
                        <CircleX className='w-[1.1rem] h-[1.1rem]' />
                    </button>
                </div>
                {/* 検索結果 */}
                <div id="results" className="flex-1 overflow-y-auto">
                    {query && (
                        results.length > 0 ? (
                            <h2 className="border-b pb-1 font-bold text-[13px]">
                                「{query}」に関する検索結果（{results.length}件）
                            </h2>
                        ) : (
                            <h2 className="border-b pb-1 font-bold text-[13px]">
                                「{query}」に一致する素材は見つかりませんでした。
                            </h2>
                        )
                    )}
                    {results.length > 0 && results.map((result) => (
                        <Result key={result.id} result={result} onClose={() => setIsOpen(false)} />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}

// 検索結果として出力するものを作成
function Result({ result, onClose }: { result: ResultType; onClose: () => void }) {
    const [data, setData] = useState<ResultData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const resultData = await result.data();
            console.log(resultData)
            setData(resultData)
        }
        fetchData();
    }, [result]);

    if (!data) return (
        <div id="skeleton" className="border-b py-3 flex items-center gap-3">
            <div className="bg-muted w-[150px] h-[150px] border rounded-md p-2 animate-pulse" />
            <div className="flex-1 space-y-3">
                <div className="h-[20px] bg-muted rounded-md animate-pulse w-[80%]" />
                <div className="h-[16px] bg-muted rounded-md animate-pulse w-[60%]" />
            </div>
        </div>
    );

    return (
        <div id='results' className='border-b py-3'>
            <Link href={data.url.replace(/.html$/, '').replace(/\/$/, '')} onClick={onClose}>
                <div className='flex items-center gap-3'>
                    <Image
                        src={data.meta.image}
                        className='w-[150px] rounded-md p-2 border-2 bg-muted dark:bg-[#171717]'
                        width={150}
                        height={150}
                        alt={data.meta.title}
                    />
                    <div>
                        {/* テキスト部分をレンダリング */}
                        <p
                            dangerouslySetInnerHTML={{
                                __html: data.excerpt.split('.')[0],
                            }}
                        />
                        {/* タグ部分をスタイリングして表示 */}
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {data.excerpt
                                .split('.')
                                .slice(1)
                                .filter((tag) => tag.trim() !== '') // 空文字を除外
                                .map((tag, index) => (
                                    <span
                                        key={index}
                                        className='bg-muted dark:text-white text-sm text-gray-800 px-2 py-1 rounded'
                                        dangerouslySetInnerHTML={{ __html: tag.trim() }} // markタグを有効に
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
