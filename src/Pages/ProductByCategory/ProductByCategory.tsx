import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductShowCard from "../../components/Card/ProductShowCard/ProductShowCard";
import { useProductByCategory } from "../../lib/react query/queryAndMutaion";
import { productType } from "../../types/type";

const ProductByCategory = () => {
  const { slug } = useParams<{ slug: string }>();

  const [products, setProducts] = useState<productType[]>([]);

  const { data, isLoading, isError } = useProductByCategory(slug);

  React.useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (!slug) return null;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div className="container mx-auto px-4 py-5 ">
      <h1 className="ttext-2xl font-medium text-gray-800 uppercase mb-6">{slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center place-content-center">
        {products.map((product) => (
          <ProductShowCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
