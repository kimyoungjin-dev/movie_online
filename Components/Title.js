import React from "react";
import styled from "styled-components/native";

const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin: 20px 0px;
`;

const SeeAll = styled.Text`
  color: rgb(237, 182, 56);
  font-size: 16px;
`;

const Title = ({ title }) => {
  return (
    <Box>
      <Text>{title}</Text>
      <SeeAll>See all</SeeAll>
    </Box>
  );
};

export default Title;
