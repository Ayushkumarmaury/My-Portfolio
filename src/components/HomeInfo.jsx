import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'


const InfoBox =({text,link, btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
       
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)



const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Ayush Maurya</span>
        👋
        <br />
        A Web Developer from India
      </h1>
    ),
    2:(
        <InfoBox
        text="Here you can see My Skills , Social Links and Experience"
        link="/about"
        btnText="Learn more"
         />
    ),
    3:(
        <InfoBox
        text="Here You can see My Projects"
        link="/projects"
        btnText="Visit my PortFolio"
         />
    ),
    4:(
        <InfoBox
        text="Need a Project done or looking for a dev ? I'm just a few keystrokes away"
        link="/contact"
        btnText="Contact me"
         />
    ),
}



const HomeInfo = ({currentStage}) => {


  return renderContent[currentStage] || null;
}

export default HomeInfo
