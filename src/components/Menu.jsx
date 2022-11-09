import React from 'react'
import'../style/Menu.css'
import profile from"../images/woman.png"
const Menu = () => {
  return (
    <div className="menu-list">
        <ul>
            <li><i className="fa fa-twitter logo" aria-hidden="true" ></i></li>
            <li><i className="fa fa-home" aria-hidden="true"></i>Home</li>
            <li><i className="fa fa-hashtag" aria-hidden="true"></i>Explore</li>
            <li><i className="fa fa-bell-o" aria-hidden="true"></i>Notification</li>
            <li><i className="fa fa-envelope-o" aria-hidden="true"></i>Message</li>
            <li><i className="fa fa-bookmark-o" aria-hidden="true"></i>Bookmark</li>
            <li><i className="fa fa-list-alt" aria-hidden="true"></i>Lists</li>
            <li><i className="fa fa-user-o" aria-hidden="true"></i>Proifle</li>
            <li><i className="fa fa-ellipsis-h" aria-hidden="true"></i>More</li>


        </ul>
        <div className="profile-content">
            <img src={profile} alt="profile_image"></img>
            <div>
                <div className="profilename"><b>Ilavenil Diagarajane</b></div>
                <div className="profileid">@ilavenil25</div>
            </div>
        </div>
    </div>
  )
}

export default Menu