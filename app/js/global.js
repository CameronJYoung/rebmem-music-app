//Imports
import UserInterface from './modules/user-interface.js';

//Variables
const musicControlBtns = document.querySelectorAll('.pp-button');
const homeContentContainer = document.getElementById('home-content-container');
const searchContentContainer = document.getElementById('search-content-container');
const libraryContentContainer = document.getElementById('library-content-container');
const shuffleBtn = document.getElementById('shuffle-btn');

//Functions
let addListeners = () => {
    UserInterface.togglePlayBtn(musicControlBtns);
    UserInterface.homeNavBtn(homeContentContainer,searchContentContainer,libraryContentContainer);
    UserInterface.searchNavBtn(homeContentContainer,searchContentContainer,libraryContentContainer);
    UserInterface.libraryNavBtn(homeContentContainer,searchContentContainer,libraryContentContainer);
    UserInterface.toggleShuffleBtn(shuffleBtn);

    
}


addListeners();