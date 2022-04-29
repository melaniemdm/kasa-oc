import "./style.scss";


function TagsLogements(props ){
    return <div className="containerTag">{props.titleTag.tags.map((tag, index) =><div key={index}
    className="tagsStyle">{tag}</div>

    )}
</div>
}
export default TagsLogements
