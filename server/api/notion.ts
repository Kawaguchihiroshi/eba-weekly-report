import { Client } from "@notionhq/client"; // このインポートパスは適切に設定してください

interface NotionPost {
  id: string; // もしくは適切な型をここに指定
  // 他のプロパティも必要に応じて定義
}

export default async function fetchNotionPosts(): Promise<{
  notionPosts: NotionPost[];
}> {
  const runtimeConfig = useRuntimeConfig();

  const notion = new Client({
    auth: runtimeConfig.nationToken,
  });

  const response = await notion.databases.query({
    database_id: runtimeConfig.nationDbId,
  });

  const notionPosts: NotionPost[] = response.results.map((row) => ({
    id: row.id, // もしくは適切なプロパティをここに指定
  }));

  return {
    notionPosts,
  };
}
