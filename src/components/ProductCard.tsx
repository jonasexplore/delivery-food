import { Card } from "antd";
import Image from "next/image";
import { Product } from "../types/Product";
import { ProductCategoryList } from "./ProductCategoryList";

type Props = Omit<Product, "id">;

const { Meta } = Card;

export const ProductCard = ({
  categories,
  company,
  deliveryTime,
  frontCover,
}: Props) => (
  <Card
    hoverable
    style={{ width: 300, borderRadius: 16, marginRight: 16, marginTop: 16 }}
    cover={
      <Image
        width={350}
        height={160}
        alt="example"
        src={frontCover}
        style={{
          borderRadius: "16px 16px 0px 0px",
        }}
      />
    }
  >
    <Meta title={company} description={deliveryTime} />
    <ProductCategoryList categories={categories} />
  </Card>
);
