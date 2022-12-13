import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DropdownItem } from '../../components/atoms/Dropdown';
import DropdownTag, { DropdownTagProps } from '../../components/molecules/DropdownTag';

export default {
  title: 'Components/Molecules/DropdownTag',
  component: DropdownTag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const TemplateStyle = {
  height: 200,
  width: 500,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Template: Story<DropdownTagProps<string>> = (args) => (
  <div style={TemplateStyle}>
    <DropdownTag {...args} />
  </div>
);

const promos = ['Cashback', 'Annual Promo', '11.11 Sale', '12.12 Sale', 'Diskon Akhir Tahun', 'Diskon Lebaran'];
const dropdownItems: DropdownItem<string>[] = promos.map((promo, i) => ({
  id: String(i),
  label: promo,
  value: promo,
}));

const GenericProps: DropdownTagProps<string> = {
  values: dropdownItems,
  currentValues: [dropdownItems[0].value],
  defaultLabel: 'Choose Tags',
  onChangeHandler: (value: string[]) => console.log(`dropdown value changed: ${value}`),
  disabled: false,
};

export const Normal = Template.bind({});
Normal.args = {
  ...GenericProps,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Normal.args,
  currentValues: dropdownItems.slice(0, 5).map((dropdownItem) => dropdownItem.value),
  disabled: true,
};
