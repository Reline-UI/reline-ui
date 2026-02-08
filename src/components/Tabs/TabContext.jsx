"use client";

import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

export function TabContext({ children, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used inside <TabContext />");
  }
  return context;
}
