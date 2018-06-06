let hand = document.querySelector('.hands')

let deggree = 0

var rotate = setInterval(() => {

    hand.style.transform = `rotate(${deggree}deg)`
    deggree += 10


}, 1000)