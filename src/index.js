import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import If from './componentes/if/if'
import PrimeiroComponente from "./componentes/FirstComponent/PrimeiroComponente";
import SegundoComponente from "./componentes/alunos/comp";
import NumberAleatorio from './componentes/NumberRandom/NumberAleatorio';
import ReactCard from "./componentes/layout/card";
import Family from "./componentes/familias/Familia";
import MemberFamily from "./componentes/familias/FamiliaMembro";
import ListaProdutos from "./componentes/produtos/TabelaProducts"
import ParOuImpar from './componentes/ParOuImpar/ParOuImpar'
import Pai from './componentes/InfoDeFilhoParaOPai/Pai'

ReactDOM.render(
  <div>
    <ReactCard titulo="Desafio Aleatorio" color="#000">
      <NumberAleatorio max={1000} min={99999} />
    </ReactCard>

    <ReactCard titulo="Filho Para o Pai" color="#45sc">
      <Pai />
    </ReactCard>

    <ReactCard titulo="If" color="#8531fd">
      <If age={20}/>
    </ReactCard>

    <ReactCard titulo="Familias" color="#547c">
      <Family  sobrenome="goulart">
        <MemberFamily name="pedro"  />
        <MemberFamily name="joao"  />
        <MemberFamily name="alfredo"  />
      </Family>
    </ReactCard>

    <ReactCard titulo="Primeiro Componente" color="#2d7900">
      <PrimeiroComponente />
    </ReactCard>

    <ReactCard titulo="Produtos" color="#555">
      <ListaProdutos />
    </ReactCard>

    <ReactCard titulo="Situação Dos Alunos" color="#000269">
      <SegundoComponente titulo="Situação do aluno" aluno="Pedro" nota={9.7} />
      <SegundoComponente titulo="Situação do aluno" aluno="Maria" nota={6.5} />
    </ReactCard>


    <ReactCard titulo="Par ou Impar" color="#54560">
      <ParOuImpar numero={50}/>
    </ReactCard>
  </div>,

  document.getElementById("root")
);
