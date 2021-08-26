import { gsap } from 'gsap';
import React from 'react';
import './AnimateText.css';

const AnimateText = () => {
	var tl = gsap.timeline()

	const moveYou = () => {
		tl
		.to('.btn', {duration: 0.3, opacity: 0})		
		.to('.intro-text h2', {duration: 0.3, opacity: 0})	
		.to('.hidetext', {duration: 0, opacity: 1})	
		.from(".hidetext", {duration: 1.5, y: "100%", ease: "Power4.easeOut", stagger: 0.15})
	}

	return (
		<div>
			<section className="section-1">
				<div className="intro-text">
					<h2>NFT(y)!</h2>
					<button className="btn" onClick={moveYou}>Enter the terrordome.</button>
				</div>
				<div className="big-text">
					<h1>
						<span className="hidetext">We create</span>
					</h1>
					<h1>
						<span className="hidetext">non-fungible</span>
					</h1>
					<h1>
						<span className="hidetext">excitement</span>
					</h1>
					<h1>
						<span className="hidetext">and fun.</span>
					</h1>
				</div>
			</section>
		</div>
	)
}

export default AnimateText
