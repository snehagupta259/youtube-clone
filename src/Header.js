import ytLogo from './images/yt-logo.jpg'
import searchIcon from'./images/search.jpeg'
import shayad from'./images/shayad.jpeg'

function Home(){

    return( 
      <div class="yt">
      <div class="first">
      <div class="item1">
          <div class="a1"></div>
          <div class="a2">
            <img id='yt-logo' src={ytLogo}/>
          </div>
      </div>
      <div class="item2">
          {/* <div class="b1"></div> */}
          <input class="header-search" placeholder='  Search..'/>
          <button class= "search-button">
            <img class="small-image" src= {searchIcon}></img>
                    </button>
          <div class="b2"></div></div>
          <div class="item3"></div>
     </div>
     </div>
     )
    }

