import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { ButtonColor } from "../../Components/utils";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const List = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 15px 0px;
`;

const IconName = styled.Text`
  color: ${ButtonColor};
`;

const Line = styled.View`
  border: 1px solid ${ButtonColor};
  width: 100%;
  opacity: 0.3;
`;

const Center = ({ result, openBrowser }) => {
  return (
    <Container>
      <Line></Line>

      <List>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="md-film-outline"
            size={24}
            color={ButtonColor}
            style={{ marginBottom: 5 }}
            onPress={() =>
              openBrowser(`https://www.imdb.com/title/${result.imdb_id}/`)
            }
          />
          <IconName>Trailer</IconName>
        </View>
        <View style={{ alignItems: "center" }}>
          <Entypo
            name="download"
            size={24}
            color={ButtonColor}
            style={{ marginBottom: 5 }}
          />
          <IconName>Download</IconName>
        </View>

        <View style={{ alignItems: "center" }}>
          <FontAwesome5
            name="share-alt"
            size={24}
            color={ButtonColor}
            style={{ marginBottom: 5 }}
          />
          <IconName>Bagikan</IconName>
        </View>
      </List>

      <Line></Line>
    </Container>
  );
};

export default Center;
