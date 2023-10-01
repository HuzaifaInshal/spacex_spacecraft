import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Main from './Main'
import { useSnapshot } from 'valtio';
import appState from '../state/state';
import Only3D from './Only3D';

const Canva = () => {
  const snap = useSnapshot(appState);
  return (
    <div id="canvas">
      {snap.show3d ? <button className="exit" onClick={()=> appState.show3d=false}>Exit</button> : ''}
      <Canvas shadows >
    <Suspense fallback={null}>
    {!snap.show3d ? 
     <Main/>      
    :
     <Only3D/>      
    }
   </Suspense>
    </Canvas>
    </div>
  )
}

export default Canva