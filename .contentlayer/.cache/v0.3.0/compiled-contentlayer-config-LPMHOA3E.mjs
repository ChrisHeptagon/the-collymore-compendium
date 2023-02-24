// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(0).join("/")
  }
};
function PostType(docName, filePattern) {
  const doc = defineDocumentType(() => ({
    name: `${docName}`,
    contentType: "mdx",
    filePathPattern: `${filePattern}`,
    fields: {
      unit: { type: "string", description: "The unit of the post" },
      title: { type: "string", description: "The title of the post", required: true },
      date: { type: "string", description: "The date of the post", required: true },
      description: { type: "string", required: true },
      thumbnail: { type: "string", required: true }
    },
    computedFields: {
      url: {
        type: "string",
        resolve: (post) => `/${post._raw.flattenedPath.split("/").slice(0).join("/")}`
      },
      ...computedFields
    }
  }));
  return doc;
}
function UnitType(docName, filePattern) {
  const doc = defineDocumentType(() => ({
    name: `${docName}`,
    contentType: "mdx",
    filePathPattern: `${filePattern}`,
    fields: {
      title: { type: "string", description: "The title of the post", required: true },
      description: { type: "string", required: true },
      thumbnail: { type: "string" }
    },
    computedFields: {
      url: {
        type: "string",
        resolve: (post) => `/${post._raw.flattenedPath.split("/").slice(0).join("/")}`
      },
      ...computedFields
    }
  }));
  return doc;
}
var ChemistryPosts = PostType("ChemistryPosts", "chemistry/notes/**/*.mdx");
var AlgebraPosts = PostType("AlgebraPosts", "algebraII/notes/**/*.mdx");
var Subjects = UnitType("Subjects", "*.mdx");
var ChemistryUnits = UnitType("ChemistryUnits", "chemistry/units/**/*.mdx");
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [ChemistryPosts, AlgebraPosts, ChemistryUnits, Subjects],
  mdx: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath, remarkGfm]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LPMHOA3E.mjs.map
