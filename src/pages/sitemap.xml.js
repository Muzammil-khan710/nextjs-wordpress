import { getSitemapProps } from '@faustwp/core';

export default function Sitemap() {}

export function getServerSideProps(ctx) {
  return getSitemapProps(ctx, {
    wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL  || 'https://blog.rovae.in' ,
    frontendUrl: process.env.FRONTEND_URL || 'https://nextjs-wordpress-rho-sandy.vercel.app/' ,
    pages: [
      {
        path: '/',
      },
      {
        path: '/about',
      },
      {
        path: '/privacy',
      },
    ],
    sitemapPathsToIgnore: ['/post_tag-sitemap.xml', '/category-sitemap.xml', '/post-sitemap.xml', '/']
  });
}