import React from "react";
import styled from "styled-components/native";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import { ButtonColor } from "../../Components/utils";
import { apiImagePath } from "../../Components/api";
import { Text, View, Dimensions } from "react-native";

const { height: HEIGHT } = Dimensions.get("window");

const HeaderBox = styled.View`
  height: ${HEIGHT / 2};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const BackdropImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Play = styled(EvilIcons)`
  position: absolute;
  font-size: 80px;
  color: white;
`;

const HeaderContents = styled.View`
  position: absolute;
  left: 20px;
  bottom: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const SubContents = styled.View``;

const RunTimeBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RunTime = styled.Text`
  font-size: 14px;
  color: white;
  margin: 10px 0px;
  opacity: 0.7;
  margin-right: 14px;
`;

const ButtonBox = styled.View`
  background-color: ${ButtonColor};
  border-radius: 3px;
  padding: 2px;
  justify-content: center;
  align-items: center;
`;

const Genre = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GenreText = styled.Text`
  font-size: 14px;
  opacity: 0.8;
`;

const Header = ({ result, openBrowser }) => {
  return (
    <HeaderBox>
      <BackdropImage source={{ uri: apiImagePath(result.poster_path) }} />

      <Play
        name="play"
        onPress={() =>
          openBrowser(
            `https://www.youtube.com/watch?v=${result?.videos?.results[0]?.key}`
          )
        }
      />
      <HeaderContents>
        <Title>{result.original_title || result.original_name}</Title>
        <SubContents>
          <RunTimeBox>
            <RunTime>{result.runtime} Minutes</RunTime>
            <ButtonBox>
              <Text style={{ color: "black", fontWeight: "bold" }}>HD</Text>
            </ButtonBox>
          </RunTimeBox>
          <Genre>
            {result?.genres?.map((genre, index) => {
              if (result.genres.length - 1 === index) {
                return (
                  <GenreText
                    key={index}
                    style={{ color: "white", opacity: 0.7 }}
                  >
                    {genre.name}
                  </GenreText>
                );
              } else {
                return (
                  <View
                    key={index}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Entypo name="dot-single" size={24} color="red" />
                    <GenreText style={{ color: "white", opacity: 0.7 }}>
                      {genre.name}
                    </GenreText>
                  </View>
                );
              }
            })}
          </Genre>
        </SubContents>
      </HeaderContents>
    </HeaderBox>
  );
};

export default Header;
