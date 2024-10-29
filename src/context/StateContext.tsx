import { createContext, useState} from 'react';
interface ContextValue {
  dark: boolean;
  changeMode: (param: boolean) => void;
  amILoggedIn: boolean;
  setAmILoggedIn: (param: boolean) => void;
  selected: string;
  setSelected: (param: string) => void;
  search: string;
  setSearch: (param: string) => void;

}

// interface MyContextProviderProps {
//   children: React.ReactNode;
// }
// React.FC<MyContextProviderProps>

export const Context = createContext<ContextValue | undefined>(undefined);

export function StateContext ({ children }: {children: React.ReactNode}) {
  const [dark, setDark] = useState(true)
  const [amILoggedIn, setAmILoggedIn] = useState(false)
  const [selected, setSelected] = useState('male')
  const [search, setSearch] = useState('')  
  
  const changeMode = () => {
    setDark(prev => !prev)
  }

  const value: ContextValue = {
      dark,
      changeMode,
      amILoggedIn,
      setAmILoggedIn,
      selected,
      setSelected,
      search,
      setSearch
  };


  return(
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}