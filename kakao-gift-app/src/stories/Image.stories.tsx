import React from 'react';
import Image from '../components/Image/Image';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Square = () => (
  <Image src="https://via.placeholder.com/150" ratio="square" alt="Square image" />
);

export const Circle = () => (
  <Image src="https://via.placeholder.com/150" radius="circle" alt="Circle image" />
);

export const Rounded = () => (
  <Image src="https://via.placeholder.com/150" radius={20} alt="Rounded image" />
);
