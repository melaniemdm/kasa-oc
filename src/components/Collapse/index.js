import './style.scss';

function Collapse(props) {
    const lessExpand = (
      <span
        id={"LessExpand" + props.name}
        className="material-icons-outlined arrowUp"
        onClick={(e) => handleLessExpand(e, props.name)}
      >
        expand_less
      </span>
    );
  
    const moreExpand = (
      <span
        id={"MoreExpand" + props.name}
        className="material-icons-outlined arrowDown"
        onClick={(e) => handleMoreExpand(e, props.name)}
      >
        expand_more
      </span>
    );
  
    function handleMoreExpand(e, targetName) {
      e.preventDefault();
      document.querySelector("#textOf" + targetName).style.display = "block";
      document.querySelector("#LessExpand" + targetName).style.display = "block";
      document.querySelector("#MoreExpand" + targetName).style.display = "none";
    }
    function handleLessExpand(e, targetName) {
      e.preventDefault();
      document.querySelector("#textOf" + targetName).style.display = "none";
      document.querySelector("#LessExpand" + targetName).style.display = "none";
      document.querySelector("#MoreExpand" + targetName).style.display = "block";
    }
  
    return (
      <div className="icone">
        {moreExpand}
        {lessExpand}
      </div>
    );
  }
  export default Collapse;
  