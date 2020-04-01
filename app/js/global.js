import {name} from './modules/test-module.js'

//Variables
const musicControlBtns = document.querySelectorAll('.pp-button');
const homeContentContainer = document.getElementById('home-content-container');
const searchContentContainer = document.getElementById('search-content-container');
const libraryContentContainer = document.getElementById('library-content-container');
const shuffleBtn = document.getElementById('shuffle-btn');


//Function definitions
let homeNavBtn = () => {
    document.getElementById('nav-home-btn').addEventListener('click', () => {
        homeContentContainer.style.display = 'block';
        searchContentContainer.style.display = 'none';
        libraryContentContainer.style.display = 'none';
    });
}

let searchNavBtn = () => {
    document.getElementById('nav-search-btn').addEventListener('click', () => {
        homeContentContainer.style.display = 'none';
        searchContentContainer.style.display = 'block';
        libraryContentContainer.style.display = 'none';
    });
}

let libraryNavBtn = () => {
    document.getElementById('nav-library-btn').addEventListener('click', () => {
        homeContentContainer.style.display = 'none';
        searchContentContainer.style.display = 'none';
        libraryContentContainer.style.display = 'block';
    });
}


let togglePlayBtn = () => {
    musicControlBtns.forEach(i => {
        i.addEventListener('click', () => {
            i.classList.toggle('pp-paused')
            return false;
        })
        
    });
}

let toggleShuffleBtn = () => {
    shuffleBtn.addEventListener('click', () => {
        shuffleBtn.classList.toggle('shuffle-btns-active');
    })
}



//Functions
let addListeners = () => {
    togglePlayBtn();
    homeNavBtn();
    searchNavBtn();
    libraryNavBtn();
    toggleShuffleBtn();

}


addListeners();