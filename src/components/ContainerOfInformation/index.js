import Collapse from '../Collapse';
import './style.scss';

function ContainerOfInformation(props) {


    return (
<div>
        <div id={"titleCard"+props.name} className="containertitle">

          <div className="titleSectionLogement titleSectionPropos">
           {props.label}</div>
            <Collapse name={props.name}/>
        </div>

        <div id={"textOf"+props.name} className="textOf">{props.textCard}
        </div>
      </div>
    );
}
export default ContainerOfInformation;
