import { Button, Checkbox, Form, Input, Typography } from "antd";
import { NextPage } from "next";
import Link from "next/link";

const { Title } = Typography;

const SignIn: NextPage = () => {
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
      <Title style={{}}>Login</Title>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Senha">
          <Input.Password type="password" placeholder="Senha" />
        </Form.Item>
        <Form.Item>
          <Checkbox>Manter-me logado</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
            }}
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
      <Link href="/auth/reset">Esqueci a senha</Link>
      <Link href="/auth/signup">
        Não tem uma conta ainda? Registre-se aqui.
      </Link>
    </div>
  );
};

export default SignIn;
