import React from "react";
import { Confirmation } from "./Confirmation";
import { Wellcome } from "./Wellcome";

export const Auth = () => {
  const [isValid, setIsValid] = React.useState(false);
  return (
    <div>
      {isValid ? <Wellcome /> : <Confirmation setIsValid={setIsValid} />}
    </div>
  );
};
