import { ProductCard } from "./ProductCard";
import { Product } from "../types/Product";

type Props = {
  products: Product[];
};

export const ProductCardList = ({ products }: Props) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {products.map(({ id, categories, company, deliveryTime, frontCover }) => (
      <ProductCard
        key={id}
        categories={categories}
        company={company}
        deliveryTime={deliveryTime}
        frontCover={frontCover}
      />
    ))}
  </div>
);
