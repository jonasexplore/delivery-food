import { NextPage } from "next";
import Image from "next/image";
import { For } from "react-extras";

import { deals } from "../mocks/deals";
import { products } from "../mocks/products";
import { HeaderMenu } from "../components/HeaderMenu";
import { ProductCardList } from "../components/ProductCardList";

const Home: NextPage = () => {
  const renderDeals = (deal: any) => (
    <div
      key={deal.id}
      style={{
        padding: 8,
      }}
    >
      <Image
        src={deal.image}
        width={570}
        height={188}
        alt="banner proporcional"
      />
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
        }}
      >
        <HeaderMenu />
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            marginTop: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-around",
              marginBottom: 24,
            }}
          >
            <For of={deals} render={renderDeals} />
          </div>
          <ProductCardList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
