import React from 'react'
import Title from './Title';
import { Service } from '../data';
import Article from './Article';
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title=" our" subTitle="services" />
        
        <div className="section-center services-center">
          {Service.map((service)=>{
            return  <Article key={service.id} {...service}/> })}
     
            <span className="service-icon">
              <i className="fas fa-tree fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">endless hiking</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
         
        </div>
      </section>
    </>
  );
}

export default Services
