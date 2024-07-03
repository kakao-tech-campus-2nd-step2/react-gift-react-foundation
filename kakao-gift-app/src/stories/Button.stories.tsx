import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Common/Button',
  component: Button,
};

export const Primary = () => <Button theme="primary">Primary Button</Button>;
export const Secondary = () => <Button theme="secondary">Secondary Button</Button>;
export const Large = () => <Button size="large">Large Button</Button>;
export const Small = () => <Button size="small">Small Button</Button>;
export const Responsive = () => <Button size="responsive">Responsive Button</Button>;
export const Disabled = () => <Button disabled>Disabled Button</Button>;
