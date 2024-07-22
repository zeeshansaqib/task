import { Collapse } from "@kunukn/react-collapse";
import {
  Checkbox,
  Label,
  Text,
  CollapsedContainer,
  CollapsedButton,
} from "./style";
import React from "react";

interface IProps {
  name: string;
  parentCheckboxValue: boolean;
  index: number;
  checked: boolean;
  innerContent: any;
  onchange: any;
  setParentCheckboxValue: any;
}

export default function Collapsed({
  name,
  parentCheckboxValue,
  setParentCheckboxValue,
  index,
  checked,
  innerContent,
  onchange,
}: IProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCheckAll, setIsCheckAll] = React.useState(false);

  React.useEffect(() => {
    const allChecked = innerContent.every((item: any) => item.required);
    setIsCheckAll(allChecked);
  }, [innerContent]);

  React.useEffect(() => {
    if (checked) {
      setIsOpen(true);
    }
  }, [checked]);

  const onToggle = () => setIsOpen((s) => !s);

  const handleParentCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckAll = e.target.checked;
    setIsCheckAll(newCheckAll);
    setParentCheckboxValue({
      name: e.target.value,
      value: newCheckAll,
    });
    innerContent.forEach((item: any) => {
      onchange(item.id, newCheckAll);
    });
  };

  return (
    <CollapsedContainer key={index}>
      <div style={{ position: 'relative' }}>
        <Checkbox
          style={{ position: "absolute", top: "7px", left: "5px" }}
          type="checkbox"
          checked={isCheckAll}
          value={name}
          onChange={handleParentCheckboxChange}
        />
      </div>
      <CollapsedButton onClick={onToggle}>
        <Label key={index} style={{ padding: "5px 5px 5px 25px " }}>
          <Text>{name !== "null" ? name : "--"}</Text>
        </Label>
      </CollapsedButton>
      <Collapse
        isOpen={isOpen}
        transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {innerContent.map((item: any, index: number) => (
          <Label key={index} style={{ padding: "5px 5px 5px 10px " }}>
            <Checkbox
              type="checkbox"
              value={item.id}
              checked={item?.required}
              onChange={(e) => {
                onchange(e.target.value, e.target.checked);
              }}
            />
            <Text>{item.name}</Text>
          </Label>
        ))}
      </Collapse>
    </CollapsedContainer>
  );
}
