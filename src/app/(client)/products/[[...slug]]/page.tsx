import ProductDetailsPage from "@/route-pages/productDetailsPage";

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { slug: string[] } }) {
  return <ProductDetailsPage type={params.slug[0]} slug={params.slug[1]} />;
}
