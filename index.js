const crossBtn = document.getElementById('cross-btn')
const heartBtn = document.getElementById('heart-btn')
const mainEl = document.getElementById('main-profile')

// DATA SECTION

const dogs = {
    
    Rex : {
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    Bella : {
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    Teddy : {
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
}


// CLASS SECTION


class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getDogProfileHtml() {
        const { name, avatar, age, bio} = this
        return `
        <img src="images/badge-like.png" alt="a like badge" class="like-badge" id="like-badge">
        <img src="images/badge-nope.png" alt="a nope badge" class="nope-badge" id="nope-badge">
        <img src=${avatar} alt="image of a dog called teddy" class="profile-image">
        <div class="profile-text">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div> `
    }
}








crossBtn.addEventListener('click',function(){
    
    document.getElementById('like-badge').style.display = 'none'
    document.getElementById('nope-badge').style.display = 'block'
    dogProfile = getNewDog()
    setTimeout(render,1000)
    
})

heartBtn.addEventListener('click',function(){
    
    document.getElementById('nope-badge').style.display = 'none'
    document.getElementById('like-badge').style.display = 'block'
    dogProfile = getNewDog()
    setTimeout(render,1000)

})

let dogsArray = ["Rex", "Bella", "Teddy"]

function getNewDog(){
    const nextDogData = dogs[dogsArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}



function render(){
   
    
    mainEl.innerHTML = dogProfile.getDogProfileHtml()
    
    
}
let dogProfile = getNewDog()

render()

