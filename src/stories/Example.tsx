import React from "react";

interface Props {
  children?: React.ReactElement | string;
}

function Example({ children }: Props) {
  return <button type="button">{children}</button>;
}

Example.defaultProps = {
  children: null,
};

export default Example;
