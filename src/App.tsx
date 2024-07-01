import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";
import Image from "./components/Image";
import GoodsItem from "./components/GoodsItem";
import { Grid, Container } from "./components/Layout";

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const App: React.FC = () => {
  const dummyProducts = [
    {
      id: 1,
      imageSrc: "/logo192.png",
      subtitle: "인기상품",
      title: "상품 1",
      amount: 15000,
    },
    {
      id: 2,
      imageSrc: "/logo512.png",
      subtitle: "신상품",
      title: "상품 2",
      amount: 20000,
    },
    {
      id: 3,
      imageSrc: "/favicon.ico",
      subtitle: "할인상품",
      title: "상품 3",
      amount: 18000,
    },
    {
      id: 4,
      imageSrc: "/logo192.png",
      subtitle: "추천상품",
      title: "상품 4",
      amount: 22000,
    },
  ];

  return (
    <div>
      <Header>
        <Container>
          <Image src="/logo512.png" alt="로고" ratio={16 / 9} radius={8} />
        </Container>
      </Header>

      <Container>
        <Title>상품 목록</Title>

        <SearchForm>
          <Input placeholder="상품 검색" size="responsive" />
          <Button theme="primary" size="responsive">
            검색
          </Button>
        </SearchForm>

        <Grid columns={4} gap="20px">
          {dummyProducts.map((product, index) => (
            <GoodsItem
              key={product.id}
              imageSrc={product.imageSrc}
              subtitle={product.subtitle}
              title={product.title}
              amount={product.amount}
              rankingIndex={index + 1}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
