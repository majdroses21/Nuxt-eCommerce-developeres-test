
export const useSEO = () => {
  const appConfig = useAppConfig()
  
  const setHomeSEO = () => {
    useSeoMeta({
      title: `${appConfig.siteName} - ${appConfig.siteDescription}`,
      description: 'Discover a wide range of high-quality products at the best prices. Shop now and enjoy a unique shopping experience with fast delivery service.',
      keywords: 'Online shopping, online store, high quality products, fast delivery, reasonable prices',
      author: appConfig.siteName,
      ogTitle: appConfig.siteName,
      ogDescription: appConfig.siteDescription,
      ogImage: `${appConfig.siteUrl}${appConfig.siteLogo}`,
      ogUrl: appConfig.siteUrl,
      ogType: 'website',
      ogSiteName: appConfig.siteName,
      twitterCard: 'summary_large_image',
      twitterTitle: appConfig.siteName,
      twitterDescription: appConfig.siteDescription,
      twitterImage: `${appConfig.siteUrl}${appConfig.siteLogo}`,
      robots: 'index, follow',
      canonical: appConfig.siteUrl
    })

    // Structured Data 
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": appConfig.siteName,
            "description": appConfig.siteDescription,
            "url": appConfig.siteUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${appConfig.siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": appConfig.siteName,
              "url": appConfig.siteUrl,
              "logo": {
                "@type": "ImageObject",
                "url": `${appConfig.siteUrl}${appConfig.siteLogo}`
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": appConfig.contact.phone,
                "contactType": "Customer Service",
                "email": appConfig.contact.email
              },
              "sameAs": [
                `https://twitter.com/${appConfig.socialMedia.twitter.replace('@', '')}`,
                `https://facebook.com/${appConfig.socialMedia.facebook}`,
                `https://instagram.com/${appConfig.socialMedia.instagram.replace('@', '')}`
              ]
            }
          })
        }
      ]
    })
  }

  const setCategorySEO = (categorySlug: string, categoryName: string, description?: string) => {
    const categoryDisplayName = getCategoryDisplayName(categorySlug)
    const pageTitle = `${categoryDisplayName} - ${appConfig.siteName}`
    const pageDescription = description || `Shop the best ${categoryDisplayName} products at reasonable prices and high quality. Discover a wide range of ${categoryDisplayName} with fast delivery service.`
    const pageUrl = `${appConfig.siteUrl}/categories/${categorySlug}`

    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      keywords: `${categoryDisplayName}, shop ${categoryDisplayName}, products ${categoryDisplayName}, ${appConfig.siteName}`,
      ogTitle: pageTitle,
      ogDescription: pageDescription,
      ogImage: `${appConfig.siteUrl}/images/categories/${categorySlug}.jpg`,
      ogUrl: pageUrl,
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: pageTitle,
      twitterDescription: pageDescription,
      robots: 'index, follow',
      canonical: pageUrl
    })

    // Structured Data Category
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": categoryDisplayName,
            "description": pageDescription,
            "url": pageUrl,
            "isPartOf": {
              "@type": "WebSite",
              "name": appConfig.siteName,
              "url": appConfig.siteUrl
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "الرئيسية",
                  "item": appConfig.siteUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Categories",
                  "item": `${appConfig.siteUrl}/categories`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": categoryDisplayName,
                  "item": pageUrl
                }
              ]
            }
          })
        }
      ]
    })
  }

  const setProductSEO = (product: any) => {
    if (!product) return

    const pageTitle = `${product.title} - ${appConfig.siteName}`
    const pageDescription = product.description.length > 160 
      ? product.description.substring(0, 157) + '...' 
      : product.description
    const pageUrl = `${appConfig.siteUrl}/products/${product.id}`

    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      keywords: `${product.title}, ${product.category}, Online Store , ${appConfig.siteName}`,
      author: appConfig.siteName,
      ogTitle: pageTitle,
      ogDescription: pageDescription,
      ogImage: product.image,
      ogUrl: pageUrl,
      ogType: 'product',
      ogPriceAmount: product.price,
      ogPriceCurrency: 'AED',
      twitterCard: 'summary_large_image',
      twitterTitle: pageTitle,
      twitterDescription: pageDescription,
      twitterImage: product.image,
      robots: 'index, follow',
      canonical: pageUrl
    })

    // Enhanced Product Structured Data
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.title,
            "image": [product.image],
            "description": product.description,
            "sku": `PROD-${product.id}`,
            "mpn": product.id,
            "brand": {
              "@type": "Brand",
              "name": appConfig.siteName
            },
            "category": product.category,
            "offers": {
              "@type": "Offer",
              "url": pageUrl,
              "priceCurrency": "AED",
              "price": product.price,
              "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": appConfig.siteName,
                "url": appConfig.siteUrl
              },
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "AE",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "merchantReturnDays": 30
              },
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "AED"
                },
                "deliveryTime": {
                  "@type": "ShippingDeliveryTime",
                  "handlingTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 1,
                    "maxValue": 2,
                    "unitCode": "DAY"
                  },
                  "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 1,
                    "maxValue": 3,
                    "unitCode": "DAY"
                  }
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.rating?.rate || 4.5,
              "reviewCount": product.rating?.count || 10,
              "bestRating": 5,
              "worstRating": 1
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": appConfig.siteUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Categories",
                  "item": `${appConfig.siteUrl}/products`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": product.category,
                  "item": `${appConfig.siteUrl}/categories/${product.category}`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": product.title,
                  "item": pageUrl
                }
              ]
            }
          })
        }
      ]
    })
  }

  const setCartSEO = () => {
    const pageTitle = `Cart- ${appConfig.siteName}`
    const pageDescription = 'Review and manage items in your shopping cart. Complete your purchase easily and securely.'
    const pageUrl = `${appConfig.siteUrl}/cart`

    useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      ogTitle: pageTitle,
      ogDescription: pageDescription,
      ogUrl: pageUrl,
      ogType: 'website',
      robots: 'noindex, follow', 
      canonical: pageUrl
    })
  }

  return {
    setHomeSEO,
    setCategorySEO,
    setProductSEO,
    setCartSEO
  }
}

// Helper function to get category display name
export const getCategoryDisplayName = (slug: string): string => {
  const categories: Record<string, string> = {
    'electronics': 'electronics',
    'jewelery': 'jewelery',
    'men-clothing': 'Men Clothing',
    'women-clothing': 'Women Clothing',
    'books': 'Books',
    'sports': 'Sports',
    'home-garden': 'Home Garden'
  }
  
  return categories[slug] || slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
}