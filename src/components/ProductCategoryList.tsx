import { Category } from "../types/Product";
import { ProductCategory } from "./ProductCategory";

type Props = {
  categories: Category[];
};

export const ProductCategoryList = ({ categories }: Props) => (
  <div
    style={{
      marginTop: 16,
    }}
  >
    {categories.map(({ id, category }) => (
      <ProductCategory key={id} category={category} />
    ))}
  </div>
);
