import React from "react";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Image from "components/atoms/Image";

export default function App() {
  return (
    <div>
      <Button theme="primary" text="Button" />
      <Input size="small" />
      <Image ratio={12 / 2} radius={0} />
    </div>
  );
}
