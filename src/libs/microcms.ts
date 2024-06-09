import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

//素材の型定義
export type Sozai = {
    id: string;
    name: string;
    material: MicroCMSImage;
    tags: Tag[];
    category: Category[];
    requestedBy: string;
} & MicroCMSDate;

//タグの型定義
export type Tag = {
    id: string;
    name: string;
    engname: string
} & MicroCMSDate;

//カテゴリーの型定義
export type Category = {
    id: string;
    image: MicroCMSImage;
    name: string;
    engname: string;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// 素材一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Sozai>({
        endpoint: "materials",
        queries,
    });

    return listData;
};

//全ての素材を取得
export const getAllList = async () => {
    let offset = 0;
    const limit = 10; // Adjust the limit as needed
    let allMaterials: Sozai[] = [];
    let fetchedData = null;

    do {
        const queries = { limit, offset };
        fetchedData = await client.getList<Sozai>({
            endpoint: "materials",
            queries,
        });
        allMaterials = allMaterials.concat(fetchedData.contents);
        offset += limit; // Update the offset to fetch the next batch
    } while (fetchedData && allMaterials.length < fetchedData.totalCount);

    return allMaterials;
};

//カテゴリ一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Category>({
        endpoint: "categories",
        queries,
    });

    return listData;
};

//カテゴリーを全取得
export const getAllCategoryList = async () => {
    let offset = 0;
    const limit = 10; // or another value based on API constraints
    let allCategories: Category[] = [];
    let fetchedData = null;

    do {
        const queries = { limit, offset };
        fetchedData = await client.getList<Category>({
            endpoint: "categories",
            queries,
        });
        allCategories = allCategories.concat(fetchedData.contents);
        offset += limit; // Update the offset for the next batch
    } while (fetchedData && allCategories.length < fetchedData.totalCount);

    return allCategories;
};

//タグ一覧を取得
export const getTagList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Tag>({
        endpoint: "tags",
        queries,
    });

    return listData;
};

//タグを全取得
export const getAllTagList = async () => {
    let offset = 0;
    const limit = 10; // or another value based on API constraints
    let allTags: Tag[] = [];
    let fetchedData = null;

    do {
        const queries = { limit, offset };
        fetchedData = await client.getList<Tag>({
            endpoint: "tags",
            queries,
        });
        allTags = allTags.concat(fetchedData.contents);
        offset += limit; // Update the offset for the next batch
    } while (fetchedData && allTags.length < fetchedData.totalCount);

    return allTags;
};


// 素材の詳細を取得
export const getSozaiDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Sozai>({
        endpoint: "materials",
        contentId,
        queries,
    });

    return detailData;
};