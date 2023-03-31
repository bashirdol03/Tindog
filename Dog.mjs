// Create the Dog class here


export class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getDogProfileHtml() {
        const { name, avatar, age, bio} = this
        return `
        <img src="images/badge-like.png" alt="a like badge" class="like-badge" id="like-badge">
        <img src="images/badge-nope.png" alt="a nope badge" class="nope-badge" id="nope-badge">
        <div class="img-container">
           <img src=${avatar} alt="image of a dog called ${name}" class="profile-image">
        </div>
        <div class="profile-text">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div> `
    }
}


