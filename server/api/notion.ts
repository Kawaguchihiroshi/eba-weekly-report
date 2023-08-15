import { Client } from "@notionhq/client";

interface NotionPost {
  uid: string;
  id: number;
  title: string;
  detail: string;
}
const runtimeConfig = useRuntimeConfig();

export default async function fetchNotionPosts(): Promise<{
  notionPosts: NotionPost[];
}> {
  const notion = new Client({
    auth: runtimeConfig.public.nationToken,
  });

  const response = await notion.databases.query({
    database_id: runtimeConfig.public.nationDbId,
  });

  const notionPosts: NotionPost[] = response.results.map((row, index) => ({
    uid: row.id,
    id: index,
    title: row.properties.Title.title[0],
    detail: row.properties.Detail.rich_text[0],
  }));

  return {
    notionPosts,
  };
}
