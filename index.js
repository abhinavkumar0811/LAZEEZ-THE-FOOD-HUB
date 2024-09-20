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
                    
                                BiryaniData.map(item=>{
        
                                    var itemcart= Document.createElement('div');
                                    itemCart.setAttribute('id',item-cart);
                                    
                                    var cardtop= document.createElement('div');
                                    cardtop.setAttribute('id',card-top);

                                    var star= document.createElement('div');
                                        star.setAttribute('class','fa-star');
                                        star.setAttribute('id','rating');
                                        star.innerText=''+item.rating;

                                        var star= document.createElement('div');
                                        heart.setAttribute('class','fa fa-heart-o add-to-cart');
                                        heart.setAttribute('id','item.id');

                                        cardtop.appendChild(star)
                                        cardtop.appendChild(heart)

                                        var img= document.createElement('img');
                                        img.src= item.img;

                                        var itemname= document.createElement('p');
                                        itemname.setAttribute('id', 'item-name');
                                        itemname.innerText= item.name

                                        var itemprice= document.createElement('p');
                                        itemprice.setAttribute('id', 'item-price');
                                        itemprice.innerText= item.price

                                        itemcart.append(cardtop);
                                        itemcart.append(img);
                                        itemcart.append(itemname);
                                        itemcart.append(itemprice);

                                        Biryani.appendChild(itemcart);

                                    })
                        

}
displayItems();