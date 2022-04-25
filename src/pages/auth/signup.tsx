import { Button, Checkbox, Form, Input, Typography } from "antd";
import { NextPage } from "next";
import Link from "next/link";

const { Title } = Typography;

const SignUp: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title>Criar uma conta</Title>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Senha">
          <Input.Password type="password" placeholder="Senha" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
            }}
          >
            Criar
          </Button>
        </Form.Item>
      </Form>
      <Link href="/auth/signin">Já tem uma conta? Entre por aqui.</Link>
    </div>
  );
};

export default SignUp;
