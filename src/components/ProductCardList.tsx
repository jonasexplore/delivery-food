import { ProductCard } from "./ProductCard";
import { Product } from "../types/Product";
import { For } from "react-extras";

type Props = {
  products: Product[];
};

export const ProductCardList = ({ products }: Props) => {
  const renderProducts = ({
    id,
    categories,
    company,
    deliveryTime,
    frontCover,
  }: Product) => (
    <ProductCard
      key={id}
      categories={categories}
      company={company}
      deliveryTime={deliveryTime}
      frontCover={frontCover}
    />
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingBottom: 32,
      }}
    >
      <For of={products} render={renderProducts} />
    </div>
  );
};
