import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 0px 15px;
  margin-top: 20px;
`;

const Overview = styled.Text`
  opacity: 0.7;
  color: white;
`;

const CastBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CastText = styled.Text`
  color: white;
  opacity: 0.8;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

const Bottom = ({ result, cast, crew, loading }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Overview>{result.overview}</Overview>
      <View style={{ flexDirection: "row" }}>
        <CastBox>
          {cast?.map(
            (c, index) =>
              index < 2 && (
                <CastText key={index}>
                  {index === 1 ? ` , ${c.name}` : c.name}
                </CastText>
              )
          )}
        </CastBox>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Text
            style={{
              color: "white",
              opacity: 0.8,
              fontWeight: "bold",
              marginLeft: 5,
            }}
            onPress={() =>
              navigation.navigate("Credit", {
                cast,
                crew,
                loading,
              })
            }
          >
            더보기...
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default Bottom;
