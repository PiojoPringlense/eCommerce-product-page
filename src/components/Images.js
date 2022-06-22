import React, { useEffect, useState } from "react";
import "../css/images.css";

export default function Images({ images, thumbs, modal = false, switchModal }) {
	const [mainImage, setMainImage] = useState(images[0]);
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	function handlePrevImage() {
		if (activeImageIndex > 0) {
			setActiveImageIndex((prevIndex) => prevIndex - 1);
		} else {
			setActiveImageIndex(images.length - 1);
		}
	}

	function handleNextImage() {
		if (activeImageIndex < images.length - 1) {
			setActiveImageIndex((prevIndex) => prevIndex + 1);
		} else {
			setActiveImageIndex(0);
		}
	}

	useEffect(() => {
		setMainImage(images[activeImageIndex]);
	}, [activeImageIndex, images]);

	return (
		<div className={modal ? "images-container modal" : "images-container"}>
			<div className="modal-background"></div>
			<button className="close-modal" onClick={switchModal}>
				<svg width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
						fill="#FFFFFF"
						fillRule="evenodd"
					/>
				</svg>
			</button>
			<div className="image" onClick={modal ? undefined : switchModal}>
				<button className="mobile-img-change prev" onClick={handlePrevImage}>
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m2 1 8 8-8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
				</button>
				<img src={mainImage} alt="Product main"></img>
				<button className="mobile-img-change next" onClick={handleNextImage}>
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m2 1 8 8-8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div className="thumbs-container">
				{thumbs.map((thumb, index) => {
					return (
						<div
							className={
								activeImageIndex === index ? "thumb-container active" : "thumb-container"
							}
							key={thumb}
							onClick={() => {
								setActiveImageIndex(index);
							}}>
							<img src={thumb} alt="Product thumbnail"></img>
						</div>
					);
				})}
			</div>
		</div>
	);
}
