
import { Link } from 'react-router-dom'
import Header from './Header'
import shayad from'./images/shayad.jpeg'
import avatar from'./images/avatar.jpeg'
import {GoHomeFill} from 'react-icons/go'
import videosJson from './useful-data-main/videos.json'

function VideoGrid(props){
  let myVideo = props.myVideo;
  return(
    <div class="thumbnail">
      <div class="video">
        <Link to ={`/video?id=${myVideo.id}`}>
        <img class="thumbnail-home" src={myVideo.thumbnail.url} /></Link>
      </div>
      <div class="video-title">
        <div>
          <img src={avatar} height={'30px'} width={'30px'}></img>
        </div>
        <div class="video-info">
          <h4 class="track-title margin-0">{myVideo.title}</h4>
          <p class="margin-0 smaller-fontsize">{myVideo.channelName}</p>
          <p class="margin-0 smaller-fontsize">
            {myVideo.views} views {myVideo.uploadedAt} ago
          </p>
        </div>
      </div>
    </div>
    )

}
function Home(){
  //let videos = [1,2,3,4,5,6,7,8,9]
    return( 
      <div>
        <Header />
        <div class="yt">
     <div class="main-section">
      <div class="main-left">
        <button class="yt-side-button">
          <GoHomeFill /><span class="side-button-label">Home</span>
        </button>
        <button class="yt-side-button">
          <GoHomeFill /><span class="side-button-label">Home</span>
        </button>
        <button class="yt-side-button">
          <GoHomeFill /><span class="side-button-label">Home</span>
        </button>
        <hr />
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>

      </div>
      <div class="main-right">
        {videosJson.map((video) => {
          return <VideoGrid myVideo={video} />
        })}
        </div>
        </div>
        </div>
        </div>
        
    )}

export default Home;