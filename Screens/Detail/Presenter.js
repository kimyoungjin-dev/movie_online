import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";
import Header from "./Header";
import Center from "./Center";
import { useNavigation } from "@react-navigation/native";

const Overview = styled.Text`
  opacity: 0.7;
  color: white;
`;

const CastBox = styled.View`
  flex-direction: row;
`;

const CastText = styled.Text`
  color: white;
  opacity: 0.8;
`;

const Presenter = ({ result, loading, cast, crew }) => {
  const navigation = useNavigation();
  return (
    <ScrollContainer loading={loading}>
      <Header result={result} />
      <Center />
      <Overview>{result.overview}</Overview>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <CastBox>
          {cast?.map(
            (c, index) =>
              index < 2 && <CastText key={index}>{c.original_name}</CastText>
          )}
        </CastBox>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Credit", {
              cast,
              crew,
              loading,
            })
          }
        >
          <Text style={{ color: "white", opacity: 0.7 }}>...더보기</Text>
        </TouchableOpacity>
      </View>
    </ScrollContainer>
  );
};

export default Presenter;
