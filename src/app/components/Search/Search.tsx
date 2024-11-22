"use client"

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Search } from 'lucide-react';
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

    // 検索ワードが入力された際にhandleSearchを発火する
    useEffect(() => {
        handleSearch();
    }, [query]);

    // 
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Search className="h-[1.1rem] w-[1.1rem]" />
                </Button>
            </DialogTrigger>
            <DialogContent className="h-[300px] overflow-y-scroll">
                <div className='relative h-[45px]'>
                    <Search className='absolute right-[20px] top-[50%] translate-y-[-50%] w-[1.1rem] h-[1.1rem]' />
                    <input
                        type="text"
                        placeholder="Search..."
                        className='h-[45px] w-full px-3 border-[2px] rounded-sm font-bold'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div id="results" >
                    {results.length > 0 && (
                        <h2 className='border-b border-black pb-1'>検索結果（{results.length}件）</h2>
                    )}
                    {results.map((result) => (
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
                    <Image src={data.meta.image} className='bg-muted w-[150px] border rounded-md p-2' width={150} height={150} alt={data.meta.title} />
                    <p
                        dangerouslySetInnerHTML={{ __html: data.excerpt }}
                    />
                </div>
            </Link>
        </div>
    );
}
