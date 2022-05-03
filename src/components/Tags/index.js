import './style.scss';
import React from 'react';


function TagsLogements(props ){
  return <div className="containerTag">{props.titleTag.tags.map((tag, index) =><div key={index}
    className="tagsStyle">{tag}</div>

  )}
  </div>;
}
export default TagsLogements;
