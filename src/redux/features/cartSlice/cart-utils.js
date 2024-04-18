export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];

  // localStorage.setItem('cart', JSON.stringify(state.cartItems));
};

export const removeItemFromCart = (cartItems, itemIdToDelete) => {
  return cartItems.filter((item) => item.id !== itemIdToDelete);
};

export const increaseQuantity = (cartItems, itemIdToIncrease) => {
  return cartItems.map((item) =>
    item.id === itemIdToIncrease ? {...item, quantity: item.quantity + 1} : item
  );
};

export const decreaseQuantity = (cartItems, itemIdToDecrease) => {
  return cartItems.map((item) =>
    item.id === itemIdToDecrease && item.quantity > 1
      ? {...item, quantity: item.quantity - 1}
      : item
  );
};

export const totalPrice = (itemArray) =>
  itemArray.reduce((total, item) => total + item.price * item.quantity, 0);

export const totalItem = (itemArray) => itemArray.reduce((total, item) => total + item.quantity, 0);
