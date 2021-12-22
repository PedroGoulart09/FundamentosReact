import React from 'react'

export default function ParOuImpar(props) {
    const res = props.numero % 2 === 0 
        return (
            <div>
                {res ? <span>PAR</span> : <span>IMPAR</span>}
            </div>
        )
    
}
