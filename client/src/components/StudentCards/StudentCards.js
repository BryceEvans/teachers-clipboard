import React, { useContext } from 'react';
import {DeskContext} from '../../Store'
import StudentCard from './StudentCard';

const StudentCards = () => {
  const [boxes, setBoxes] = useContext(DeskContext)
  console.log('StudentCards boxes:', boxes)

  const checkStudent = (index) => {
    let myArr;
    if (boxes[index].students !== []) {
      myArr = myArr.push(boxes[index].students)
    }
    console.log("StudentCards myArr: ", myArr)
  }
  const students = [
    { studentID: 1, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: [ { name: 'ESL', color: 'purple' }, { name: 'Vision', color: 'blue' }]},
    { studentID: 2, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: false, tags: [ { name: 'SPED', color: 'red' } ] },
    { studentID: 3, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: false, tags: [ { name: 'Anxiety', color: 'color' } ] },
    { studentID: 4, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: true, tags: [  ] },
    { studentID: 5, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ] },
    { studentID: 6, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ] },
    { studentID: 7, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ] },
    { studentID: 8, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [ { name: 'SPED', color: 'red' }  ] },
    { studentID: 9, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 10, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 11, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: false, tags: [  ]  },
    { studentID: 12, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 13, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 14, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 15, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 16, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [ { name: 'ESL', color: 'purple' }  ]  },
    { studentID: 17, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 18, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 19, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 20, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: false, tags: [  ]  },
    { studentID: 21, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 22, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 23, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 24, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 25, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 26, firstName: 'Juan', lastName: 'Garcia', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 27, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 28, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 29, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [ { name: 'SPED', color: 'red' }  ]  },
    { studentID: 30, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 31, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 32, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 33, firstName: 'Jared', lastName: 'Smith', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 34, firstName: 'Juan', lastName: 'Cargia', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 35, firstName: 'Jane', lastName: 'Smith', hallPassPrivledges: false, tags: [  ]  },
    { studentID: 36, firstName: 'Maria', lastName: 'Jiminez', hallPassPrivledges: true, tags: [ { name: 'ESL', color: 'purple' }  ]  },
    { studentID: 37, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 38, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 39, firstName: 'Another', lastName: 'Student', hallPassPrivledges: true, tags: [  ]  },
    { studentID: 40, firstName: 'Another', lastName: 'Student', hallPassPrivledges: false, tags: [  ]  },
  ]


    return ( 
      <div>
        <div style={{margin: "10px", textAlign: "center"}}>
          *NOT the names of my acutal students.
        </div>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {console.log("box student", boxes[0].students)}
          {students.map((students, ind) => (
            <StudentCard key={ind} students={students} />
          ))}
        </div>
            <div style={{margin: "10px", textAlign: "center"}}>
              <strong><em> -- FRONT OF CLASSROOM -- </em></strong>
            </div>
      </div>
    );
  
}

export default StudentCards;