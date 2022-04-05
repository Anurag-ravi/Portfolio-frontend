import React, {useState,useEffect} from 'react'
import './Header.scss';

import {motion} from 'framer-motion';
import {images} from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
import { urlFor,client } from '../../client';

const scaleVariants = {
  whileInView: {
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  const [header, setHeader] = useState({})
  useEffect(() => {
    const query = '*[_type == "header"]';
    
    client.fetch(query)
    .then((data) => {
      console.log(data[0])
      setHeader(data[0]);
    })
  }, [])
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
        >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Anurag</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
              <p className="p-text">{header.tag1}</p>
              <p className="p-text">{header.tag2}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5,delayChildren:0.5}}
        className="app__header-img"
        >
          <img src={urlFor(header.profile)} alt="profile_bg" />
          <motion.img 
          whileInView={{scale:[0,1]}}
          transition={{duration:1,ease:'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
          />
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[urlFor(header.s1),urlFor(header.s2),urlFor(header.s3)].map((circle,index)=>
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
        )}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header,'home')