import ProductList from "@/components/shared/products/product-list";
import { getLastestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

const Homepage = async() => {

  const latestProducts = await getLastestProducts()
  return (
    <>
      <ProductList 
        data={latestProducts} 
        title="Newest arrivals" 
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </>
  );
}
 
export default Homepage;