export function formatPrice(price) {
	if (isNaN(price)) return "";
	return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
