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

async function getNewGif(query) {
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=K2ukBACxDp2KQKgF8jHr5r9VK2um5kgh&s=${query}`, {mode: 'cors'})
    const data = await response.json();
    img.src = data.data.images.original.url;
}

getNewGif('cats');
