import {foodItem} from './fooditem.js';

console.log(foodItem);


// console.log(foodItem);

// function displayItems(){
//     var paneer = document.getElementById('paneer');
//     var vegetable = document.getElementById('vegetable');
//     var chinese = document.getElementById('chinese');
//     var southIndian = document.getElementById('south-indian');
//     var chicken = document.getElementById('chicken');
//     var biryani = document.getElementById('biryani');

//     const paneerData = foodItem.filter(item=> item.category=='paneer');
//     console.log(paneerData);

//     const vegetableData = foodItem.filter(item=> item.category=='vegetable');
//     console.log(vegetableData);

//     const chineseData = foodItem.filter(item=> item.category=='chinese');
//     console.log(chineseData);

//     const southIndianData = foodItem.filter(item=> item.category=='south indian');  
//     // this is the category in foodItem.js
//     console.log(southIndianData);

//     const chickenData = foodItem.filter(item=> item.category=='chicken');
//     console.log(chickenData);

//     const biryaniData = foodItem.filter(item=> item.category=='biryani');
//     console.log(biryaniData);

//     biryaniData.map(item=> {

//         var itemCard = document.createElement('div');
//         itemCard.setAttribute('id', 'item-card');

//         var cardTop = document.createElement('div');
//         cardTop.setAttribute('id', 'card-top');

//         var star = document.createElement('i');
//         star.setAttribute('class','fa fa-start');
//         star.setAttribute('id','rating');
//         star.innerText = ' ' + item.rating;

//         var heart = document.createElement('i');
//         heart.setAttribute('class','fa fa-heart-o add-to-cart');
//         heart.setAttribute('id',item.id);

//         cardTop.appendChild(star);
//         cardTop.appendChild(heart);

//         var img = document.createElement('img');
//         img.src = item.img;

//         var itemName = document.createElement('p');
//         itemName.setAttribute('id','item-name');
//         itemName.innerText = item.name;

//         var itemPrice = document.createElement('p');
//         itemPrice.setAttribute('id','item-price');
//         itemPrice.innerText = 'Price : $' + item.price;

//         itemCard.appendChild(cardTop);
//         itemCard.appendChild(img);
//         itemCard.appendChild(itemName);
//         itemCard.appendChild(itemPrice);

//         biryani.appendChild(itemCard);
//     })

//     paneerData.map(item=> {

//         var itemCard = document.createElement('div');
//         itemCard.setAttribute('id', 'item-card');

//         var cardTop = document.createElement('div');
//         cardTop.setAttribute('id', 'card-top');

//         var star = document.createElement('i');
//         star.setAttribute('class','fa fa-start');
//         star.setAttribute('id','rating');
//         star.innerText = ' ' + item.rating;

//         var heart = document.createElement('i');
//         heart.setAttribute('class','fa fa-heart-o add-to-cart');
//         heart.setAttribute('id',item.id);

//         cardTop.appendChild(star);
//         cardTop.appendChild(heart);

//         var img = document.createElement('img');
//         img.src = item.img;

//         var itemName = document.createElement('p');
//         itemName.setAttribute('id','item-name');
//         itemName.innerText = item.name;

//         var itemPrice = document.createElement('p');
//         itemPrice.setAttribute('id','item-price');
//         itemPrice.innerText = 'Price : $' + item.price;

//         itemCard.appendChild(cardTop);
//         itemCard.appendChild(img);
//         itemCard.appendChild(itemName);
//         itemCard.appendChild(itemPrice);

//         paneer.appendChild(itemCard);
//     })

//     vegetableData.map(item=> {

//         var itemCard = document.createElement('div');
//         itemCard.setAttribute('id', 'item-card');

//         var cardTop = document.createElement('div');
//         cardTop.setAttribute('id', 'card-top');

//         var star = document.createElement('i');
//         star.setAttribute('class','fa fa-start');
//         star.setAttribute('id','rating');
//         star.innerText = ' ' + item.rating;

//         var heart = document.createElement('i');
//         heart.setAttribute('class','fa fa-heart-o add-to-cart');
//         heart.setAttribute('id',item.id);

//         cardTop.appendChild(star);
//         cardTop.appendChild(heart);

//         var img = document.createElement('img');
//         img.src = item.img;

