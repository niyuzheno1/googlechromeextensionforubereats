import { createPortal } from "react-dom";

export default function data() {
  var restaurant = [
    {
      id: 0,
      name: "Burrito Boss (Alessandro Blvd)",
      avgprice: 10.5,
      foodstyle: "Mexican",
      itemlist: (function () {
        var ret = [];
        for (var i = 0; i < 69; ++i) {
          ret.push(i);
        }
        return ret;
      })(),
      pic:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      id: 1,
      name: "KFC",
      avgprice: 10.5,
      foodstyle: "Fast Food",
      itemlist: [68, 69, 70],
      pic:
        "https://www.joc.com/sites/default/files/field_feature_image/KFC_0.png"
    },
    {
      id: 2,
      name: "McDonald's",
      avgprice: 10.5,
      foodstyle: "Fast Food",
      itemlist: [84, 85, 86],
      pic:
        "https://thumbor.thedailymeal.com/IuNAZEOg1iTCBm6IucoNYkn5BuA=//https://www.thedailymeal.com/sites/default/files/story/2018/mcdonaldsmain-dreamstime.JPG"
    }
  ];
  var Items = [
    {
      ID: 1,
      name: "Chorizo and Egg All Day Breakfast",
      price: 11.25,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 2,
      name: "Breakfast Quesadilla All Day Breakfast",
      price: 5.6,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 3,
      name: "Breakfast Taco All Day Breakfast",
      price: 10.5,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 4,
      name: "Breakfast Burrito All Day Breakfast",
      price: 8.366666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 5,
      name: "Meat El Burrito",
      price: 7.991666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 6,
      name: "Cheese El Burrito",
      price: 7.616666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 7,
      name: "Meat El Bronco Burrito",
      price: 7.241666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 8,
      name: "Cheese El Bronco Burrito",
      price: 6.866666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 9,
      name: "Meat El Express Burrito",
      price: 6.491666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 10,
      name: "Chicken and Cream El Express Burrito",
      price: 6.116666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 11,
      name: "Cheese El Express Burrito",
      price: 5.741666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 12,
      name: "El Cancun Burrito",
      price: 5.366666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 13,
      name: "El Veracruz Burrito",
      price: 4.991666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 14,
      name: "Shrimp Fajita Burrito",
      price: 4.616666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 15,
      name: "El Veggie Mix Burrito",
      price: 4.241666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 16,
      name: "El Fresh Mix Burrito",
      price: 3.866666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 17,
      name: "El Vegetarian Special Burrito",
      price: 3.491666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 18,
      name: "El Tofu Burrito",
      price: 3.116666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 19,
      name: "El Terrapin Burrito",
      price: 2.741666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 20,
      name: "El Norcal Burrito",
      price: 2.366666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 21,
      name: "El Baja Cali Burrito",
      price: 1.991666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 22,
      name: "El Gigante Burrito",
      price: 1.616666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 23,
      name: "El Macho Burrito",
      price: 1.241666667,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 24,
      name: "El Surf and Turf Special Burrito",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 25,
      name: "El Americano Burrito",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 26,
      name: "El Ranchero Burrito",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 27,
      name: "El Flaco Burrito",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 28,
      name: "El Chile Relleno Burrito",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 29,
      name: "El Ohana Burrito",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 30,
      name: "Meat Soft Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 31,
      name: "Chicken and Rice Soft Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 32,
      name: "Avocado Soft Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 33,
      name: "Beef Hard Shell Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 34,
      name: "Chicken and Sour Cream Hard Shell Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 35,
      name: "Mango Pork Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 36,
      name: "Fish Fajita Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 37,
      name: "Cabo Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 38,
      name: "Gigante Taco",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 39,
      name: "Flour Quesadilla",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 40,
      name: "Nachos Grande",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 41,
      name: "Corn Quesadilla",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 42,
      name: "Corn Quesadilla Meat",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 43,
      name: "Super Baby Burrito",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 44,
      name: "Enchilada",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 45,
      name: "Avocado Tostada",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 46,
      name: "Beef Taquitos",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 47,
      name: "Beef Plantain",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 48,
      name: "Two Enchiladas Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 49,
      name: "Two Tacos Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 50,
      name: "Enchilada and Taco Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 51,
      name: "Two Burritos Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 52,
      name: "Tostada Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 53,
      name: "Avocado Tostada Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 54,
      name: "Chili Colorado Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 55,
      name: "Chili Verde Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 56,
      name: "Pollo Asado Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 57,
      name: "Pollo Fajitas Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 58,
      name: "Carne Fajitas Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 59,
      name: "Tofu Fajitas Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 60,
      name: "Seafood Fajitas Plate",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 61,
      name: "Guacamole and Chips",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 62,
      name: "Corn Tortilla",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 63,
      name: "Grilled Jalapenos 3 Pcs",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 64,
      name: "Hot Sauce",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 65,
      name: "Juice Squeeze",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 66,
      name: "Sidral Mundet",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 67,
      name: "Sangria Senorial",
      price: 10.3,
      picture:
        "https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
    },
    {
      ID: 68,
      name: "Add Bacon - KFC",
      price: 10.3,
      picture:
        "https://media-cdn.tripadvisor.com/media/photo-s/12/1c/a0/5d/zinger-burger.jpg"
    },
    {
      ID: 69,
      name: "Add Mashed Potatoes - KFC",
      price: 10.3,
      picture:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegan-land-box-1-1577968415.jpg?crop=1.00xw:0.786xh;0,0&resize=1200:*"
    },
    {
      ID: 70,
      name: "Build-Your-Own Bowl - KFC",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 71,
      name: "Hot Pocket Bowl - KFC",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 72,
      name: "Poutine - KFC",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 73,
      name: "Side of Biscuits - KFC",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 74,
      name: "Triple Down - KFC",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 75,
      name: "2 Cheeseburger Meal - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 76,
      name: "All American - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 77,
      name: "Big McChicken - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 78,
      name: "Biscuits and Gravy - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 79,
      name: "Chicken McGriddle - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 80,
      name: "Fries with Big Mac Sauce - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 81,
      name: "Grilled Cheese - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 82,
      name: "Land, Sea, and Air Burger - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 83,
      name: "Mc10:35 - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 84,
      name: "McCrepe - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 85,
      name: "McDonalds Dipping Sauces - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 86,
      name: "McGangbang - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 87,
      name: "McKinley Mac - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 88,
      name: "McLeprechaun Shake - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 89,
      name: "Monster Mac - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 90,
      name: "Neapolitan Shake - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 91,
      name: "Pie McFlurry - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 92,
      name: "Poor Man's Big Mac - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    },
    {
      ID: 93,
      name: "Root Beer Float - McDonalds",
      price: 10.3,
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/03/kfc-650x560.jpg"
    }
  ];

  return { rest: restaurant, items: Items };
}
function twospace(num) {
  num = num.toString(); //If it's not already a String
  num = num.slice(0, num.indexOf(".") + 3); //With 3 exposing the hundredths place
  return Number(num); //If you nee
}
export function cptotal(x) {
  x.Subtotal = 0;
  console.log(x.items);
  for (var y = 0; y < x.items.length; ++y) {
    x.Subtotal += x.items[y].price;
  }

  x.Taxes = 0.013 * x.Subtotal;
  x.ServiceFee = 0.005 * x.Subtotal;
  x.SmallOrderFee = 4;
  x.DeliveryFee = 1.99;
  x.Subtotal = twospace(x.Subtotal);
  x.Taxes = twospace(x.Taxes);
  x.ServiceFee = twospace(x.ServiceFee);
  x.SmallOrderFee = twospace(x.SmallOrderFee);
  x.Total = x.Subtotal + x.Taxes + x.ServiceFee + x.SmallOrderFee;
  x.Total = twospace(x.Total);
  return x;
}

export function orderonline(x) {}
