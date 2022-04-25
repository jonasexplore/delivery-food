import { Button, Form, Input, Typography } from "antd";
import { NextPage } from "next";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const SignIn: NextPage = () => {
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
      <Title>Solicitar uma nova senha</Title>
      <Paragraph
        style={{
          fontSize: "1rem",
        }}
      >
        Por favor, informe abaixo o seu email para recuperarmos seu acesso ^^.
      </Paragraph>
      <Form
        layout="vertical"
        style={{
          width: "25%",
        }}
      >
        <Form.Item>
          <Input.Group compact>
            <Input placeholder="Email" style={{ width: "calc(100% - 85px)" }} />
            <Button type="primary">Próximo</Button>
          </Input.Group>
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="/">Voltar</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
