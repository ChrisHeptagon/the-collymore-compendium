// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type AlgebraPosts = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'AlgebraPosts'
  /** The unit of the post */
  unit?: string | undefined
  /** The title of the post */
  title: string
  /** The date of the post */
  date: string
  description: string
  thumbnail: string
  /** MDX file body */
  body: MDX
  url: string
  slug: string
}

export type ChemistryPosts = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'ChemistryPosts'
  /** The unit of the post */
  unit?: string | undefined
  /** The title of the post */
  title: string
  /** The date of the post */
  date: string
  description: string
  thumbnail: string
  /** MDX file body */
  body: MDX
  url: string
  slug: string
}

export type ChemistryUnits = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'ChemistryUnits'
  /** The title of the post */
  title: string
  description: string
  thumbnail?: string | undefined
  /** MDX file body */
  body: MDX
  url: string
  slug: string
}

export type Subjects = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Subjects'
  /** The title of the post */
  title: string
  description: string
  thumbnail?: string | undefined
  /** MDX file body */
  body: MDX
  url: string
  slug: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = AlgebraPosts | ChemistryPosts | ChemistryUnits | Subjects
export type DocumentTypeNames = 'AlgebraPosts' | 'ChemistryPosts' | 'ChemistryUnits' | 'Subjects'

export type NestedTypes = never
export type NestedTypeNames = never


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  AlgebraPosts: AlgebraPosts
  ChemistryPosts: ChemistryPosts
  ChemistryUnits: ChemistryUnits
  Subjects: Subjects
}

export type NestedTypeMap = {

}

 