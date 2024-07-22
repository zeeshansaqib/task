import { Formik, Field } from "formik";
import React, { useEffect } from "react";
import { apiData } from "./ApiData";
import {
  Text,
  InputContainer,
  StyledIcon,
  CheckboxGroup,
  InputsContainer,
  Container,
  FormContainer,
  InputOne,
  InputTwo,
  StyledForm,
  Label,
  TopHeading,
  HeaderSection,
  MainSection,
  InputThree,
  StyledCheckbox,
  FooterSection,
  SubmitButton,
} from "./style";

import "./App.css";
import Collapsed from "./collapsed";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [parentCheckboxValue, setParentCheckboxValue] = React.useState<any>({
    name: "",
    value: false,
  });
  const [postData, setPostData] = React.useState<any>({
    applicable_items: [],
    applied_to: "some",
    name: "",
    rate: 0,
  });
  const [data, setData] = React.useState<any>([]);
  const [manipulatedData, setManipulatedData] = React.useState<any>([]);

  const onchange = (value: any, checked: boolean) => {
    const updatedData = data.map((i: any) => {

      if (i.id == value) {
        i.required = checked;
      }
      return i;
    });
    setData(updatedData);
  };

  const handleSubmit = async (values: typeof postData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
  };

  useEffect(() => {
    let count = 0;
    const ids: any[] = [];
    manipulatedData.map((item: any) => {
      item.data.map((i: any) => {
        if (i.required == true) {
          count++;
          ids.push(i.id);
        }
      });
    });
    setPostData({ ...postData, count: count, applicable_items: ids });
  }, [manipulatedData]);

  useEffect(() => {
    setData(apiData);
  }, []);

  useEffect(() => {
    manipulatedData.map((item: any) => {
      if (item.name == parentCheckboxValue.name) {
        item.data.map((i: any) => {
          i.required = parentCheckboxValue.value;
        });
      }
    });
  }, [parentCheckboxValue]);

  useEffect(() => {
    const sortedData: any = data.reduce((acc: any, item: any) => {
      const categoryName = item?.category?.name || "null";

      if (!acc[categoryName]) {
        acc[categoryName] = { name: categoryName, data: [] };
      }

      acc[categoryName].data.push(item);
      return acc;
    }, {});
    const formattedData = Object.values(sortedData);
    setManipulatedData(formattedData);
  }, [data]);

  useEffect(() => {
  }, [manipulatedData]);

  return (
    <div className="App">
      <Container>
        <FormContainer>
          <Formik
            initialValues={{
              name: postData.name,
              rate: postData.rate,
              applied_to: postData.applied_to ,
            }}
            onSubmit={handleSubmit}
          >
            <StyledForm>
              <HeaderSection>
                <TopHeading>Add Tax</TopHeading>

                <InputsContainer>
                  <InputOne name="name" placeholder="Name" type="text" />
                  &nbsp;&nbsp;
                  <InputTwo name="rate" placeholder="Rate" type="text" />
                </InputsContainer>
                <CheckboxGroup>
                  <Label>
                    <Field
                      type="checkbox"
                      name="applied_to"
                      value="all"
                      checked={postData.applied_to == 'all' ?  true : false}
                      onChange={(e: any) => {
                        setPostData({ ...postData, applied_to: e.target.value });
                      }
                      }
                      as={StyledCheckbox}
                    />
                    <Text>Apply to all items in collection</Text>
                  </Label>
                  <Label>
                    <Field
                      type="checkbox"
                      name="applied_to"
                      value="some"
                      onChange={(e: any) => {
                        setPostData({ ...postData, applied_to: e.target.value });
                      }}
                      checked={postData.applied_to == 'some' ?  true : false}
                      as={StyledCheckbox}
                    />
                    <Text>Apply to specific items</Text>
                  </Label>
                </CheckboxGroup>
              </HeaderSection>
              <MainSection>
                <InputContainer>
                  <StyledIcon icon={faSearch} />
                  <InputThree placeholder="Search Items" type="text" />
                </InputContainer>
                {/* Assume manipulatedData and other props are defined */}
                {manipulatedData &&
                  manipulatedData.map((item: any, index: number) => (
                    <Collapsed
                      key={index}
                      name={item.name}
                      parentCheckboxValue={parentCheckboxValue}
                      setParentCheckboxValue={setParentCheckboxValue}
                      index={index}
                      checked={false}
                      innerContent={item.data}
                      onchange={onchange}
                    />
                  ))}
              </MainSection>
              <FooterSection>
                <SubmitButton type="submit">
                  Apply tax to ({postData.applicable_items.length}) items
                </SubmitButton>{" "}
              </FooterSection>
            </StyledForm>
          </Formik>
        </FormContainer>
      </Container>
    </div>
  );
}

export default App;
