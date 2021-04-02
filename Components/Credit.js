import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "./SlideComponent/ScrollContainer";
import { View, Text } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const Contents = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const CastView = styled.View`
  align-items: center;
  width: 180px;
`;

const Name = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;
const Credit = ({
  route: {
    params: { cast, crew, loading },
  },
}) => {
  return (
    <ScrollContainer loading={loading}>
      <Container>
        <Contents>
          <View style={{ alignItems: "center" }}>
            <Name>Cast</Name>
            {cast.map((c, index) => (
              <CastView key={index}>
                <Text
                  style={{ color: "white", opacity: 0.7, marginBottom: 10 }}
                >
                  {c.original_name}
                </Text>
              </CastView>
            ))}
          </View>

          <View>
            <Name>Crew</Name>
            {crew.map((c, index) => (
              <CastView key={index}>
                <Text
                  style={{ color: "white", opacity: 0.7, marginBottom: 10 }}
                >
                  {c.original_name}
                </Text>
              </CastView>
            ))}
          </View>
        </Contents>
      </Container>
    </ScrollContainer>
  );
};

export default Credit;
