function DigaMeuNome(props){
    
    return (
    <div classname="DigaH1">
        <p> Fala meu Nome: {props.nome}, suave ?</p>
        <p> Minha Idade é: {props.idade}</p>
        <p> Minha profissão é: {props.profissao}</p>
    </div>
    )
}

export default DigaMeuNome