import { ImageContainer, StyledImage } from './styles';
import { ImageProps } from './types';

export const Image = ({
  ratio = 1,
  radius,
  alt,
  src,
  ...props
}: ImageProps) => {
  return (
    <ImageContainer ratio={ratio} radius={radius}>
      <StyledImage src={src} alt={alt} {...props} />
    </ImageContainer>
  );
};
