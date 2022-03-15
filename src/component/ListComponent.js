import "./listComponent.css";
import { memo } from "react";

function ListComponent({ data }) {
  return (
    <div className="listComponent">
      <h2 className="listComponent__title">
        <span>{data[0].title}</span>
      </h2>

      <div className="list-skill listComponent__list">
        {data.map((skill) => {
        
        if(skill.icon == '') {return}else{return (
          <div key={skill.key} className="list-skill__item listComponent__list">
            <span dangerouslySetInnerHTML={{ __html: `${skill.icon}` }} />
            <span>{`${skill.icon}` == "" ? null : skill.key}</span>
          </div>)}
        })}
      </div>
    </div>
  );
}

export default memo(ListComponent);
