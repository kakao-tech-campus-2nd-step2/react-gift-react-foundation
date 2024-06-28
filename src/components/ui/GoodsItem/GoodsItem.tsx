import { Image } from '@/components/ui/Image';

import { BaseGoodsItem } from './BaseGoodsItem';

interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

export const GoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
}: GoodsItemProps) => {
  return (
    <BaseGoodsItem
      imageComponent={
        <Image
          width="8rem"
          src={imageSrc}
          alt={title}
          ratio="square"
          radius={5}
        />
      }
      subtitle={subtitle}
      title={title}
      amount={amount}
    />
  );
};