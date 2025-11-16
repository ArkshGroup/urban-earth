// src/components/RichText/index.tsx
'use client' // If it's a client component in Next.js

import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

export function RichText(props: Props) {
  const { className, ...rest } = props
  return <RichTextConverter {...rest} className={className} />
}
