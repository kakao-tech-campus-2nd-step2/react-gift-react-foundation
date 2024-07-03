// import styled from '@emotion/styled';

// import React from 'react';
// import { vars } from '@/styles/index';

// type ResponseGridStyle = {
//   [key in keyof typeof vars.breakpoints]?: number;
// };

// type Props = {
//   columns: number | ResponseGridStyle;
//   // eslint-disable-next-line react/require-default-props
//   gap?: number;
// } & React.HTMLAttributes<HTMLDivElement>;

// // eslint-disable-next-line import/prefer-default-export, react/function-component-definition
// export const Grid: React.FC<Props> = ({
//   children,
//   columns,
//   ...props
// }: Props) => {
//   return (
//     // eslint-disable-next-line react/jsx-props-no-spreading, no-use-before-define
//     <Wrapper columns={columns} {...props}>
//       {children}
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div<Pick<Props, 'columns' | 'gap'>>(
//   {
//     width: '100%',
//     display: 'grid',
//   },
//   ({ gap }) => ({
//     gap: gap ? `${gap}px` : '0',
//   }),
//   ({ columns }) => {
//     if (typeof columns === 'number') {
//       return {
//         gridTemplateColumns: `repeat(${columns}, 1fr)`,
//       };
//     }

//     const breakpoints = Object.keys(
//       columns,
//     ) as (keyof typeof vars.breakpoints)[];
//     return breakpoints
//       .map((breakpoint) => {
//         return `@media screen and (min-width: ${vars.breakpoints[breakpoint]}) { grid-template-columns: repeat(${columns[breakpoint]}, 1fr); }`;
//       })
//       .join(' ');
//   },
// );
