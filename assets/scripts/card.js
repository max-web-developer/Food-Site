const miniCards = document.querySelectorAll('.info__minicard');
const miniCardtitle = document.querySelectorAll('.info__minicard-text');
const miniCardimg = document.querySelectorAll('.info__minicard-image');

miniCards.forEach((miniCard) => {
    miniCard.addEventListener('click',() =>{
        console.dir(miniCard);
        if (!miniCard.classList.contains('active')){
            miniCard.classList.add('active');
        } else {
            miniCard.classList.remove('active');
        }
    })
})


