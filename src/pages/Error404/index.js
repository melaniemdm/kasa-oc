import "./style.scss"

function Error404() {
    return (
      <div id="errorPage" className="errorPage">
       <div id="numberError">404</div>
       <div id="messageError">Oups! La page que vous demandez n'existe pas.</div>
       <div id="lienAccueil"> <a href="/home ">Revenir sur la page d'accueil</a></div>
      </div>
    );
  }
  export default Error404;