import { createContext, useState } from "react";

export const ToggleContext = createContext<any>(null);

export const ToggleContextComp = (props: any) => {
  const [isToggle, setIsToggle] = useState<null | number>(null);
  return (
    <ToggleContext.Provider value={[isToggle, setIsToggle]}>
      {props.children}
    </ToggleContext.Provider>
  );
};
