import { MyLabel, Props as Com } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {color: {control: 'select'}, fontColor: {control: 'color'}},
} as ComponentMeta<typeof MyLabel>

const Template : ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
    label: 'MyLabel',
    size: 'normal',
    color: 'primary',
    allCaps: false
}

export const Allcaps = Template.bind({});
Allcaps.args = {
    label: 'ALL CAPS',
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    size: 'normal',
    color: 'secondary',
    allCaps: false
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary',
    size: 'normal',
    color: 'tertiary',
    allCaps: false
}

export const CustomColor = Template.bind({});
CustomColor.args = {
    label: 'Custom Color',
    size: 'h1',
    fontColor: '#000000',
}