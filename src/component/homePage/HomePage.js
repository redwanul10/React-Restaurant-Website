import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

import Slider from './Slider.js'
import FeatureSection from './FeatureSection.js'
import AboutSection from './AboutSection.js'
import ParalaxSection from './ParalaxSection.js'
import OurMenuSection from './OurMenuSection.js'
import OpenHoursSection from './OpenHoursSection.js'
import WineSection from './WineSection.js'
import InviteSection from './InviteSection.js'

// Query Page Content
const query = gql`
{
  slideses{
    sliderTitle
    sliderDescription
    sliderImage{
      url
    }
    buttonLink
    sliderButtonText
  }

  categoryses{
    name
    recipeses{
      recipeTitle
      recipeDescription
      recipePrice
      recipeImage{
        url
      }
    }
  }

  serviceses {
    serviceTitle
    serviceDescription
    image {
      url
    }
  }

  homePages {
    aboutSingleWord
    introTitle
    introSubTitile
    introButtonText
    introDescription
    introPhoto {
      url
    }
    paralaxBackgroundImage {
      url
    }
    paralaxPhoto{
      url
    }
    menuSingleWord
    menuTitle
    menuDescription
    menuButtonText
    openHoursSingleWord
    openHoursTitle
    openingHourShedule
    openHoursBackground {
      url
    }
    openHoursButtonText
    wineSingleWord
    wineTitle
    wineSubTitle
    wineDescription
    winePhoto{
      url
    }
    inviteSingleWord
    inviteTitle
    inviteDescription
    inviteBackgroundImage {
      url
    }
  }
}

`


const HomePage = () => {
    const {loading,data,error} = useQuery(query)
    if(loading||error) return null
    if(!data) return alert('no data found')
    console.log(data)
    const {categoryses,serviceses,homePages,slideses} = data;
    const homePage = homePages[0]
    return (
        <>
        {/* Slider Section */}
        <Slider slides={slideses}/>

        {/* Feature SEction */}
        <FeatureSection 
        serviceses={serviceses}
        />

        {/* About Section */}
        <AboutSection
        image={homePage.introPhoto.url}
        word={homePage.aboutSingleWord}
        title={homePage.introTitle}
        button={homePage.introButtonText}
        subTitle={homePage.introSubTitile}
        description={homePage.introDescription}
        />

        {/* Paralax Section */}
        <ParalaxSection
        backgroundImage={homePage.paralaxBackgroundImage.url}
        Image={homePage.paralaxPhoto.url}
        />

        {/* OurMenu Section */}
        <OurMenuSection
        word={homePage.menuSingleWord}
        title={homePage.menuTitle}
        description={homePage.menuDescription}
        button={homePage.menuButtonText}
        data={categoryses}
        />

        {/* Open Hours Section */}
        <OpenHoursSection
        backgroundImage={homePage.openHoursBackground.url}
        word={homePage.openHoursSingleWord}
        title={homePage.openHoursTitle}
        button={homePage.openHoursButtonText}
        openHours={homePage.openingHourShedule}
        />

        {/* Wine Section */}
        <WineSection
        image={homePage.winePhoto.url}
        word={homePage.wineSingleWord}
        title={homePage.wineTitle}
        description={homePage.wineDescription}
        subTitle={homePage.wineSubTitle}
        />

        {/* Invite Section */}
        <InviteSection
        word={homePage.inviteSingleWord}
        description={homePage.inviteDescription}
        title={homePage.inviteTitle}
        backgroundImage={homePage.inviteBackgroundImage.url}
        />

        </>
    );
}
 
export default HomePage;