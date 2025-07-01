import { useState } from 'react';
import { createContext } from 'react';

const NotesContext = createContext({
  notes: [],
  setNotes: () => {},
});

const NotesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    
    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    );
};

export {NotesContextProvider, NotesContext};