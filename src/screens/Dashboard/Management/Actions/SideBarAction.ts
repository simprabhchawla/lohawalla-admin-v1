// SidebarActions.ts

import { useState } from "react";
import { SidebarState } from "../../types";

export const useSidebarActions = () => {
  const [state, setState] = useState<SidebarState>({
    activeTab: 0,
  });


  const handleTabClick = (index: number) => {
    console.log(index);
    setState((prevState) => ({
      activeTab: index,
    }));
  };

  return {
    state,
    handleTabClick,
  };
};
