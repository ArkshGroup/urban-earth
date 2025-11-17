import { cn } from '@/lib/utils'
import React from 'react'

export function GridBackgroundDemo() {
  return (
    <div className="absolute top-0 bg-primary/5 opacity-10 flex h-full w-full items-center justify-center ">
      <div
        className={cn(
          'absolute inset-0 opacity-50',
          'bg-size-[80px_80px]',
          'bg-[linear-gradient(to_right,#f97316_2px,transparent_1px),linear-gradient(to_bottom,#f97316_2px,transparent_1px)]',
        )}
      />
    </div>
  )
}