//         var itemName = document.createElement('p');
//         itemName.setAttribute('id','item-name');
//         itemName.innerText = item.name;

//         var itemPrice = document.createElement('p');
//         itemPrice.setAttribute('id','item-price');
//         itemPrice.innerText = 'Price : $' + item.price;

//         itemCard.appendChild(cardTop);
//         itemCard.appendChild(img);
//         itemCard.appendChild(itemName);
//         itemCard.appendChild(itemPrice);

//         vegetable.appendChild(itemCard);
//     })

//     chineseData.map(item=> {

//         var itemCard = document.createElement('div');
//         itemCard.setAttribute('id', 'item-card');

//         var cardTop = document.createElement('div');
//         cardTop.setAttribute('id', 'card-top');

//         var star = document.createElement('i');
//         star.setAttribute('class','fa fa-start');
//         star.setAttribute('id','rating');
//         star.innerText = ' ' + item.rating;

//         var heart = document.createElement('i');
//         heart.setAttribute('class','fa fa-heart-o add-to-cart');
//         heart.setAttribute('id',item.id);

//         cardTop.appendChild(star);
//         cardTop.appendChild(heart);

//         var img = document.createElement('img');
//         img.src = item.img;

//         var itemName = document.createElement('p');
//         itemName.setAttribute('id','item-name');
//         itemName.innerText = item.name;

//         var itemPrice = document.createElement('p');
//         itemPrice.setAttribute('id','item-price');
//         itemPrice.innerText = 'Price : $' + item.price;

//         itemCard.appendChild(cardTop);
//         itemCard.appendChild(img);
//         itemCard.appendChild(itemName);
//         itemCard.appendChild(itemPrice);

//         chinese.appendChild(itemCard);
//     })

//     southIndianData.map(item=> {

//         var itemCard = document.createElement('div');
//         itemCard.setAttribute('id', 'item-card');

//         var cardTop = document.createElement('div');
//         cardTop.setAttribute('id', 'card-top');

//         var star = document.createElement('i');
//         star.setAttribute('class','fa fa-start');
//         star.setAttribute('id','rating');
//         star.innerText = ' ' + item.rating;

//         var heart = document.createElement('i');
//         heart.setAttribute('class','fa fa-heart-o add-to-cart');
//         heart.setAttribute('id',item.id);

//         cardTop.appendChild(star);
//         cardTop.appendChild(heart);

//         var img = document.createElement('img');
//         img.src = item.img;

//         var itemName = document.createElement('p');
//         itemName.setAttribute('id','item-name');
//         itemName.innerText = item.name;

//         var itemPrice = document.createElement('p');
//         itemPrice.setAttribute('id','item-price');
//         itemPrice.innerText = 'Price : $' + item.price;

//         itemCard.appendChild(cardTop);
//         itemCard.appendChild(img);
//         itemCard.appendChild(itemName);
//         itemCard.appendChild(itemPrice);

//         southIndian.appendChild(itemCard);
//     })

//     chickenData.map(item=> {

//         var itemCard = document.createElement('div');
//         itemCard.setAttribute('id', 'item-card');

//         var cardTop = document.createElement('div');
//         cardTop.setAttribute('id', 'card-top');

//         var star = document.createElement('i');
//         star.setAttribute('class','fa fa-start');
//         star.setAttribute('id','rating');
//         star.innerText = ' ' + item.rating;

//         var heart = document.createElement('i');
//         heart.setAttribute('class','fa fa-heart-o add-to-cart');
//         heart.setAttribute('id',item.id);

//         cardTop.appendChild(star);
//         cardTop.appendChild(heart);

//         var img = document.createElement('img');
//         img.src = item.img;

//         var itemName = document.createElement('p');
//         itemName.setAttribute('id','item-name');
//         itemName.innerText = item.name;

//         var itemPrice = document.createElement('p');
//         itemPrice.setAttribute('id','item-price');
//         itemPrice.innerText = 'Price : $' + item.price;

//         itemCard.appendChild(cardTop);
//         itemCard.appendChild(img);
//         itemCard.appendChild(itemName);
//         itemCard.appendChild(itemPrice);

//         chicken.appendChild(itemCard);
//     })
// }

// displayItems();
