import { defineDocumentType, defineNestedType, makeSource, type ComputedFields, } from 'contentlayer/source-files'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(0).join('/'),
  },
};

 function PostType(docName: string, filePattern: string) {
  const doc = defineDocumentType(() => ({
    name: `${docName}`,
    contentType: 'mdx',
    filePathPattern: `${filePattern}`,
    fields: {
      unit: { type: 'string', description: 'The unit of the post' },
      title: { type: 'string', description: 'The title of the post', required: true },
      date: { type: 'string', description: 'The date of the post', required: true },
      description: { type: 'string', required: true },
      thumbnail: { type: 'string', required: true },
    },
    computedFields: {
      url: {
        type: 'string',
        resolve: (post) => `/${post._raw.flattenedPath.split('/').slice(0).join('/')}`,
      },
      ...computedFields,
    }}))
  return doc
}

 function UnitType(docName: string, filePattern: string) {
  const doc = defineDocumentType(() => ({
    name: `${docName}`,
    contentType: 'mdx',
    filePathPattern: `${filePattern}`,
    fields: {
      title: { type: 'string', description: 'The title of the post', required: true },
      description: { type: 'string', required: true },
      thumbnail: { type: 'string' },
    },
    computedFields: {
      url: {
        type: 'string',
        resolve: (post) => `/${post._raw.flattenedPath.split('/').slice(0).join('/')}`,
      },
      ...computedFields,
    }}))
  return doc
}

const ChemistryPosts = PostType('ChemistryPosts', 'chemistry/notes/**/*.mdx')
const AlgebraPosts = PostType('AlgebraPosts', 'algebraII/notes/**/*.mdx')


const ChemistryUnits = UnitType('ChemistryUnits', 'chemistry/units/**/*.mdx')

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [ChemistryPosts, AlgebraPosts, ChemistryUnits],
  mdx: { 
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath, remarkGfm],
  }
})