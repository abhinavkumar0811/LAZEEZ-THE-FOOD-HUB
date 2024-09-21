import {fooditems} from './fooditems.js';

console.log(fooditems);

function displayItems(){

    var  Biryani =  document.getElementById(Biryani);
    var  vegitable =  document.getElementById(vegitable);
    var  paneer=  document.getElementById(paneer);
    var  paratha=  document.getElementById(paratha);
    var  fast=  document.getElementById(fast);
    var  chiken=  document.getElementById(chiken);
    var  tandori=  document.getElementById(tandori);

    const BiryaniData= fooditems.filter(item=> item.
        category=='Biryani');

        console.log(BiryaniData);

        const vegitableData= fooditems.filter(Item=> Item.
            category=='vegitable');
    
            console.log(vegitableData);

            const paneerData= fooditems.filter(Item=> Item.
                category=='paneer');
        
                console.log(paneerData);

                const parathaData= fooditems.filter(Item=> Item.
                    category=='paratha');
            
                    console.log(parathaData);

                    const fastData= fooditems.filter(Item=> Item.
                        category=='fast');
                
                        console.log(fastData);

                        const chikenData= fooditems.filter(Item=> Item.
                            category=='chiken');

                            console.log(chikenData);

                            const tandoriData= fooditems.filter(Item=> Item.
                                category=='tandori');
                        
                                console.log(tandoriData);
                    
                             BiryaniData.map(Item=>{
                              var itemCart= document.createElement('div');
                              itemCart.setAttribute('id', 'item-cart');

                              var itemTop=document.createElement('div');
                              itemTop.setAttribute('id','card-top');

                              var star= document.createElement('i');
                              star.setAttribute('class','fa fa-star');
                              star.setAttribute('id','rating');
                              star.innerText= ' ' + Item.rating;

                              var heart= document.createElement('i');
                              heart.setAttribute('class','fa fa-heart-o add-to-cart');
                              heart.setAttribute('id',Item.id)

                              itemTop.appendChild(star);
                              itemTop.appendChild(heart);

                              var img= document.createElement('img');
                              img.src=Item.img;
                      
                              var itemName= document.createElement('p');
                              itemName.setAttribute('id','item-name');
                              itemName.innerText= Item.name;

                              var itemPrice= document.createElement('p');
                              itemPrice.setAttribute('id','item-price');
                              itemPrice.innerText= 'Price : $ ' + Item.price;
                      
                              itemCart.appendChild(itemTop);
                              itemCart.appendChild(img);
                              itemCart.appendChild(itemName);
                              itemCart.appendChild(itemPrice);

                               Biryani.appendChild(item-cart);

                             })

                                 
                             

}
displayItems();