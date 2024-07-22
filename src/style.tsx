import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Form,Field } from "formik";
export const Text = styled.p`
  margin: 0;
  font-size: 13px;
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7.5px;
  left: 5px;
  color: #ccc;
`;
export const CheckboxGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const InputsContainer = styled.div``;
export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-size: calc(10px + 2vmin); */
  color: #373737;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
  width: 32%;
  height: 70%;
  background-color: #fff;
  padding: 120px;
  border-bottom: 1px solid gray;
`;
export const InputOne = styled(Field)`
  color: black;
  font-size: 13px;
  padding: 0 0 0 8px;
  width: 400px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  &:focus {
    outline: none;
    background-color: #fff;
  }
`;
export const InputTwo = styled(Field)`
  color: black;
  font-size: 13px;
  padding: 0 0 0 10px;
  height: 30px;
  width: 90px;
  border: 1px solid #ccc;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;
export const InputThree = styled.input`
  color: black;
  font-size: 13px;
  padding: 0 0 0 25px;
  height: 30px;
  width: 180px;
  border: 1px solid #ccc;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;
export const TopHeading = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: column;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid lightGray;
`;
export const Label = styled.div`
  display: flex;
  gap: 5px;
`;
export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid lightGray;
`;
export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
`;
export const SubmitButton = styled.button`

  width: 180px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color:#fff;
  background-color: #F16D36;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: 5px;
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: relative;

  &:checked {
    background-color: #f06d36;
    border-color: #f06d36;
  }

  &:checked::before {
    content: "\\2713";
    color: white;
    position: absolute;
    top: -1;
    left: 3px;
    font-size: 10px;
  }
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: 5px;
  appearance: none;
  border: 1px solid #ccc;
  
  border-radius: 5px;
  position: relative;

  &:checked {
    background-color: #327B91;
    border-color: #327B91;
  }

  &:checked::before {
    content: "\\2713";
    color: white;
    position: absolute;
    top: -1;
    left: 3px;
    font-size: 10px;
  }
`;
export const CollapsedContainer = styled.div`
width: 100%;
display:flex;
justify-Content:flex-start;
align-items:flex-start;
flex-direction:column;
padding:5px;
`;
export const CollapsedButton = styled.div`
width: 100%;
background:#EEEEEE;
padding:5px;
display:flex;
justify-Content:flex-start;
`;