import './App.css';
import Sla from './img/sla.png'
import Noticia from './componentes/Noticias'

function App() {
  return (
    <div className="App">
      <h1>OLÁ, MUNDO</h1>
      <img src={Sla} />

      <Noticia
        titulo="ESSA É A NOTICIA LEGAL"
        imagem={Sla}
        alt="Imagem de um código na tela de um programador"
        descricao="Não sei o que seria essa descrição"
        categoria="Tambem não sei o que colocar aqui"
      />

      <div className=''>
        <input type='text' id='nome' placeholder='Digite seu Nome' />
        <button type='button' onClick="Enviar()">Enviar</button>
        <h1>{nome}</h1>
      </div>
    </div>


  );
}

function Enviar(){
  const nome = document.getElementById('nome')


}


export default App;
