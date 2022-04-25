import { Typography } from "antd";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography.Title>Bem vindo o delivery food</Typography.Title>
      <Typography.Paragraph>
        Para prosseguir, escolha uma das opções abaixo.
      </Typography.Paragraph>
      <Link href="/auth/signin">Entrar</Link>
      <Link href="/auth/signup">Criar uma conta</Link>
    </div>
  );
};

export default Home;
