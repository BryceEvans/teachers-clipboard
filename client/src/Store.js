import React, {useState} from 'react';

export const DeskContext = React.createContext()
export const MenuContext = React.createContext()
export const StudentContext = React.createContext()
export const IconContext = React.createContext()
export const NavContext = React.createContext()
export const DraggableDeskContext = React.createContext()
export const DraggableStudentContext = React.createContext()
export const StudentCardsContext = React.createContext()


const Store = ({children}) => {
    const [iconCount, setIconCount] = useState([
        {name: 'user', count: 0},
        {name: 'exchange', count: 1},
        {name: 'eye', count: 2},
        {name: 'phone', count: 3},
    ])

    const [open, setOpen] = useState(false);
    const [canDragDesk, setCanDragDesk] = useState(false)
    const [canDragStudent, setCanDragStudent] = useState(false)
    const [cards, setCards] = useState(null)

    const [menu, setMenu] = useState({
        visible: false, title: "", id: '', top: '', left: '', students: []
    })


    const [desks, setDesks] = useState([
        {
            top: 20, left: 80, title: 'Desk1', deskType: "desk-horizontal",
            students: [
                {
                    studentID: 1, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true,
                    tags: [{tagName: 'ESL', color: 'purple'}, {tagName: 'Vision', color: 'blue'}],
                    counts: {exchange: null, eye: null, phone: null}
                }
            ]
        },
        {
            top: 400, left: 20, title: 'Desk2', deskType: "desk-long-horizontal",
            students: [
                {
                    studentID: 3, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: false,
                    tags: [{tagName: 'Anxiety', color: 'teal'}],
                    counts: {exchange: null, eye: null, phone: null}
                },
            ]
        },

        {
            top: 220, left: 120, title: 'Desk3', deskType: "desk-vertical",
            students: [{
                studentID: 2, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: false,
                tags: [{tagName: 'SPED', color: 'red'}],
                counts: {exchange: null, eye: null, phone: null}
            },]
        },
        {top: 320, left: 220, title: 'Desk4', deskType: "desk-long-vertical", students: []},
        {top: 420, left: 320, title: 'Desk5', deskType: "desk-square", students: []},
        {top: 60, left: 400, title: 'Desk6', deskType: "desk-square-45", students: []},
        {top: 200, left: 340, title: 'Desk7', deskType: "desk-circle", students: []},
        {top: 160, left: 400, title: 'Desk8', deskType: "desk-medium-circle", students: []},
        {top: 140, left: 500, title: 'Desk9', deskType: "desk-large-circle", students: []},
        {top: 460, left: 400, title: 'Desk10', deskType: "desk-square-45", students: []},
    ])

    const [student, setStudent] = useState([
        {
            studentID: 1,
            firstName: 'Jared',
            lastName: 'Smith',
            hallPassPrivledges: true,
            tags: [{tagName: 'ESL', color: 'purple'}, {tagName: 'Vision', color: 'blue'}]
        },
        {
            studentID: 2,
            firstName: 'Juan',
            lastName: 'Garcia',
            hallPassPrivledges: false,
            tags: [{tagName: 'SPED', color: 'red'}]
        },
        {
            studentID: 3,
            firstName: 'Jane',
            lastName: 'Smith',
            hallPassPrivledges: false,
            tags: [{tagName: 'Anxiety', color: 'orange'}]
        },
        {studentID: 4, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: true, tags: []},
        {studentID: 5, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 6, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 7, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {
            studentID: 8,
            firstName: 'Another',
            lastName: 'Student',
            hallPassPrivledges: true,
            tags: [{tagName: 'SPED', color: 'red'}]
        },
        {studentID: 9, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: []},
        {studentID: 10, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: true, tags: []},
        {studentID: 11, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: false, tags: []},
        {studentID: 12, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: true, tags: []},
        {studentID: 13, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 14, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 15, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {
            studentID: 16,
            firstName: 'Another',
            lastName: 'Student',
            hallPassPrivledges: true,
            tags: [{tagName: 'ESL', color: 'purple'}]
        },
        {studentID: 17, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: []},
        {studentID: 18, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: true, tags: []},
        {studentID: 19, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: true, tags: []},
        {studentID: 20, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: false, tags: []},
        {studentID: 21, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 22, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 23, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 24, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 25, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: []},
        {studentID: 26, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: true, tags: []},
        {studentID: 27, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: true, tags: []},
        {studentID: 28, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: true, tags: []},
        {
            studentID: 29,
            firstName: 'Another',
            lastName: 'Student',
            hallPassPrivledges: true,
            tags: [{tagName: 'SPED', color: 'red'}]
        },
        {studentID: 30, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 31, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 32, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 33, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: []},
        {studentID: 34, firstName: 'Juan', lastName: 'Cargia', hallPassPrivledges: true, tags: []},
        {studentID: 35, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: false, tags: []},
        {
            studentID: 36,
            firstName: 'Maria',
            lastName: 'Jiminez',
            hallPassPrivledges: true,
            tags: [{tagName: 'ESL', color: 'purple'}]
        },
        {studentID: 37, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 38, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 39, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: []},
        {studentID: 40, firstName: 'Another', lastName: 'Student', hallPassPrivledges: false, tags: []},
    ])

    return (
        //<StudentCardsContext> value={[cards, setCards]}>
            <IconContext.Provider value={[iconCount, setIconCount]}>
                <DraggableDeskContext.Provider value={[canDragDesk, setCanDragDesk]}>
                    <DraggableStudentContext.Provider value={[canDragStudent, setCanDragStudent]}>
                        <StudentContext.Provider value={[student, setStudent]}>
                            <DeskContext.Provider value={[desks, setDesks]}>
                                <MenuContext.Provider value={[menu, setMenu]}>
                                    <NavContext.Provider value={[open, setOpen]}>
                                        {children}
                                    </NavContext.Provider>
                                </MenuContext.Provider>
                            </DeskContext.Provider>
                        </StudentContext.Provider>
                    </DraggableStudentContext.Provider>
                </DraggableDeskContext.Provider>
            </IconContext.Provider>
        // </StudentCardsContext>
    )
}

export default Store
