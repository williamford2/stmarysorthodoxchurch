import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MdxContent {
  content: string;
  data: Record<string, unknown>;
}

export function getMdxContent(slug: string): MdxContent {
  const filePath = path.join(process.cwd(), "src", "content", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { content: "", data: {} };
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  return { content, data };
}
