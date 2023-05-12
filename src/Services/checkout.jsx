import api from "./config";

const { cart, addToCart, removeFromCart } = useAppContext()

const checkout = async () => {
  await fetch(`${api}/stripe/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items: cart }),
  }).then((response) => {
    return response.json();
  }).then((response) => {
    if (response.url) {
      window.location.assign(response.url)
    }
  })
}

export default checkout