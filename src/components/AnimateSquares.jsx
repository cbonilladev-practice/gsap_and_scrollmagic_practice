import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import './AnimateSquares.scss';

const AnimateText = () => {
	gsap.registerPlugin( ScrollTrigger )	

	const dbox = useRef()
	const boxes = useRef()
	
	console.log(boxes)

	useEffect(() => {
		// Just the last box.
		// gsap.to(dbox.current, {
		// 	x: "75vw",
		// 	rotation: 360,
		// 	duration: 3,
		// 	delay: 0.5,
		// 	ease: "bounce",
		// 	scrollTrigger: {
		// 		trigger: dbox.current,
		// 		markers: {startColor: "white", endColor: "white", fontSize: "24px"},
		// 		scrub: true
		// 	}
		// })

		gsap.to(boxes.current.children, {
			x: "75vw",
			rotation: 360,
			duration: 3,
			delay: 0.5,
			ease: "bounce",
			stagger: 0.5,
			scrollTrigger: {
				trigger: dbox.current.children,
				markers: {startColor: "white", endColor: "white", fontSize: "24px"},
				scrub: true
			}
		})

	}, [])


	return (
		<div>
			<section ref={boxes} className="section-2">
				<div id="a-box" className="box">a</div>
				<div id="b-box" className="box">b</div>
				<div id="c-box" className="box">c</div>
				<div ref={dbox} id="d-box" className="box">d</div>
			</section>
		</div>
	)
}

export default AnimateText
