import React, { useEffect } from "react"

export const ThemeContext = React.createContext({
  theme: "dark",
  setTheme: () => {},
})

