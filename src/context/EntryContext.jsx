import { useContext, createContext, useState, useEffect } from 'react';
import { fetchEntries } from '../services/entries';

export const EntriesContext = createContext();

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEntries();
      console.log('data', data);
      setEntries(data);
    };
    fetchData();
  }, []);

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
