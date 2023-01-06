// Create the Dog class here


class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getDogProfileHtml() {
        const { name, avatar, age, bio} = this
        return `
        <img src="images/badge-like.png" alt="a like badge" class="like-badge hide" id="like-badge">
        <img src="images/badge-nope.png" alt="a nope badge" class="nope-badge hide" id="nope-badge">
        <img src="${avatar}" alt="image of a dog called teddy" class="profile-image">
        <div class="profile-text">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div> `
    }
}

export default Dog