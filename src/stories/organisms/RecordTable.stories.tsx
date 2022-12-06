import React from 'react';
import { Story, Meta } from '@storybook/react';
import CopyButton from '../../components/atoms/CopyButton';
import Label from '../../components/atoms/Label';
import RecordTable, { RecordTableProps } from '../../components/organisms/RecordTable';

export default {
  title: 'Components/Organisms/RecordTable',
  component: RecordTable,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: 'number' },
  },
} as Meta;

const Template: Story<RecordTableProps> = (args) => (
  <div style={{ width: 600 }}>
    <RecordTable {...args} />
  </div>
);

const ACCOUNT_NUMBER = '1092400212';
const recordWithoutChildrenProps: RecordTableProps = {
  records: [
    { label: 'Nama Nasabah', value: 'Jhon Thor' },
    { label: 'No. Rekening', value: ACCOUNT_NUMBER },
    { label: 'Email Nasabah', value: 'jhonthor@email.com' },
    { label: 'Tanggal Pembukaan Deposito', value: '28 Sep 2022 09:33' },
    { label: 'Tanggal Finalisasi', value: '28 Sep 2022 09:33' },
  ],
  direction: 'horizontal',
};

const recordWithChildrenProps: RecordTableProps = {
  records: [
    { label: 'Nama Nasabah', value: 'Jhon Thor' },
    {
      label: 'No. Rekening',
      children: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Label value={ACCOUNT_NUMBER} />
          <div style={{ marginLeft: 10 }}>
            <CopyButton valueToCopy={ACCOUNT_NUMBER} size="small" />
          </div>
        </div>
      ),
    },
    { label: 'Email Nasabah', value: 'jhonthor@email.com' },
    { label: 'Tanggal Pembukaan Deposito', value: '28 Sep 2022 09:33' },
    { label: 'Tanggal Finalisasi', value: '28 Sep 2022 09:33' },
  ],
  direction: 'horizontal',
};

export const Horizontal = Template.bind({});
Horizontal.args = { ...recordWithoutChildrenProps };

export const Vertical = Template.bind({});
Vertical.args = { ...recordWithoutChildrenProps, direction: 'vertical' };

export const WithChildren = Template.bind({});
WithChildren.args = { ...recordWithChildrenProps };
