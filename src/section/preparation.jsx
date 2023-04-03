import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Preparation(props) {
  AOS.init()
  return (
          <div className="preparation-type" key={props.item.id} data-aos="fade-up" data-aos-once="false" data-aos-duration="2000"  data-aos-anchor-placement="top-center">
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
      )
}

export default Preparation