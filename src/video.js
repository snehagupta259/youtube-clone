import React, { useEffect, useState } from 'react'
function Video(){
  // const [seconds, setseconds]= useState(10);
  // const targetTime =Math.floor ((new Date()).getTime()/1000 + 10);  //+30 seconds
  //  //when page renders
  //  useEffect(()=> {
  //   const interval = setInterval(()=> {
  //     const currentTime = Math.floor((new Date()).getTime()/1000);
  //     const remainingTime= targetTime-currentTime;

  //     if(remainingTime >= 0){
  //       setseconds(remainingTime);
  //     }
  //   },1000)
  //  },[])
 function SuggestedVideos(){
  return(
    <>
    <div className='suggested-video'>
      <div className='suggestion-image'>
        <img src='{shayad}'/>
      </div>
      <div className='suggestion-content'>
        <div className='video-info'>

        </div>
      </div>
    </div>
    </>
  )
 }

  return (
    <div>
      {/* <h3>Video Comp</h3>
      <h4>Time Left : {seconds}</h4> */}
      <Header />
      <div className='video-main-page'></div>
      <div className='video-frame'>
        <iframe className='iframe-video' src=""></iframe>
      </div>
    </div>
  )
}
export default Video
