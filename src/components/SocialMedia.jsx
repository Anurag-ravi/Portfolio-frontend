import React from 'react'
import {BsTwitter, BsInstagram } from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><a href='https://twitter.com/AnuragRavi_' target='_blank'><BsTwitter /></a></div>
        <div><a href='https://www.facebook.com/anuragravii/' target='_blank'><FaFacebookF /></a></div>
        <div><a href='https://www.instagram.com/anu.rag__r/' target='_blank'><BsInstagram /></a></div>
    </div>
  )
}

export default SocialMedia