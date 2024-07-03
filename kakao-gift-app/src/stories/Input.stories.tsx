import React from 'react';
import Input from '../components/Input/Input';

export default {
  title: 'Common/Input',
  component: Input,
};

export const Default = () => <Input placeholder="Enter text" />;
export const Large = () => <Input size="large" placeholder="Large input" />;
export const Small = () => <Input size="small" placeholder="Small input" />;
export const Responsive = () => <Input size="responsive" placeholder="Responsive input" />;
export const Disabled = () => <Input disabled placeholder="Disabled input" />;
export const Invalid = () => <Input invalid placeholder="Invalid input" />;
