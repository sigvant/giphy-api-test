const img = document.querySelector('img');
const newGifButton = document.querySelector('.get-new-gif');
const searchGifInput = document.querySelector('.search-input');

newGifButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(searchGifInput.value === '') return;
    else {
        getNewGif(searchGifInput.value);
    }
});

function getNewGif(query) {
    console.log(searchGifInput.value)

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=K2ukBACxDp2KQKgF8jHr5r9VK2um5kgh&s=${query}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
}

getNewGif('cats');
