import React, { useState } from "react";
import "../css/product.css";
import Button from "./Button";
import Images from "./Images";
import { formatPrice } from "./tools";
import { useSetCart, CART_ACTIONS } from "./CartContext";

export default function Product({ product }) {
	const [qty, setQty] = useState(0);
	const [modal, setModal] = useState(false);
	const setCart = useSetCart();

	function decrementQty() {
		if (qty === 0) return;
		setQty((prevCount) => prevCount - 1);
	}
	function incrementQty() {
		setQty((prevCount) => prevCount + 1);
	}

	function switchModal() {
		setModal((prevModal) => !prevModal);
	}

	return (
		<div className="product-container">
			<div className="product-image-container">
				<Images images={product.images} thumbs={product.thumbs} switchModal={switchModal} />
				{modal && (
					<Images
						images={product.images}
						thumbs={product.thumbs}
						modal={true}
						switchModal={switchModal}
					/>
				)}
			</div>
			<div className="product-info-container">
				<div className="product-description-container">
					<p className="product-name">{product.name}</p>
					<h2 className="product-title">{product.title}</h2>
					<p className="product-description">{product.description}</p>
				</div>
				<div className="product-price-container">
					<div className="product-price-discount">
						<h3 className="product-final-price">
							{formatPrice((product.price * product.discount) / 100)}
						</h3>
						<span className="product-discount">{`${product.discount}%`}</span>
					</div>
					<span className="product-initial-price">{formatPrice(product.price)}</span>
				</div>
				<div className="product-action-container">
					<div className="product-action-qty">
						<button className="qty-btn" onClick={decrementQty}>
							<svg width="12" height="4">
								<path
									d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
									id="a"
								/>
							</svg>
						</button>
						<span className="qty-counter">{qty}</span>
						<button className="qty-btn" onClick={incrementQty}>
							<svg width="12" height="12">
								<path
									d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
									id="b"
								/>
							</svg>
						</button>
					</div>
					<Button
						label="Add to cart"
						icon={true}
						onClick={() =>
							setCart({
								type: CART_ACTIONS.ADD,
								item: {
									id: product.id,
									thumb: product.thumbs[0],
									name: product.title,
									price: (product.price * product.discount) / 100,
									qty: qty,
								},
							})
						}
					/>
				</div>
			</div>
		</div>
	);
}
