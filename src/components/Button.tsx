import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  children?: string;
  theme: string;
  size: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, theme, size, onClick }) => {
  const handleClick = () => {
    alert(`버튼 클릭`);
    onClick();
  };

  return (
    <StyledButton theme={theme} size={size} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  height: ${(props) => (props.size === "small" ? "50px" : "75px")};
  width: 120px;
  font-size: 16px;
  border: none;
  border-radius: 5px;

  ${(props) => {
    switch (props.theme) {
      case "outline":
        return `
          border: 1px solid #D3D3D3;
          background-color: #FEFEFE;
          color: #000;
        `;
      case "black":
        return `
          background-color: #000;
          color: #fff;
        `;
      case "lightGray":
        return `
          background-color: #f0f0f0;
          color: #000;
        `;
      case "darkGray":
        return `
          background-color: #555;
          color: #fff;
        `;
      case "kakao":
      default:
        return `
            background-color: #FFEB00;
            color: #000;
          `;
    }
  }}

  &:hover {
    filter: brightness(0.95);
  }

  @media (max-width: 768px) {
    height: ${(props) => (props.size === "large" ? "75px" : "50px")};
  }
`;

export default Button;
