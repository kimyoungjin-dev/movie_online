import React from "react";
import styled from "styled-components/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { apiImagePath } from "../../Components/api";
import { Text } from "react-native";

const Top = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const BellContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BellBox = styled.View`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const BellICon = styled(FontAwesome)`
  color: white;
  font-size: 24px;
`;

const RightArrow = styled(Entypo)`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

const TopNowContent = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 20px 0px;
  align-items: center;
`;

const Dot = styled.View`
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50px;
`;

const PosterContainer = styled.Image`
  height: 80px;
  width: 120px;
  border-radius: 3px;
  margin: 0px 20px;
`;

const Contents = styled.View`
  color: white;
`;

const Title = styled.Text`
  color: white;
  opacity: 0.6;
  font-size: 14px;
  margin: 10px 0px;
`;

const Value = styled.Text`
  opacity: 0.6;
  color: white;
  font-size: 14px;
`;

const TopData = ({ showComing }) => {
  return (
    <>
      <Top>
        <BellContainer>
          <BellBox>
            <BellICon name="bell" />
          </BellBox>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>
            알림 설정
          </Text>
        </BellContainer>
        <RightArrow name="chevron-small-right" />
      </Top>
      <TopNowContent>
        <Dot />
        <PosterContainer
          source={{ uri: apiImagePath(showComing[0]?.poster_path) }}
        />
        <Contents>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            신규콘텐츠
          </Text>
          <Title>{showComing[0]?.original_name}</Title>
          <Value>{showComing[0]?.first_air_date}</Value>
        </Contents>
      </TopNowContent>
      <TopNowContent>
        <Dot />
        <PosterContainer
          source={{ uri: apiImagePath(showComing[1]?.poster_path) }}
        />
        <Contents>
          <Text style={{ color: "white" }}>절찬 스트리밍 중</Text>
          <Title>{showComing[1]?.original_name}</Title>
          <Value>{showComing[1]?.first_air_date}</Value>
        </Contents>
      </TopNowContent>
    </>
  );
};

export default TopData;
