import React, { Component } from 'react'
import ListaProdutos from '../../componentes/data/listaProdutos'
import './produtos.css'



export default class TabelaProducts extends Component {
    render() {
        return (
            <div className="table">
                <h2>Produtos</h2>
                {ListaProdutos.map((item)=>(
                    <tr  key={item.id}>
                        <td> {item.id} -</td>
                        <td> {item.name} -</td>
                        <td> R$ {item.price}</td>
                    </tr>
                    
                ))}
            </div>
        )
    }
}
