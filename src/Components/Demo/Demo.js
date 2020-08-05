import React from 'react'
import * as DemoVideo from '../../asssts/img/New Project1.mp4'
import * as DemoImg from '../../asssts/img/demo_img.png'
import styles from './Demo.module.css'
//import { Player } from 'video-react';

//import ReactPlayer from 'react-player'
 
// Render a YouTube video player
function Demo() {
    return(
      <div className={styles.container}>
        <div className={styles.bg_video}>
        {/* <Player
      playsInline
      poster={DemoImg}
      src={DemoVideo}
    autoPlay = {true} 
    playbackRate="2"/> */}
        </div>
      </div>
    )
}

export default Demo;