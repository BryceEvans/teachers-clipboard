import React, { Component, useContext, useState } from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { IconContext } from '../../Store'

const BottomRow = () => {
    const [iconCount, setIconCount] = useContext(IconContext)

  const clickHandler = (iconName, iconCount, key) => {
    console.log("Icon Count obj:", iconCount)
    setIconCount({...iconCount, key: { name: iconName, count: iconCount + 1 } });
  }

  function renderIcon(icon, key) {
    console.log("ICON: ", icon)
    return (
      <div style={{display: "flex", flexDirection: "column", border: "blue solid 1px"}} key={key} >
        <div onClick={() => clickHandler(icon.name, icon.count, key)}>
          <Icon name={icon.name} style={{cursor:'pointer', border: "orange solid 1px"} }
          />
        </div>
        { icon.count > 0 ? <Label circular color='orange' size='mini' style={{marginBottom: "5px"}}>{icon.count}</Label> : null }
      </div>
    )}
  
    return ( 
      <div style={{display: "flex", justifyContent: "space-between", border: "red solid 1px"}}>
        {Object.keys(iconCount).map((key => renderIcon(iconCount[key], key )))}
      </div>
    );
  }


export default BottomRow;