import React, { useState } from "react";
import styled from "styled-components/native";
import { apiImagePath } from "../../Components/api";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { ButtonColor, trimText } from "../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Header = styled.View`
  justify-content: space-between;
  padding: 0px 20px;
  flex-direction: row;
  margin-top: 40px;
`;

const TitleBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
`;

const IconBox = styled.View`
  justify-content: center;
  align-items: center;
`;

const Icon = styled(Feather)`
  font-size: 24px;
  color: white;
`;

const Badge = styled.View`
  border-radius: 100px;
  background-color: red;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.6;
`;

const BottomButtonContainer = styled.View`
  position: absolute;
  left: 20px;
  bottom: 20px;
  flex-direction: row;
  width: 210px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 3px;
  height: 39px;
  width: 100px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ poster, title, id }) => {
  const [trailerBackground, setTrailerBackground] = useState(true);
  const navigation = useNavigation();

  return (
    <Container>
      <PosterContainer source={{ uri: apiImagePath(poster) }} />
      <Header>
        <TitleBox>
          <FontAwesome5
            name="hand-holding-heart"
            size={20}
            color="yellow"
            style={{ marginRight: 10 }}
          />
          <Title>{trimText(title, 20)}</Title>
        </TitleBox>

        <IconBox>
          <Icon name="bell" />
          <Badge />
        </IconBox>
      </Header>
      <BottomButtonContainer>
        <Button style={{ backgroundColor: ButtonColor }}>
          <FontAwesome
            name="play-circle-o"
            size={20}
            color="white"
            style={{ marginRight: 5 }}
          />
          <ButtonText onPress={() => navigation.navigate("Detail", { id })}>
            Play
          </ButtonText>
        </Button>

        <Button
          onPress={() => {
            setTrailerBackground((prev) => !prev);
          }}
          style={{
            backgroundColor: trailerBackground ? "transparent" : "yellow",
          }}
        >
          <MaterialCommunityIcons
            name="movie-open-outline"
            size={20}
            color="white"
            style={{ marginRight: 5 }}
          />
          <ButtonText onPress={() => navigation.navigate("Detail", { id })}>
            TRAILER
          </ButtonText>
        </Button>
      </BottomButtonContainer>
    </Container>
  );
};

export default Slide;
