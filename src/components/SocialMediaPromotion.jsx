import React from 'react'
import { Card } from './Card'
import discord from "../assets/discord2.svg";
import youtube from "../assets/youtube2.svg";
import paper from "../assets/paper.svg";
import blog from "../assets/blog.svg";

function SocialMediaPromotion() {
  return (
    <section className='social-media-promotion-container'>
        <Card>
            <>
                <div className="social-media-promotion-text">
                    <h2>
                        <span className='higlighted'>Join</span>
                    </h2>
                </div>
                <div className="social-media-promotion-icons">
                    <a href="/">
                        <img src={discord} alt="discord" />
                    </a>
                    <a href="/">
                        <img src={youtube} alt="Youtube" />
                    </a>
                    <a href="/">
                        <img src={paper} alt="White Paper" />
                    </a>
                    <a href="/">
                        <img src={blog} alt="blog" />
                    </a>
                </div>
            </>
        </Card>
    </section>
  )
}

export default SocialMediaPromotion