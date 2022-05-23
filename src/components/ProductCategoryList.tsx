import { For } from "react-extras";
import { Category } from "../types/Product";
import { ProductCategory } from "./ProductCategory";

type Props = {
  categories: Category[];
};

export const ProductCategoryList = ({ categories }: Props) => {
  const renderCategories = ({ id, category }: Category) => (
    <ProductCategory key={id} category={category} />
  );

  return (
    <div
      style={{
        marginTop: 16,
      }}
    >
      <For of={categories} render={renderCategories} />
    </div>
  );
};
