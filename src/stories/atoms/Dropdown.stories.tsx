import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps, DropdownItem } from '../../components/atoms/Dropdown';

export default {
  title: 'Components/Atoms/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const TemplateStyle = {
  height: 200,
  width: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Template: Story<DropdownProps<string>> = (args) => (
  <div style={TemplateStyle}>
    <Dropdown {...args} />
  </div>
);

const dropdownItems: DropdownItem<string>[] = [
  {
    id: '1',
    label: 'Male',
    value: 'male',
  },
  {
    id: '2',
    label: 'Female',
    value: 'female',
  },
];

const GenericProps = {
  values: dropdownItems,
  onChangeHandler: (value: string) => console.log(`dropdown value changed: ${value}`),
  width: 'fixed',
  disabled: false,
  isSearchActive: false,
};

export const WithCurrentValue = Template.bind({});
WithCurrentValue.args = {
  ...GenericProps,
  currentValue: dropdownItems[0].value,
};

export const WithDefaultLabel = Template.bind({});
WithDefaultLabel.args = {
  ...GenericProps,
  defaultLabel: 'Choose Gender',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...WithCurrentValue.args,
  disabled: true,
};

export const WithSearchMechanism = Template.bind({});
WithSearchMechanism.args = {
  ...WithCurrentValue.args,
  isSearchActive: true,
};
