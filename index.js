const wrapper = document.querySelector('#slide-wrapper')
const images = document.querySelectorAll('.slide-img')

let count = 0;

function slide() {
    count++;
    if (count >= images.length) {
        count = 0;
    } else if (count <= 0) {
        count = images.length
    }
    wrapper.style.transform = `translateX(-${count * 100}%)`
    updateDot()
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.dataset.side === 'left') {
            if (count <= 0) {
                count = images.length;           
            }
            count--;
            wrapper.style.transform = `translateX(-${count * 100}%)`
            updateDot()
        } else {
            if (count >= images.length) count = 0;
            slide()
        }

    })
})
const dots = document.querySelectorAll('.dots')
dots.forEach(dot => {
    dot.addEventListener('click', e => {
        // remove class from old
        dots.forEach(x => {
            if (x.classList.contains('selected')) x.classList.remove('selected')
        })
        // change color add class
        e.target.classList.add('selected')
        // translate wrapper
        const id = e.target.dataset.id
        wrapper.style.transform = `translateX(-${id * 100}%)`
        
    })
})

function updateDot() {
    // change dot to match translate
    const dots = document.querySelectorAll('.dots')
    const arr = [...dots]
    dots.forEach(dot => {
        if (dot.classList.contains('selected')) dot.classList.remove('selected')
    })
    arr[count].classList.add('selected')
}

updateDot();

setInterval(slide, 5000)