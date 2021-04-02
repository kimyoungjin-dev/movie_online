import React from "react";
import styled from "styled-components/native";
import { Image, Text, View } from "react-native";
import { apiImagePath } from "../../Components/api";
import { ButtonColor } from "../../Components/utils";

const Container = styled.View`
  padding: 0px 15px;
`;

const Name = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Value = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 16px;
`;

const Contents = ({ result }) => {
  console.log(result);
  return (
    <Container>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Name>productionCompanies</Name>
        <Value>
          {result?.production_companies?.map((e, index) => (
            <View key={index} style={{ alignItems: "center" }}>
              <Image
                source={{ uri: apiImagePath(e.logo_path) }}
                style={{
                  height: 80,
                  width: 80,
                  marginRight: 20,
                  color: "white",
                }}
              />
            </View>
          ))}
        </Value>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Name>Tagline</Name>
        <Value>
          {result.tagline ? result.tagline : "TabLine이 존재하지않습니다"}
        </Value>
      </View>

      {result?.videos?.results?.length > 0 && (
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Name>Videos</Name>
          <Value>
            {result?.videos?.results?.map((v, index) => (
              <View key={index} style={{ marginBottom: 30 }}>
                <Text style={{ color: ButtonColor, marginBottom: 10 }}>
                  {v.name} {v.type}
                </Text>
                <Text style={{ color: "white", marginBottom: 5 }}>
                  {v.site}
                </Text>
                <Text
                  onPress={() =>
                    openBrowser(`https://www.youtube.com/watch?v=${v.key}`)
                  }
                  style={{ color: "white", opacity: 0.7, fontSize: 16 }}
                >{`https://www.youtube.com/watch?v=${v.key}`}</Text>
              </View>
            ))}
          </Value>
        </View>
      )}
      {result?.seasons?.length > 0 && (
        <View>
          {result?.seasons.map((s) => (
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Value
                style={{ marginBottom: 10 }}
              >{`${s.name} 시즌회차 : ${s.season_number}`}</Value>
              <Image
                source={{ uri: apiImagePath(s.poster_path) }}
                style={{ height: 100, width: 200, borderRadius: 3 }}
              />
            </View>
          ))}
        </View>
      )}

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Name>SpokenLanguages</Name>
        <Value>
          {result?.spoken_languages?.map((v, index) => (
            <Text key={index} style={{ color: ButtonColor }}>
              {v.name}
            </Text>
          ))}
        </Value>
      </View>
    </Container>
  );
};

export default Contents;
