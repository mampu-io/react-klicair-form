import React from 'react';
import { Story, Meta } from '@storybook/react';
import FormWrapper, { FormWrapperProps } from '../../components/organisms/FormWrapper';
import FormGroup from '../../components/molecules/FormGroup';
import InputField from '../../components/atoms/InputField';

export default {
  title: 'Components/Organisms/FormWrapper',
  component: FormWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: 'number' },
  },
} as Meta;

const Template: Story<FormWrapperProps> = (args) => (
  <div style={{ width: 600 }}>
    <FormWrapper {...args} />
  </div>
);

export const Vertical = Template.bind({});
Vertical.args = {
  onSubmitHandler: () => console.log('submit form'),
  children: (
    <>
      <FormGroup label="Nama Sesuai Identitas" direction="vertical">
        <InputField placeholder="Masukkan nama sesuai identitas" width="fluid" />
      </FormGroup>
      <FormGroup label="NIK" direction="vertical">
        <InputField placeholder="Masukkan nomor identitas" width="fluid" />
      </FormGroup>
    </>
  ),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Vertical.args,
  children: (
    <>
      <FormGroup label="Nama Sesuai Identitas">
        <InputField placeholder="Masukkan nama sesuai identitas" width="fluid" />
      </FormGroup>
      <FormGroup label="NIK">
        <InputField placeholder="Masukkan nomor identitas" width="fluid" />
      </FormGroup>
    </>
  ),
};
