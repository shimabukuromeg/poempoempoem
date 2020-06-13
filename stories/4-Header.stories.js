import React from 'react';
import { Header } from '../src/components/Header';
import { withKnobs, text, boolean, number, array } from "@storybook/addon-knobs";


export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs]
};

export const aaa = () => 
<Header accountId={text('ユーザーID', 'ユーザーABC')} >
</Header>;
