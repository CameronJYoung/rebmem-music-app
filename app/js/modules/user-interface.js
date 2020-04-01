const UserInterface = (function UserInterface() {
    let homeNavBtn = (homeContainer,searchContainer,libraryContainer) => {
        document.getElementById('nav-home-btn').addEventListener('click', () => {
            homeContainer.style.display = 'block';
            searchContainer.style.display = 'none';
            libraryContainer.style.display = 'none';
        });
    }
    
    let searchNavBtn = (homeContainer,searchContainer,libraryContainer) => {
        document.getElementById('nav-search-btn').addEventListener('click', () => {
            homeContainer.style.display = 'none';
            searchContainer.style.display = 'block';
            libraryContainer.style.display = 'none';
        });
    }
    
    let libraryNavBtn = (homeContainer,searchContainer,libraryContainer) => {
        document.getElementById('nav-library-btn').addEventListener('click', () => {
            homeContainer.style.display = 'none';
            searchContainer.style.display = 'none';
            libraryContainer.style.display = 'block';
        });
    }
    
    
    let togglePlayBtn = (musicControlButtons) => {
        musicControlButtons.forEach(i => {
            i.addEventListener('click', () => {
                i.classList.toggle('pp-paused')
                return false;
            })
            
        });
    }
    
    let toggleShuffleBtn = (shuffleButton) => {
        shuffleButton.addEventListener('click', () => {
            shuffleButton.classList.toggle('shuffle-btns-active');
        })
    }


    return {
        homeNavBtn,
        searchNavBtn,
        libraryNavBtn,
        togglePlayBtn,
        toggleShuffleBtn
    }
})

export default UserInterface();