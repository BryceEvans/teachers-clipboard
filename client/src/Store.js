import React, {useState} from 'react';

export const DeskContext = React.createContext()
export const MenuContext = React.createContext()

const Store = ({children}) => {
    
    const [menu, setMenu] = useState({
        visible: false, title: "", id: '', top: '', left: '',
      })

    const [boxes, setBoxes] = useState([
        { top: 20, left: 80, title: 'Desk1', deskType: "desk-horizontal"},
        { top: 120, left: 20, title: 'Desk2', deskType: "desk-long-horizontal" },
        { top: 320, left: 220, title: 'Desk4', deskType: "desk-long-vertical" },
        { top: 220, left: 120, title: 'Desk3', deskType: "desk-vertical"},
        { top: 420, left: 320, title: 'Desk5', deskType: "desk-square" },
        { top: 60, left: 400, title: 'Desk6', deskType: "desk-square-45" },
        { top: 200, left: 340, title: 'Desk7', deskType: "desk-circle" },
        { top: 160, left: 400, title: 'Desk8', deskType: "desk-medium-circle" },
        { top: 140, left: 500, title: 'Desk9', deskType: "desk-large-circle" },
        { top: 460, left: 400, title: 'Desk10', deskType: "desk-square-45" },
    ])

    return (
        <DeskContext.Provider value={[boxes, setBoxes]}>
            <MenuContext.Provider value={[menu, setMenu]}>
                {children}
            </MenuContext.Provider>
        </DeskContext.Provider>
    )
}

export default Store
