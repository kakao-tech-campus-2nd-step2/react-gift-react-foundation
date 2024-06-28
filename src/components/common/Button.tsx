/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/** @jsxImportSource @emotion/react */

import { ThemeColor, ThemeName } from "@constants/theme";
import { css } from "@emotion/react";

type ButtonProps = {
  Theme: ThemeName;
  Size: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ Theme, Size, ...rest }: ButtonProps) {
  const themeColor = ThemeColor[Theme];

  return (
    <button
      css={css({
        backgroundColor: themeColor,
      })}
      {...rest}
    >
      Click me
    </button>
  );
}

export default Button;
