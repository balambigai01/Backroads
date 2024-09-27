import React from 'react'
import Title from './Title';
import { Tour } from '../data';
import TourProp from './Tour'
const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title=' featured' subTitle='tours'/>
        

        <div className="section-center featured-center">
          {Tour.map((tour)=>{
         
            return (<TourProp key={tour.id} {...tour} />)
           
          })}
        </div>
      </section>
    </>
  );
}

export default Tours
