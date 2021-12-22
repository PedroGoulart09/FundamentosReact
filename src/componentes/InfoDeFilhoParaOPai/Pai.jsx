import React,{useState} from 'react';
import Filho from './Filho'

export default function Pai(props){
    const [name,setName] = useState('')
    const [idade,setIdade] = useState(0)
    const [nerd,setNerd] = useState(false)
 function PaiEfilho(nome,idade,nerd){
    setName(nome);
    setIdade(idade);
    setNerd(nerd);
 }
 return (
     <div>
         <span> {name} </span>
         <span> <strong>{idade}</strong> </span>
         <span> {nerd ? 'verdadeiro' : 'falso'} </span>
         <div>
    <Filho info={PaiEfilho}></Filho>
         </div>
     </div>
 )
}
