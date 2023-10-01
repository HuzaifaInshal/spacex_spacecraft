import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FisthSection from './FisthSection'
import { useSnapshot } from 'valtio';
import appState from '../state/state'

const SectionHolder = () => {
  const snap = useSnapshot(appState);
  if(!snap.show3d){
    document.body.style.backgroundImage ='url("/img.jpg")';
  }
  return (
    <>
    {!snap.show3d ? 
    <>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/> 
        <FourthSection/>
        <FisthSection/> 
        </>: ''}
    </>
  )
}

export default SectionHolder