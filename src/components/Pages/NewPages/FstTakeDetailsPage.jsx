import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../../helper'
import Button from '../../Button'
import Cta from '../../Cta'
import PageHeading from '../../PageHeading'
import Div from '../../Div'
import SectionHeading from '../../SectionHeading'
import Spacing from '../../Spacing'

export default function PortfolioDetailsPage({data}) {
  const params = useParams()
  pageTitle('Portfolio Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/portfolio_details_1.jpeg" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='1st Take Youth Film Program' 
              subtitle='Programs' 
            >
              <Spacing lg='40' md='20'/>
              <p>The 1st Take Youth Film Program is an afterschool program dedicated 
                to teaching underprivileged youth career and life skills through the 
                hands-on process of filmmaking. The 1st Take Youth Film Program has become
                 an outlet for underserved local youth with a new perspective to dream 
                 beyond the limited opportunities within their communities. </p>
              <Spacing lg='10' md='10'/>
            
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Highlights</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Artwork</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>United Kindom</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Adobe Illustrator</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>14-Aug-2022</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Andreo Bowla</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
     
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='1sttakeyouth@gmail.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
