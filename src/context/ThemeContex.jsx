import { useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('');
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContextProvider, ThemeContext};