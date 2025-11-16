import { getProductDetails } from '@/services/get-product-details'
import React from 'react'
import ProductDetailsContainer from '@/app/(frontend)/_components/product/product-details-container'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { Metadata } from 'next'
import { siteConfig } from '@/config/seo.config'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: payloadConfig })
  const result = await payload.find({
    collection: 'products',
    limit: 1000,
  })
  return result.docs.map((doc) => ({
    slug: doc.slug!,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const res = await getProductDetails(slug)
  if (!res?.productDetails) {
    return {}
  }
  const { productDetails } = res
  return {
    title: `${productDetails.name} | Urban Earth - Flooring, Rugs & Mats Nepal`,
    description: productDetails.shortDescription,
    openGraph: {
      title: `${productDetails.name} | Urban Earth - Flooring, Rugs & Mats Nepal`,
      description: productDetails.shortDescription,
      url: `${siteConfig.url}/collections/${productDetails.slug}`,
      siteName: 'Urban Earth',
      images: [
        {
          url:
            productDetails.images && productDetails.images.length > 0
              ? productDetails.images[0]
              : '/default-og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Urban Earth Product - ${productDetails.name}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${productDetails.name} | Urban Earth - Flooring, Rugs & Mats Nepal`,
      description: productDetails.shortDescription,
      images: [
        productDetails.images && productDetails.images.length > 0
          ? productDetails.images[0]
          : '/default-og-image.jpg',
      ],
    },
    alternates: {
      canonical: `https://urbanearth.com.np/collections/${productDetails.slug}`,
    },
  }
}

const ProductRootPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const res = await getProductDetails(slug)
  if (!res?.productDetails) {
    return <div>Product not found</div>
  }
  const { productDetails } = res
  const product = productDetails
  return (
    <>
      <div className="">
        <ProductDetailsContainer product={product} />
      </div>
    </>
  )
}

export default ProductRootPage
