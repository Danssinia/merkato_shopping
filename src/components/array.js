import icon1 from "../images/icons/icon1.png";
import icon2 from "../images/icons/icon2.png";
import icon3 from "../images/icons/icon3.png";
import icon4 from "../images/icons/icon4.png";
import icon5 from "../images/icons/icon5.png";

import chap from "../images/icons/chap.jpg";
import egg from "../images/icons/egg.jpg";
import orange from "../images/icons/orange.jpg";
import milk from "../images/icons/milk.jpg";
import fruit from "../images/icons/fruit.jpg";
import fish from "../images/icons/fish.jpg";

import mango from "../images/icons/mango.jpg";
import chicken from "../images/icons/chicken.jpg";
import drink from "../images/icons/drink.jpg";
import nut from "../images/icons/nut.jpg";
import potato from "../images/icons/potato.jpg";

import blue from "../images/icons/blue.jpg";
import meat from "../images/icons/meat.jpg";
import onion from "../images/icons/onion.jpg";
import oil from "../images/icons/oil.jpg";

import meat2 from "../images/icons/meat2.jpg";
import oven from "../images/icons/oven.jpg";

import fish2 from "../images/icons/fish2.jpg";
const arrays = [
  {
    id: 1,
    image: icon1,
    catagory: "Grocery",
    items: "20 Items Available",
    // market:"On Sell",
    subItems: [
      {
        id: 11,
        image: chap,
        name: "Lipstick",
        price: "ETB 150",
      },

      {
        id: 12,
        image: egg,
        name: "Egg",
        price: "ETB 10",
      },

      {
        id: 13,
        image: orange,
        name: "Orange",
        price: "ETB 150",
      },

      {
        id: 14,
        image: milk,
        name: "Milk",
        price: "ETB 150",
      },

      {
        id: 15,
        image: fruit,
        name: "Fruit",
        price: "ETB 150",
      },

      {
        id: 16,
        image: fish,
        name: "Fish",
        price: "ETB 150",
      },
    ],
  },

  {
    id: 2,
    image: icon2,
    catagory: "Foods & Drinks",
    items: "6 Items Available",
    // market:"Hot Sell",
    subItems: [
      {
        id: 21,
        image: orange,
        name: "Orange",
        price: "ETB 100",
      },

      {
        id: 22,
        image: mango,
        name: "Mango",
        price: "ETB 100",
      },

      {
        id: 23,
        image: chicken,
        name: "chicken",
        price: "ETB 800",
      },

      {
        id: 24,
        image: drink,
        name: "Energy Drink",
        price: "ETB 250",
      },

      {
        id: 25,
        image: nut,
        name: "Peanut",
        price: "ETB 70",
      },

      {
        id: 26,
        image: potato,
        name: "Potato",
        price: "ETB 50",
      },
    ],
  },

  {
    id: 3,
    image: icon3,
    catagory: "Office Elements",
    items: "8 Items Available",
    market:"Trend",
    subItems: [
      {
        id: 31,
        image: egg,
        name: "Egg",
        price: "ETB 100",
      },

      {
        id: 32,
        image: fruit,
        name: "Fruit",
        price: "ETB 100",
      },

      {
        id: 33,
        image: blue,
        name: "Blue Berry",
        price: "ETB 800",
      },

      {
        id: 34,
        image: meat,
        name: "Meat",
        price: "ETB 250",
      },

      {
        id: 35,
        image: onion,
        name: "Onion",
        price: "ETB 70",
      },

      {
        id: 36,
        image: oil,
        name: "Oil",
        price: "ETB 50",
      },
    ],
  },

  {
    id: 4,
    image: icon4,
    catagory: "Home Appliance",
    items: "6 Items Available",
    market:"Hot Sell",
    subItems: [
      {
        id: 41,
        image: chap,
        name: "Lipstick",
        price: "ETB 150",
      },

      {
        id: 42,
        image: egg,
        name: "Egg",
        price: "ETB 10",
      },

      {
        id: 43,
        image: fish,
        name: "Fish",
        price: "ETB 150",
      },

      {
        id: 44,
        image: meat2,
        name: "Meat",
        price: "ETB 150",
      },

      {
        id: 45,
        image: mango,
        name: "Mango",
        price: "ETB 150",
      },

      {
        id: 46,
        image: oven,
        name: "Oven",
        price: "ETB 150",
      },
    ],
  },

  {
    id: 5,
    image: icon5,
    catagory: "Beauty Products",
    items: "8 Items Available",
    market:"On Sell",
    subItems: [
      {
        id: 51,
        image: chap,
        name: "Lipstick",
        price: "ETB 150",
      },

      {
        id: 52,
        image: orange,
        name: "Orange",
        price: "ETB 10",
      },

      {
        id: 53,
        image: milk,
        name: "Milk",
        price: "ETB 150",
      },

      {
        id: 54,
        image: blue,
        name: "Blue Berry",
        price: "ETB 150",
      },

      {
        id: 55,
        image: meat,
        name: "Meat",
        price: "ETB 150",
      },

      {
        id: 56,
        image: fish2,
        name: "Fish",
        price: "ETB 150",
      },
    ],
  },

  {
    id: 6,
    image: icon4,
    catagory: "Home Furnishings",
    items: "6 Items Available",
    market:"Best Sell",
    subItems: [
      {
        id: 61,
        image: fruit,
        name: "Fruit",
        price: "ETB 150",
      },

      {
        id: 62,
        image: fish,
        name: "Fish",
        price: "ETB 10",
      },

      {
        id: 63,
        image: fish2,
        name: "Fish",
        price: "ETB 150",
      },

      {
        id: 64,
        image: onion,
        name: "Onion",
        price: "ETB 150",
      },

      {
        id: 65,
        image: drink,
        name: "Energy Drink",
        price: "ETB 150",
      },

      {
        id: 66,
        image: nut,
        name: "Peanut",
        price: "ETB 150",
      },
    ],
  },
];

export default arrays;
