import React, { useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../containers/common/header'
import BannerSection from './layouts/sections/enterprice-sass/banner'
import FeatureSection from './layouts/sections/enterprice-sass/feature'
import BusinessSection from './layouts/sections/enterprice-sass/business'
import ServiceSection from './layouts/sections/enterprice-sass/service'
import SliderSection from './layouts/sections/enterprice-sass/slider'
import PricingSection from './layouts/sections/enterprice-sass/pricing'
import BrandSection from './layouts/sections/enterprice-sass/brand'
import FooterSection from './layouts/sections/enterprice-sass/footer'

const EnterpriceSass = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#844adb')
    document.body.style.setProperty('--secondary', '#071828')
    document.body.style.setProperty('--light', '#5E57EA')
    document.body.style.setProperty('--dark', '#9647DB')
  })

  return (
    <div>
      <Head>
        <title>SBM service portal </title>
      </Head>
      <Header className="saas2"/>
      <BannerSection />
      <FeatureSection />
      <BusinessSection />
      <ServiceSection />
      <SliderSection />
      <PricingSection />
      <BrandSection />
      <FooterSection />
    </div>
  )
}

export default EnterpriceSass;
