import React from 'react'
import Card from './Card';

function List(props) {
  return (
    <div className='list'>
        <h2 className='listHeading'>{props.listData.listHeading}</h2>
        <div className='listGrid'>
            {props.listData.list.map((v, i)=>{
                return(
                    <Card listData={v} key={i}/>
                )
            })}
            
        </div>
    </div>
  )
}

export default List