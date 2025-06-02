import { Link } from "react-router-dom"

function NoEncontrada() {
    return(
        <div className="not-found-page">
            <h1>Ooops!</h1>
            <img src="https://media4.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif?cid=6c09b952ovohe6a5reovrat01umx86bmzigx0xsu7w9ufdej&ep=v1_gifs_search&rid=giphy.gif&ct=g">
            </img>
            <p>No hemos encontrado la página que estás buscando.</p>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    )
}

export default NoEncontrada