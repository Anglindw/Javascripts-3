const second_h1 = document.getElementsByTagName('h1')[1]

second_h1.innerText = 'I have been changed'

// get elementsbyClass name & getElementbyId

const rib = document.getElementsByClassName('test_class')[0]

rib.innerText = 'Hello it is i'

const inn = document.getElementById('test_id')

inn.innerHTML = '<a href="#">Changing inner</a>'

const new_btn = document.createElement('button')

document.body.append(new_btn)

new_btn.innerText = 'Click'


new_btn.addEventListener('click', () =>{
    console.log('I am being clicked')

    if(new_btn.className === ""){
        new_btn.className = 'pink'

    } else if (new_btn.className === 'pink'){
        new_btn.className = 'blue'
    }

})

const new_btn2 = document.createElement('button')
new_btn2.innerText = 'Thieves'

const test_div = document.querySelector('.test')

test_div.append(new_btn2)

