import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCourseImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

function Home() {
  return (
    <div className=' home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light '>
        <div className='container d-flex flex-column 
        align-items-center'>
          <h2>welcome To</h2>
          <h1 className='text-center fw-semibold'>React University London</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Et sapiente eligendi eveniet iusto non saepe,
            repellat nesciunt delectus excepturi, rerum quidem, sequi velit
            assumenda sit natus soluta inventore maxime. Similique.</p>

            <div className='d-flex flex-column flex-sm-row
            align-items-center'>
              <Link to="/courses">
                <button type='button' className='btn btn-danger 
                btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses 

                </button>
              </Link> 
              <Link to="/Contact">
                <button type='button' className='btn btn-outline-light 
                btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> Contact Us 

                </button>
              </Link> 

            </div>

        </div>
      </header>
      <div className="py-5">
       <ChooseSection />

      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className='row d-flex align-items-center 
          justify-content-around'>
            <div className=
            'col-lg-5'>
              <h2 className=
              'text-capitalize'>
                2024 start courses</h2>
              
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis hic dolor voluptates quas, est magni aut nulla
                a ipsum modi pariatur iure alias? Reprehenderit 
                sit cupiditate laborum fugiat culpa! Quo.
              </p>
              <link to="/courses"> 
              <button type='button' className='btn 
              btn-danger btn-lg mx-0 mx-sm-2 my-2
              my-sm-0'>
                learn more 
              </button>
              
              </link>
            </div> 

              <div className='col-lg-5 mt-5 mt-lg-0'>
                <img src={StartCourseImg} className='img-fluid'
                 alt="" />
              </div>
          </div>
        </div>

      </div>

      <div className="py-5">
        <FaqAccordion/>
      </div>

    </div>
  )
}

export default Home;