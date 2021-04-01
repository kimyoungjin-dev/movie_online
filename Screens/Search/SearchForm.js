import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { ButtonColor } from "../../Components/utils";

const Container = styled.View`
  align-items: center;
  margin-top: 30px;
`;

const Form = styled.View`
  padding: 10px 0px 10px 20px;
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(44, 45, 49);
  border-radius: 3px;
`;

const Input = styled.TextInput`
  width: 90%;
  color: white;
  font-size: 20px;
  padding-left: 10px;
`;

const Icon = styled(FontAwesome)`
  font-size: 24px;
  margin-right: 10px;
  color: ${ButtonColor};
`;

const SearchForm = ({ value, onSearch, onChange }) => {
  return (
    <Container>
      <Form>
        <Icon
          name="search"
          size={24}
          color="white"
          onPress={() => onSearch()}
        />

        <Input
          value={value}
          placeholder="Search"
          onSubmitEditing={onSearch}
          onChangeText={onChange}
          placeholderTextColor="gray"
        />
      </Form>
    </Container>
  );
};

export default SearchForm;
