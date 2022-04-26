import { Input, Menu, Typography } from "antd";
import { NextPage } from "next";
import Link from "next/link";

import { ProductCardList } from "../components/ProductCardList";

import deal1 from "../assets/images/deals/1.jpg";
import deal2 from "../assets/images/deals/2.jpg";
import Image from "next/image";
import { products } from "../mocks/products";

const { Search } = Input;

const deals = [
  {
    id: "1",
    image: deal1,
  },
  {
    id: "2",
    image: deal2,
  },
];

const Home: NextPage = () => {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography.Title level={1} style={{ fontSize: 16, marginLeft: 16 }}>
            Food
            <br />
            <span style={{ color: "blue" }}>Delivery</span>
          </Typography.Title>
          <Search
            placeholder="Procurar"
            style={{ width: 200, margin: "0 16px" }}
          />
          <Menu
            mode="horizontal"
            style={{
              justifyContent: "right",
              flex: 1,
            }}
          >
            <Menu.Item key="1">Restaurantes</Menu.Item>
            <Menu.Item key="2">Meus pedidos</Menu.Item>
          </Menu>
        </div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            marginTop: 24,
          }}
        >
          <Typography.Title>Bem vindo o delivery food</Typography.Title>
          <Typography.Paragraph>
            Para prosseguir, escolha uma das opções abaixo.
          </Typography.Paragraph>
          <Link href="/auth/signin">Entrar</Link>
          <Link href="/auth/signup">Criar uma conta</Link>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              marginBottom: 24,
            }}
          >
            {deals.map((deal) => (
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
            ))}
          </div>

          <ProductCardList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
