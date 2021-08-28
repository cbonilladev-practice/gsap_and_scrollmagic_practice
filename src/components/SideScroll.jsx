import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import './SideScroll.scss'

gsap.registerPlugin(ScrollTrigger)

const SideScroll = () => {
	const panels = useRef([])
	const panelsContainer = useRef();

	const createPanelsRefs = (panel, index) => {
		panels.current[index] = panel
	}

	useEffect(() => {
		const totalPanels = panels.current.length

		gsap.to(panels.current, {
			xPercent: -100 * (totalPanels - 1),
			ease: "none",
			scrollTrigger: {
				trigger: panelsContainer.current,
				pin: true,
				scrub: 1,
				snap: 1 / (totalPanels - 1),
				end: () => "+=" + panelsContainer.current.offsetWidth
			}
		})
	}, [])

	return (
		<>
			<div className="container" ref={panelsContainer}>
				<div className="panel uno" ref={(e) => createPanelsRefs(e, 0)}>
					<div>
						<h1>Uno</h1>
					</div>
				</div>
				<section className="panel dos" ref={(e) => createPanelsRefs(e, 1)}>
					<h1>Dos</h1>
				</section>
				<section className="panel tres" ref={(e) => createPanelsRefs(e, 2)}>
					<h1>Tres</h1>
				</section>
				<section className="panel arriba" ref={(e) => createPanelsRefs(e, 3)}>
					<h1>Arriba!</h1>
				</section>
			</div>
		</>
	)
}

export default SideScroll
