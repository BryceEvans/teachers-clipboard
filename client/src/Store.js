import React, {useState} from 'react';

export const DeskContext = React.createContext()
export const MenuContext = React.createContext()
export const IconContext = React.createContext()

const Store = ({children}) => {
    const [iconCount, setIconCount] = useState([
        { name: 'user', count: 0 },
        { name: 'exchange', count: 1  },
        { name: 'eye', count: 2  },
        { name: 'phone', count: 3  },
    ])

    const [menu, setMenu] = useState({
        visible: false, title: "", id: '', top: '', left: '',
      })

    const [boxes, setBoxes] = useState([
        { top: 20, left: 80, title: 'Desk1', deskType: "desk-horizontal" },
        { top: 120, left: 20, title: 'Desk2', deskType: "desk-long-horizontal" },
        { top: 320, left: 220, title: 'Desk4', deskType: "desk-long-vertical" },
        { top: 220, left: 120, title: 'Desk3', deskType: "desk-vertical"},
        { top: 420, left: 320, title: 'Desk5', deskType: "desk-square" },
    ])

    return (
        <IconContext.Provider value={[iconCount, setIconCount]}>
        <DeskContext.Provider value={[boxes, setBoxes]}>
            <MenuContext.Provider value={[menu, setMenu]}>
                {children}
            </MenuContext.Provider>
        </DeskContext.Provider>
        </IconContext.Provider>
    )
}

export default Store
