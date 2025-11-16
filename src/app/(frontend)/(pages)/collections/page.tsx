import { getProductForShowcase } from '@/services/get-product-for-showcase'
import React from 'react'
import ProductContainer from '../../_components/landing/product-container'

const CollectionRootPage = async () => {
  const { featuredCollections, otherCollections } = await getProductForShowcase()
  return (
    <section className=" container mx-auto ">
      <div className="max-w-7xl mx-auto  pt-8 px-4">
        <h1 className="text-4xl font-light mb-8 text-center">Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden gap-8">
          {featuredCollections.map((collection, index) => (
            <ProductContainer key={collection.id} {...collection} index={index} />
          ))}
          {otherCollections.map((collection, index) => (
            <ProductContainer key={collection.id} {...collection} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionRootPage
