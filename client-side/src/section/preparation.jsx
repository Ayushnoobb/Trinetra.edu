import React from 'react';

function Preparation(props) {

  return (
        <>
          <div className="preparation-type" key={props.item.id}>
            <div className="preparation-left">
              <img src={props.item.img} alt={props.item.title} className="preparation-img"/>
            </div>
            <div className="preparation-right">
              <h3 className="display-7">
                {props.item.title}
              </h3>
              <div className="preparation-brief">
                {props.item.desc}
              </div>
            </div>
          </div>
        </>
      )
}

export default Preparation