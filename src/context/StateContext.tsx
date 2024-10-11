import { createContext, useState} from 'react';

// the type for your context value
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

// the props type for the context provider component
interface MyContextProviderProps {
  children: React.ReactNode;
}


export const Context = createContext<ContextValue | undefined>(undefined);

// export const useStateContext = () => useContext(Context)


export const StateContext: React.FC<MyContextProviderProps> = ({ children }) => {
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