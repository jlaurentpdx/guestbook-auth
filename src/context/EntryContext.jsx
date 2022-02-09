import { useContext, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const EntriesContext = createContext();

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useLocalStorage('entries', []);

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntriesContext.Provider>
  );
}

export const useEntries = () => {
  const context = useContext(EntriesContext);

  if (context === undefined)
    throw new Error('useEntries can not be used outside of EntriesProvider');

  return context;
};
