import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const clientShopify = createStorefrontApiClient({
  storeDomain: "https://test-shop-sneaker.myshopify.com",
  apiVersion: "2025-01",
  publicAccessToken: "7c442d59f3af355d4dbfb1b7420aaf9e",
});

const getShopName = async () => {
  const shopQuery = `
    query shop {
      shop {
        name
        id
      }
    }
  `;

  const { data, errors, extensions } = await clientShopify.request(shopQuery);

  return { data, errors, extensions };
};

const getProducts = async () => {
  const productQuery = `
    query {
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    handle
                    images(first: 10) {
                        nodes {
                            id
                            height
                            width
                            url
                        }
                    }
                }
                cursor
            }
            pageInfo {
                hasNextPage
            }
        }
    }
    `;

  const { data, errors, extensions } = await clientShopify.request(
    productQuery,
    {
      variables: {
        handle: "sample-product",
      },
      headers: {
        "Shopify-Storefront-Id": "gid://shopify/Shop/61438951542",
      },
    }
  );

  return { data, errors, extensions };
};

export { clientShopify, getShopName, getProducts };
