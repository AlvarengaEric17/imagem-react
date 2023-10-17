const Noticia = ({ titulo, imagem, alt, descricao, categoria }) => {

    return (
        <div>
            <h2 className="titulo">{titulo}</h2>

            <img src={imagem} alt={alt} />
            <p className="descricao">{descricao}</p>
            <h3 className="categoria">{categoria}</h3>
        </div>
    )
}

export default Noticia;