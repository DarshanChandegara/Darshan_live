import React from 'react';
import './App.css';
import Card from './Card';
import Data from './Data';

const Service = () => {
  return (
    <>

      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='my-5'>
              <h1 className='tab-center text-center'> Our Services</h1>
            </div>
            <div className='row gy-5'>
                {
                  Data.map( (currElem , ind) => {
                      return (
                        <>
                          <Card 
                            key = {ind}
                            img = {currElem.imgSrc}
                            title = {currElem.title}
                          />
                        </> 
                      )
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;
