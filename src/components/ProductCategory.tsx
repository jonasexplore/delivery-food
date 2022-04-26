import { Tag } from "antd";
import { Category } from "../types/Product";

type Props = Partial<Category>;

export const ProductCategory = ({ category }: Props) => {
  return (
    <Tag
      color="default"
      style={{
        borderRadius: "16px",
        padding: "0 12px",
      }}
    >
      {category}
    </Tag>
  );
};
