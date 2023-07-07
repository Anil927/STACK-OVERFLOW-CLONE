import React from 'react'
import pen from "../../assets/pen-solid.svg"
import comment from "../../assets/comment-solid.svg"
import "./RightSidebar.css"
import logo from "../../assets/blacklogo.svg"

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div class='right-sidebar-div-1'>
            <div class='right-sidebar-div-2'>
                <img src={pen} alt='pen' width="16"/>
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div class='right-sidebar-div-2'>
                <img src={pen} alt='pen' width="16" />
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div class='right-sidebar-div-1'>
            <div class='right-sidebar-div-2'>
                <img src={comment} alt='comment' width="16"/>
                <p>Review queue workflows - Final release....</p>
            </div>
            <div class='right-sidebar-div-2'>
                <img src={comment} alt='comment' width="16" />
                <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
            </div>
            <div class='right-sidebar-div-2'>
                <img src={logo} alt='comment' width="16" style={{color:"black"}}/>
                <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div class='right-sidebar-div-1'>
            <div class='right-sidebar-div-2'>
                <span>34</span>
                <p>Why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div class='right-sidebar-div-2'>
            <span>19</span>
                <p>What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div class='right-sidebar-div-2'>
            <span>48</span>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget
