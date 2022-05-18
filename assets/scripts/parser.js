 const CardsJson = `[
    {
        "group":"ColdAppitaizers",
        "img":"/images/slider/Lamb.png",
        "title":"Ягненок",
        "weight":"Вес: 225 г",
        "text":"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        "price":"620 ₽",
        "button":"В корзину"
    },
    {
        "group":"ColdAppitaizers",
        "img":"/images/slider/Turkey.png",
        "title":"Ягненок",
        "weight":"Вес: 225 г",
        "text":"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        "price":"620 ₽",
        "button":"В корзину"
    },
    {
        "group":"ColdAppitaizers",
        "img":"/images/slider/Lamb.png",
        "title":"Ягненок",
        "weight":"Вес: 225 г",
        "text":"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        "price":"620 ₽",
        "button":"В корзину"
    },
    {
        "group":"ColdAppitaizers",
        "img":"/images/slider/Lamb.png",
        "title":"Ягненок",
        "weight":"Вес: 225 г",
        "text":"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        "price":"620 ₽",
        "button":"В корзину"
    }
]`



const card = document.querySelector('card');
const card_img = document.querySelector('card__img');
const card_title = document.querySelector('card-top__title');
const card_weight = document.querySelector('card-top__weight');
const card_text = document.querySelector('card-middle__subtitle');
const card_price = document.querySelector('card-bottom__price');
const card_button = document.querySelector('card-bottom__button');



const cards = JSON.parse(CardsJson)

console.log(cards)








