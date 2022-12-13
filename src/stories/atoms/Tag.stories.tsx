import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tag, { TagProps } from '../../components/atoms/Tag';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

const defaultProps: TagProps = {
  label: 'Example Tag',
  onRemove: () => console.log('remove tag'),
};

export const Normal = Template.bind({});
Normal.args = { ...defaultProps };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultProps, disabled: true };
