import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.facebook.com/Flfilmhouse' className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link to='https://www.instagram.com/floridafilmhouse' className="cs-center">
        <Icon icon="fa6-brands:instagram" />               
      </Link>
      <Link to='https://www.youtube.com/@FloridaFilmHouse' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link>
   
    </Div>
  )
}
