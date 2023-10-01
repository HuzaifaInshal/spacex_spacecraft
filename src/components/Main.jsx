import React, { useEffect, useRef } from 'react'
import {  OrbitControls, PerspectiveCamera,Environment  } from "@react-three/drei";
import { Model } from './Moon';
import { Satellite } from './Satellite';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Main = () => {

   const satelliteRef = useRef(null);
   const moonRef = useRef(null);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#sec1', 
      start: 'top top',
      endTrigger: '#sec2', 
      end: 'bottom bottom',
      scrub: true, 
    },
  });
  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#sec2', 
      start: 'bottom bottom',
      endTrigger: '#sec3', 
      end: 'top top',
      scrub: true, 
    },
  });
  const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: '#sec3', 
      start: 'bottom bottom',
      endTrigger: '#sec4', 
      end: 'bottom bottom',
      scrub: true, 
    },
  });
  const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: '#sec4', 
      start: 'bottom bottom',
      endTrigger: '#sec5', 
      end: 'bottom bottom',
      scrub: true, 
    },
  });

  useEffect(()=>{
    if(satelliteRef.current && moonRef.current){
      timeline.to(satelliteRef.current.position,{
        x:-3,
        y:1,
        z:-25,
        duration:1,
      })
      timeline.to(satelliteRef.current.rotation,{
        x:(Math.PI/90)*80,
        y:-(Math.PI/90)*20,
        z:(Math.PI/90)*2,
        duration:1,
      },"<")
      timeline.to(moonRef.current.rotation,{
        z:-(Math.PI/180)*60,
        duration:1,
      },"<")
      timeline.to(moonRef.current.scale,{
        x:0.1,
        y:0.1,
        z:0.1,
        duration:1,
      },"<")


      timeline2.to(moonRef.current.position,{
        x:-110,y:-5,z:-400,duration:1
      })
      timeline2.to(moonRef.current.rotation,{
        x:(Math.PI/180)*90,y:(Math.PI/180)*190,z:-(Math.PI/180)*80,duration:1
      },"<")
      timeline2.to(moonRef.current.scale,{
        x:0.04,y:0.04,z:0.04,duration:1
      },"<")
      timeline2.to(satelliteRef.current.position,{
        x:0,y:-2,z:-35,duration:1
      },"<")
      timeline2.to(satelliteRef.current.rotation,{
        x:(Math.PI/180)*90,y:(Math.PI/180)*0,z:-(Math.PI/180)*3,duration:1
      },"<")
      timeline2.to(satelliteRef.current.scale,{
        x:0.15,y:0.15,z:0.15,duration:1
      },"<")


      timeline3.to(satelliteRef.current.position,{
        x:-2,y:-1,z:-35,duration:1
      })
      timeline3.to(satelliteRef.current.rotation,{
        x:(Math.PI/90)*90,y:-(Math.PI/90)*0,z:(Math.PI/90)*40,duration:1
      },"<")
      timeline3.to(satelliteRef.current.scale,{
        x:0.09,y:0.09,z:0.09,duration:1
      },"<")

      timeline4.to(moonRef.current.position,{x:5,y:110,z:-400})
      timeline4.to(moonRef.current.rotation,{x:(Math.PI/180)*90,y:(Math.PI/180)*190,z:-(Math.PI/180)*0},"<")
      timeline4.to(moonRef.current.scale,{x:0.06,y:0.06,z:0.06,duration:1},"<")
      timeline4.to(satelliteRef.current.position,{x:0,y:4,z:-35},"<")
      timeline4.to(satelliteRef.current.rotation,{x:(Math.PI/180)*70,y:(Math.PI/180)*15,z:(Math.PI/180)*15},"<")
      timeline4.to(satelliteRef.current.scale,{x:0.05,y:0.05,z:0.05,duration:1},"<")
    }
  },[timeline])

  return (
    <>
    <OrbitControls />
    <PerspectiveCamera makeDefault position={[0,0,0]} fov={700}/>
    <ambientLight args={["#ffffff",0.5]} />

    <mesh ref={moonRef} position={[-50,-5,-400]} scale={0.06} rotation={[(Math.PI/180)*90,(Math.PI/180)*190,0]}>
    <Model />
    </mesh>
    <mesh  ref={satelliteRef} position={[-4,1,-35]} scale={0.1} rotation={[(Math.PI/90)*90,-(Math.PI/90)*10,(Math.PI/90)*2]}>
    <Satellite/>
    </mesh> 

    <pointLight position={[-9,1,-35]} args={["#ffffff",100]}/>
    <pointLight position={[5,1,-35]} args={["#ffffff",100]}/>
    <pointLight position={[-4,-11,-35]} args={["#f2e313",100]}/>
    <Environment preset="city"/>
    </>
  )
  }

export default Main