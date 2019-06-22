import React, {useState} from 'react';

export const MenuContext = React.createContext()

const Store = ({children}) => {
    const [menu, setMenu] = useState({
        visible: false,
        desk: "",
        id: '',
        top: '',
        left: '',
      })

    return (
        <MenuContext.Provider value={[menu, setMenu]}>
            {children}
        </MenuContext.Provider>
    )
}

export default Store
