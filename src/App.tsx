import React from "react";
import Button from "components/common/Button";
import Input from "components/common/Input";
import Image from "components/common/Image";

export default function App() {
  return (
    <div>
      <Button theme="primary" text="Button" />
      <Input size="small" />
      <Image ratio={12 / 2} radius={0} />
    </div>
  );
}
