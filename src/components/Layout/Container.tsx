import { css } from '@emotion/css';

interface ContainerProps {
  maxWidth?: string;
  children?: string;
  flexDirection?: 'row' | 'column';
  justifyContent:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}

const Container = ({
  maxWidth,
  children,
  flexDirection,
  justifyContent,
  alignItems,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={css`
        display: flex;
        margin: auto;
        max-width: ${maxWidth};
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
      `}
    >
      {children}
    </div>
  );
};

export default Container;
