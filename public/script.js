// Sample menu data (will later come from the backend)
const menu = [
  // Pizzas (30 items)
  { name: "Margherita Pizza", price: 10, category: "pizza", image: "https://via.placeholder.com/200x150?text=Margherita+Pizza" },
  { name: "Pepperoni Pizza", price: 12, category: "pizza", image: "https://via.placeholder.com/200x150?text=Pepperoni+Pizza" },
  { name: "Veggie Pizza", price: 11, category: "pizza", image: "https://via.placeholder.com/200x150?text=Veggie+Pizza" },
  { name: "Hawaiian Pizza", price: 13, category: "pizza", image: "https://via.placeholder.com/200x150?text=Hawaiian+Pizza" },
  { name: "BBQ Chicken Pizza", price: 14, category: "pizza", image: "https://via.placeholder.com/200x150?text=BBQ+Chicken+Pizza" },
  { name: "Meat Lovers Pizza", price: 15, category: "pizza", image: "https://via.placeholder.com/200x150?text=Meat+Lovers+Pizza" },
  { name: "Buffalo Chicken Pizza", price: 14, category: "pizza", image: "https://via.placeholder.com/200x150?text=Buffalo+Chicken+Pizza" },
  { name: "Four Cheese Pizza", price: 12, category: "pizza", image: "https://via.placeholder.com/200x150?text=Four+Cheese+Pizza" },
  { name: "Supreme Pizza", price: 16, category: "pizza", image: "https://via.placeholder.com/200x150?text=Supreme+Pizza" },
  { name: "Mushroom Pizza", price: 11, category: "pizza", image: "https://via.placeholder.com/200x150?text=Mushroom+Pizza" },
  { name: "Spinach and Feta Pizza", price: 13, category: "pizza", image: "https://via.placeholder.com/200x150?text=Spinach+and+Feta+Pizza" },
  { name: "Pesto Pizza", price: 14, category: "pizza", image: "https://via.placeholder.com/200x150?text=Pesto+Pizza" },
  { name: "Seafood Pizza", price: 18, category: "pizza", image: "https://via.placeholder.com/200x150?text=Seafood+Pizza" },
  { name: "Tandoori Chicken Pizza", price: 15, category: "pizza", image: "https://via.placeholder.com/200x150?text=Tandoori+Chicken+Pizza" },
  { name: "Margherita with Extra Cheese", price: 11, category: "pizza", image: "https://via.placeholder.com/200x150?text=Margherita+with+Extra+Cheese" },
  { name: "Pepperoni with Jalapeños", price: 13, category: "pizza", image: "https://via.placeholder.com/200x150?text=Pepperoni+with+Jalapeños" },
  { name: "Veggie Delight Pizza", price: 12, category: "pizza", image: "https://via.placeholder.com/200x150?text=Veggie+Delight+Pizza" },
  { name: "Chicken Tikka Pizza", price: 14, category: "pizza", image: "https://via.placeholder.com/200x150?text=Chicken+Tikka+Pizza" },
  { name: "BBQ Beef Pizza", price: 15, category: "pizza", image: "https://via.placeholder.com/200x150?text=BBQ+Beef+Pizza" },
  { name: "Spicy Sausage Pizza", price: 14, category: "pizza", image: "https://via.placeholder.com/200x150?text=Spicy+Sausage+Pizza" },
  { name: "Cheeseburger Pizza", price: 14, category: "pizza", image: "https://via.placeholder.com/200x150?text=Cheeseburger+Pizza" },
  { name: "Buffalo Ranch Pizza", price: 13, category: "pizza", image: "https://via.placeholder.com/200x150?text=Buffalo+Ranch+Pizza" },
  { name: "Greek Pizza", price: 12, category: "pizza", image: "https://via.placeholder.com/200x150?text=Greek+Pizza" },
  { name: "White Pizza", price: 11, category: "pizza", image: "https://via.placeholder.com/200x150?text=White+Pizza" },
  { name: "BBQ Veggie Pizza", price: 12, category: "pizza", image: "https://via.placeholder.com/200x150?text=BBQ+Veggie+Pizza" },
  { name: "Chicken Alfredo Pizza", price: 14, category: "pizza", image: "https://via.placeholder.com/200x150?text=Chicken+Alfredo+Pizza" },
  { name: "Philly Cheesesteak Pizza", price: 15, category: "pizza", image: "https://via.placeholder.com/200x150?text=Philly+Cheesesteak+Pizza" },
  { name: "Breakfast Pizza", price: 12, category: "pizza", image: "https://via.placeholder.com/200x150?text=Breakfast+Pizza" },
  { name: "Taco Pizza", price: 13, category: "pizza", image: "https://via.placeholder.com/200x150?text=Taco+Pizza" },
  { name: "Gluten-Free Pizza", price: 16, category: "pizza", image: "https://via.placeholder.com/200x150?text=Gluten-Free+Pizza" },

  // Sides (15 items)
  { name: "French Fries", price: 5, category: "side", image: "https://via.placeholder.com/200x150?text=French+Fries" },
  { name: "Chips and Chicken", price: 8, category: "side", image: "https://via.placeholder.com/200x150?text=Chips+and+Chicken" },
  { name: "Chips and Russian", price: 7, category: "side", image: "https://via.placeholder.com/200x150?text=Chips+and+Russian" },
  { name: "Garlic Bread", price: 6, category: "side", image: "https://via.placeholder.com/200x150?text=Garlic+Bread" },
  { name: "Mozzarella Sticks", price: 7, category: "side", image: "https://via.placeholder.com/200x150?text=Mozzarella+Sticks" },
  { name: "Onion Rings", price: 6, category: "side", image: "https://via.placeholder.com/200x150?text=Onion+Rings" },
  { name: "Chicken Wings", price: 9, category: "side", image: "https://via.placeholder.com/200x150?text=Chicken+Wings" },
  { name: "Potato Wedges", price: 5, category: "side", image: "https://via.placeholder.com/200x150?text=Potato+Wedges" },
  { name: "Coleslaw", price: 4, category: "side", image: "https://via.placeholder.com/200x150?text=Coleslaw" },
  { name: "Caesar Salad", price: 7, category: "side", image: "https://via.placeholder.com/200x150?text=Caesar+Salad" },
  { name: "Mac and Cheese", price: 8, category: "side", image: "https://via.placeholder.com/200x150?text=Mac+and+Cheese" },
  { name: "Breadsticks", price: 5, category: "side", image: "https://via.placeholder.com/200x150?text=Breadsticks" },
  { name: "Nachos", price: 7, category: "side", image: "https://via.placeholder.com/200x150?text=Nachos" },
  { name: "Chicken Tenders", price: 9, category: "side", image: "https://via.placeholder.com/200x150?text=Chicken+Tenders" },
  { name: "Stuffed Jalapeños", price: 6, category: "side", image: "https://via.placeholder.com/200x150?text=Stuffed+Jalapeños" },

  // Drinks (20 items)
  { name: "Coca-Cola", price: 2, category: "drink", image: "https://via.placeholder.com/200x150?text=Coca-Cola" },
  { name: "Pepsi", price: 2, category: "drink", image: "https://via.placeholder.com/200x150?text=Pepsi" },
  { name: "Fanta", price: 2, category: "drink", image: "https://via.placeholder.com/200x150?text=Fanta" },
  { name: "Sprite", price: 2, category: "drink", image: "https://via.placeholder.com/200x150?text=Sprite" },
  { name: "Bottled Water", price: 1, category: "drink", image: "https://via.placeholder.com/200x150?text=Bottled+Water" },
  { name: "Lemonade", price: 3, category: "drink", image: "https://via.placeholder.com/200x150?text=Lemonade" },
  { name: "Iced Tea", price: 3, category: "drink", image: "https://via.placeholder.com/200x150?text=Iced+Tea" },
  { name: "Orange Juice", price: 4, category: "drink", image: "https://via.placeholder.com/200x150?text=Orange+Juice" },
  { name: "Apple Juice", price: 4, category: "drink", image: "https://via.placeholder.com/200x150?text=Apple+Juice" },
  { name: "Milkshake (Chocolate)", price: 5, category: "drink", image: "https://via.placeholder.com/200x150?text=Chocolate+Milkshake" },
  { name: "Milkshake (Vanilla)", price: 5, category: "drink", image: "https://via.placeholder.com/200x150?text=Vanilla+Milkshake" },
  { name: "Milkshake (Strawberry)", price: 5, category: "drink", image: "https://via.placeholder.com/200x150?text=Strawberry+Milkshake" },
  { name: "Coffee", price: 3, category: "drink", image: "https://via.placeholder.com/200x150?text=Coffee" },
  { name: "Hot Chocolate", price: 4, category: "drink", image: "https://via.placeholder.com/200x150?text=Hot+Chocolate" },
  { name: "Green Tea", price: 3, category: "drink", image: "https://via.placeholder.com/200x150?text=Green+Tea" },
  { name: "Mango Lassi", price: 4, category: "drink", image: "https://via.placeholder.com/200x150?text=Mango+Lassi" },
  { name: "Smoothie (Mixed Berry)", price: 5, category: "drink", image: "https://via.placeholder.com/200x150?text=Mixed+Berry+Smoothie" },
  { name: "Smoothie (Tropical)", price: 5, category: "drink", image: "https://via.placeholder.com/200x150?text=Tropical+Smoothie" },
  { name: "Energy Drink", price: 3, category: "drink", image: "https://via.placeholder.com/200x150?text=Energy+Drink" },
  { name: "Sparkling Water", price: 2, category: "drink", image: "https://via.placeholder.com/200x150?text=Sparkling+Water" },

  // Ice Creams (10 items)
  { name: "Vanilla Ice Cream", price: 4, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Vanilla+Ice+Cream" },
  { name: "Chocolate Ice Cream", price: 4, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Chocolate+Ice+Cream" },
  { name: "Strawberry Ice Cream", price: 4, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Strawberry+Ice+Cream" },
  { name: "Mint Chocolate Chip", price: 5, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Mint+Chocolate+Chip" },
  { name: "Cookies and Cream", price: 5, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Cookies+and+Cream" },
  { name: "Rocky Road", price: 5, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Rocky+Road" },
  { name: "Butter Pecan", price: 5, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Butter+Pecan" },
  { name: "Pistachio", price: 5, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Pistachio" },
  { name: "Salted Caramel", price: 5, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Salted+Caramel" },
  { name: "Rainbow Sherbet", price: 4, category: "ice-cream", image: "https://via.placeholder.com/200x150?text=Rainbow+Sherbet" },
];

const cart = [];

// Display menu items
function displayMenu() {
  const sections = {
    pizza: document.getElementById("pizzas"),
    side: document.getElementById("sides"),
    drink: document.getElementById("drinks"),
    "ice-cream": document.getElementById("ice-creams"),
  };

  menu.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "menu-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>$${item.price.toFixed(2)}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;
    sections[item.category].appendChild(itemDiv);
  });
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItemsUl = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");

  cartItemsUl.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsUl.appendChild(li);
    total += item.price;
  });

  totalSpan.textContent = total.toFixed(2);
}

// Checkout button
document.getElementById("checkout").addEventListener("click", () => {
  const deliveryLocation = prompt("Enter your delivery address:");
  if (deliveryLocation) {
    const isInTown = confirm("Is your location within town? (Free delivery in town)");
    let deliveryFee = 0;
    if (!isInTown) {
      deliveryFee = 5; // $5 delivery fee for out-of-town
    }
    const totalWithDelivery = cart.reduce((sum, item) => sum + item.price, 0) + deliveryFee;
    alert(`Your total (including delivery): $${totalWithDelivery.toFixed(2)}\nDelivery to: ${deliveryLocation}`);
  } else {
    alert("Please enter a delivery address.");
  }
});

// Display the menu when the page loads
displayMenu();