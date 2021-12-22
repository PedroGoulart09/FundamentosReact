import React,{cloneElement} from 'react'


export default function create(props) {
  
        return (
            <div>
                {props.children.map((el,index)=>{
                    return cloneElement(el,{...props,key:index})
                })}
             
            </div>
        )
    
}