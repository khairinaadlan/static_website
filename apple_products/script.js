// Slideshow
const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}
// instead of duplicate 5 times in html use for loop in js

slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

// slideshow stop at 5 bcs cant find next sibling, so use this a:
let a = 1

const slideshow = () => {
    setInterval( () => {
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if (a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 20000)
    // in milliseconds, change delete change, add change to next
}

slideshow()
// End of Slideshow