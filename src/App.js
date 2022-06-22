import "./App.css";
import { CartProvider } from "./components/CartContext";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

const PRODUCT = {
	id: 1,
	name: "Sneaker Company",
	title: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
	discount: 50,
	price: 250,
	images: [
		"./images/image-product-1.jpg",
		"./images/image-product-2.jpg",
		"./images/image-product-3.jpg",
		"./images/image-product-4.jpg",
	],
	thumbs: [
		"./images/image-product-1-thumbnail.jpg",
		"./images/image-product-2-thumbnail.jpg",
		"./images/image-product-3-thumbnail.jpg",
		"./images/image-product-4-thumbnail.jpg",
	],
};

function App() {
	return (
		<CartProvider>
			<div className="app-container">
				<NavBar />
				<Product product={PRODUCT} />
			</div>
		</CartProvider>
	);
}

export default App;
