import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Router = styled.View`
  justify-content: flex-end;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 10px;
  padding: 0px 5px;
`;

const RouterButton = styled.View`
  flex-direction: row;
  color: white;
  opacity: 0.8;
  align-items: center;
  width: 150px;
  justify-content: space-between;
`;

const Category = () => {
  const navigation = useNavigation();

  return (
    <Router>
      <RouterButton>
        <TouchableOpacity onPress={() => navigation.navigate("Movie")}>
          <Text style={{ color: "white", fontSize: 16 }}>영화</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("TV")}>
          <Text style={{ color: "white", fontSize: 16 }}>TV 프로그램</Text>
        </TouchableOpacity>
      </RouterButton>
    </Router>
  );
};

export default Category;
