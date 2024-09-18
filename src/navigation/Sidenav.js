import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import ExploreIcon from '@mui/icons-material/Explore'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import ChatIcon from '@mui/icons-material/Chat'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddCircleOutlneIcon from '@mui/icons-material/AddCircleOutline'
import MenuIcon from '@mui/icons-material/Menu'

function Sidenav() {
  return (
    <div className="sidenav">
     <img className="sidenav__logo" src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"  alt="Instagram Png Logo - Instagram Word Logo Png@pngkey.com"/>
       <div className="sidenav__buttons">
        <button className="sidenav__button">
            <HomeIcon/>
            <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon/>
          <span>Search</span>  
        </button>
        <button className="sidenav__button">
          <ExploreIcon/>
          <span>Explore</span>  
        </button>
        <button className="sidenav__button">
          <SlideshowIcon/>
          <span>Reels</span>  
        </button>
        <button className="sidenav__button">
          <ChatIcon/>
          <span>Messages</span>  
        </button>
        <button className="sidenav__button">
          <FavouriteBorderIcon/>
          <span>Notifications</span>  
        </button>
        <button className="sidenav__button">
          <AddCircleOutlneIcon/>
          <span>Create</span>  
        </button>        
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default Sidenav