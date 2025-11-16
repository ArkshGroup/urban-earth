import React from 'react'
import ProductShowCaseContainer from './product-show-case-container'
import { getProductForShowcase } from '@/services/get-product-for-showcase'

const BrowserProductSection = async () => {
  const { featuredCollections, otherCollections } = await getProductForShowcase()
  return (
    <ProductShowCaseContainer
      featuredCollections={featuredCollections}
      otherCollections={otherCollections}
    />
  )
}

export default BrowserProductSection
