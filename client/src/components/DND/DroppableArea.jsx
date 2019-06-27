import React, { useState, useCallback, useContext } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { DeskContext } from '../../Store'


const DroppableArea = () => {
    const [items, setItems] = useState([]);
    const [boxes, setBoxes] = useContext(DeskContext)
    const appendItem = useCallback(
        item => {
            console.log('item:', item)
            console.log("In appenditem call")
        setItems(items => [...items, item]);
      },
      [setItems]
    );

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.STUDENT,
        // drop: appendItem, 
        drop(item , monitor, component) {
            console.log('monitor.getITem:', monitor.getItem())
            console.log('item:', item)
            console.log('component:', component)
            // console.log('component.onDrop', component.onDrop(monitor.getItem()))
            // console.log('monitor:', monitor)
            // console.log('item:', item)
            // console.log('getDropResult():', monitor.getDropResult())
            // console.log('monitor.getItem():', monitor.getItem())

        },
        // collect(monitor, props){
        //     console.log('collect props:', props)

        //     console.log('collect monitor:', monitor)
        // }
        collect: monitor => {
        //   console.log('monitor:', monitor)
        //   console.log('monitor:', monitor.isOver())
        //   console.log('didDrop():', monitor.didDrop())
        //   console.log('getDropResult():', monitor.getDropResult())
          return {
            hovered: monitor.isOver()
          };
        }
      });
   

      const listItems = items.map((item, idx) => (
        <div key={idx} className="dropped-item" />
      ));
      return (
        <div>
            {collectedProps.hovered}
          <div className={`drop-area ${collectedProps.hovered ? "drop-area-hovered" : "" }`}
            ref={drop} >
            Drop Target
          </div>
          {listItems}
        </div>
      );
    };

    export default DroppableArea

//     @DragLayer((monitor) => ({
//         item: monitor.getItem(),
//         itemType: monitor.getItemType(),
//         initialOffset: monitor.getInitialSourceClientOffset(),
//         currentOffset: monitor.getSourceClientOffset(),
//         isDragging: monitor.isDragging()

//         const listSource = {
//   beginDrag(props) {
//     return {
//       id: props.id,
//       x: props.x
//     };
//   },
//   endDrag(props) {
//     props.stopScrolling();
//   }
// };

// const cardTarget = {
//     drop(props, monitor, component) {
//       const { cardId } = monitor.getItem();
//       component.droppedCard(cardId)
//     }
//   }