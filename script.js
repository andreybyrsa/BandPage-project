// Header

let headerButton1 = document.querySelector('.intro__text__1')
let headerButton2 = document.querySelector('.intro__text__2')

let headerCounter = 0

headerButton1.addEventListener('click', function() {

    if (headerCounter > 0) {
        headerButton2.classList.remove('opacity1')
        headerButton2.classList.add('opacity2')

        headerButton1.classList.remove('opacity2')
        headerButton1.classList.add('opacity1')
    }

    document.querySelector('.music__card__2').style.display = 'block'
    document.querySelector('.music__card__1').style.display = 'none'

})

headerButton2.addEventListener('click', function() {
    headerButton1.classList.remove('opacity1')
    headerButton2.classList.remove('opacity2')

    headerButton2.classList.add('opacity1')
    headerButton1.classList.add('opacity2')

    document.querySelector('.music__card__2').style.display = 'none'
    document.querySelector('.music__card__1').style.display = 'block'

    headerCounter++
})


// Sharing block

let shareButton = document.querySelector('.share__button')
let closeButton = document.querySelector('.close-icon')
let copyButton = document.querySelector('.copy__icon__button')

shareButton.addEventListener('click', function() {
    document.querySelector('.sharing__block').style.display = 'flex'
    document.querySelector('.sharing__block').classList.add('moving1')
})

closeButton.addEventListener('click', function() {

    function removeAnimation() {
        document.querySelector('.sharing__block').style.display = 'none'
        document.querySelector('.sharing__block').classList.remove('moving2')
    }

    document.querySelector('.sharing__block').classList.remove('moving1')
    document.querySelector('.sharing__block').classList.add('moving2')

    setTimeout(removeAnimation, 300)
})

copyButton.addEventListener('click', function() {
    let pageLink = document.querySelector('.pageLink')
    let range = document.createRange()
    range.selectNode(pageLink)
    window.getSelection().addRange(range)
    
    try {
        let successful = document.execCommand('copy')
        let msg = successful ? 'successful' : 'unsuccessful'
        console.log('Copy https command was ' + msg)
    } catch(err) {  
        console.log('no')
    }  
    window.getSelection().removeAllRanges()
});


// Share song

let iconButton1 = document.querySelector('.icon__block-1')
let iconButton2 = document.querySelector('.icon__block-2')
let iconButton3 = document.querySelector('.icon__block-3')
let iconButton4 = document.querySelector('.icon__block-4')
let iconButton5 = document.querySelector('.icon__block-5')
let iconButton6 = document.querySelector('.icon__block-6')
let iconButton7 = document.querySelector('.icon__block-7')
let iconButton8 = document.querySelector('.icon__block-8')
let iconButton9 = document.querySelector('.icon__block-9')
let iconButton10 = document.querySelector('.icon__block-10')

let closeBlock1 = document.querySelector('.close-block-1')
let closeBlock2 = document.querySelector('.close-block-2')
let closeBlock3 = document.querySelector('.close-block-3')
let closeBlock4 = document.querySelector('.close-block-4')
let closeBlock5 = document.querySelector('.close-block-5')
let closeBlock6 = document.querySelector('.close-block-6')
let closeBlock7 = document.querySelector('.close-block-7')
let closeBlock8 = document.querySelector('.close-block-8')
let closeBlock9 = document.querySelector('.close-block-9')
let closeBlock10 = document.querySelector('.close-block-10')

let shares = []

function deleteBlock() {
    if (shares.length > 0) {
        function reverseBlock() {
            shares[0].block.style.display = 'none'
            shares[0].block.classList.remove(shares[0].down)
            shares = []
        }
    
        shares[0].block.classList.remove(shares[0].up)
        shares[0].block.classList.add(shares[0].down)
    
        setTimeout(reverseBlock, 30)
    }
}

closeBlock1.addEventListener('click', function() {
    deleteBlock()
})

closeBlock2.addEventListener('click', function() {
    deleteBlock()
})

closeBlock3.addEventListener('click', function() {
    deleteBlock()
})

closeBlock4.addEventListener('click', function() {
    deleteBlock()
})

closeBlock5.addEventListener('click', function() {
    deleteBlock()
})

closeBlock6.addEventListener('click', function() {
    deleteBlock()
})

closeBlock7.addEventListener('click', function() {
    deleteBlock()
})

closeBlock8.addEventListener('click', function() {
    deleteBlock()
})

closeBlock9.addEventListener('click', function() {
    deleteBlock()
})

closeBlock10.addEventListener('click', function() {
    deleteBlock()
})


iconButton1.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-1').style.display = 'flex'
        document.querySelector('.share-1').classList.add('moveUp1')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-1'), up: 'moveUp1', down: 'moveReverse1'})
        }
    
        setTimeout(pushObject, 110)
    }
})

iconButton2.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-2').style.display = 'flex'
        document.querySelector('.share-2').classList.add('moveUp2')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-2'), up: 'moveUp2', down: 'moveReverse2'})
        }
    
        setTimeout(pushObject, 110)
    }
})

iconButton3.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-3').style.display = 'flex'
        document.querySelector('.share-3').classList.add('moveUp3')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-3'), up: 'moveUp3', down: 'moveReverse3'})
        }
    
        setTimeout(pushObject, 110)
    }
})

iconButton4.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-4').style.display = 'flex'
        document.querySelector('.share-4').classList.add('moveUp4')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-4'), up: 'moveUp4', down: 'moveReverse4'})
        }
    
        setTimeout(pushObject, 110)
    }
})

iconButton5.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-5').style.display = 'flex'
        document.querySelector('.share-5').classList.add('moveUp5')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-5'), up: 'moveUp5', down: 'moveReverse5'})
        }
    
        setTimeout(pushObject, 110)
    }

})

iconButton6.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-6').style.display = 'flex'
        document.querySelector('.share-6').classList.add('moveUp6')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-6'), up: 'moveUp6', down: 'moveReverse6'})
        }
    
        setTimeout(pushObject, 110)
    }
})

iconButton7.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-7').style.display = 'flex'
        document.querySelector('.share-7').classList.add('moveUp7')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-7'), up: 'moveUp7', down: 'moveReverse7'})
        }
    
        setTimeout(pushObject, 110)
    }

})

iconButton8.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-8').style.display = 'flex'
        document.querySelector('.share-8').classList.add('moveUp8')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-8'), up: 'moveUp8', down: 'moveReverse8'})
        }
    
        setTimeout(pushObject, 110)
    }

})

iconButton9.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-9').style.display = 'flex'
        document.querySelector('.share-9').classList.add('moveUp9')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-9'), up: 'moveUp9', down: 'moveReverse9'})
        }
    
        setTimeout(pushObject, 110)
    }

})

iconButton10.addEventListener('click', function() {

    if (shares.length > 0) {
        deleteBlock()
    } else {
        document.querySelector('.share-10').style.display = 'flex'
        document.querySelector('.share-10').classList.add('moveUp10')
    
        function pushObject() {
            shares.push({block: document.querySelector('.share-10'), up: 'moveUp10', down: 'moveReverse10'})
        }
    
        setTimeout(pushObject, 110)
    }

})


// Button play/pause

let songs = []
let songsCounter = 0

let playButton = document.querySelector('.play__button')
let playIcon = document.querySelector('.play__icon')
let pauseButton = document.querySelector('.pause__button')
let pauseIcon = document.querySelector('.pause__icon')

let counter1 = 0
let counter2 = 0

function addClass(buttonType, iconType) {
    buttonType.classList.remove('dark1')
    buttonType.classList.add('light1')
    iconType.classList.remove('dark2')
    iconType.classList.add('light2')
}

playButton.addEventListener('click', function() {
    counter1++

    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
        songsCounter = 0

        playButton.setAttribute('replay', document.getElementById('player').load())
    }

    if (counter1 - counter2 < 0) {
        counter2 = counter1 - 1
    }

    if (counter1 - counter2 > 1) {
        playButton.setAttribute('replay', document.getElementById('player').load())
        counter1--
    }
    
    playButton.setAttribute('play', document.getElementById('player').play())

    pauseButton.classList.remove('light1')
    pauseIcon.classList.remove('light2')

    if (counter2 > 0) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    addClass(playButton, playIcon)
})

let innerCounter = 0

pauseButton.addEventListener('click', function() {
    innerCounter++
    pauseButton.setAttribute('pause', document.getElementById('player').pause())
    playButton.removeAttribute('play')

    playButton.classList.remove('light1')
    playIcon.classList.remove('light2')

    if (counter1 > 0) {
        playIcon.classList.add('dark2')
        playButton.classList.add('dark1')
    }

    addClass(pauseButton, pauseIcon)

    if (counter1 > 0) {
        counter2++
    }
})


// Song Buttons 

let playBlock1 = document.querySelector('.play-block1')
let playBlock2 = document.querySelector('.play-block2')
let playBlock3 = document.querySelector('.play-block3')
let playBlock4 = document.querySelector('.play-block4')
let playBlock5 = document.querySelector('.play-block5')
let playBlock6 = document.querySelector('.play-block6')
let playBlock7 = document.querySelector('.play-block7')
let playBlock8 = document.querySelector('.play-block8')
let playBlock9 = document.querySelector('.play-block9')
let playBlock10 = document.querySelector('.play-block10')

let learnBlock = document.querySelector('.block-11')

playBlock1.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-1').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }

    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
        innerCounter = 0
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock1.setAttribute('replay', document.getElementById('player-1').load())
    playBlock1.setAttribute('play', document.getElementById('player-1').play())

    songs.push({songBlock: playBlock1, songPlayer: 'player-1'})

    document.querySelector('.block-1').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})


playBlock2.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-2').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }

    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock2.setAttribute('replay', document.getElementById('player-2').load())
    playBlock2.setAttribute('play', document.getElementById('player-2').play())

    songs.push({songBlock: playBlock2, songPlayer: 'player-2'})

    document.querySelector('.block-2').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock3.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-3').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock3.setAttribute('replay', document.getElementById('player-3').load())
    playBlock3.setAttribute('play', document.getElementById('player-3').play())

    songs.push({songBlock: playBlock3, songPlayer: 'player-3'})

    document.querySelector('.block-3').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock4.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-4').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock4.setAttribute('replay', document.getElementById('player-4').load())
    playBlock4.setAttribute('play', document.getElementById('player-4').play())

    songs.push({songBlock: playBlock4, songPlayer: 'player-4'})

    document.querySelector('.block-4').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock5.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-5').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock5.setAttribute('replay', document.getElementById('player-5').load())
    playBlock5.setAttribute('play', document.getElementById('player-5').play())

    songs.push({songBlock: playBlock5, songPlayer: 'player-5'})

    document.querySelector('.block-5').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock6.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-6').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock6.setAttribute('replay', document.getElementById('player-6').load())
    playBlock6.setAttribute('play', document.getElementById('player-6').play())

    songs.push({songBlock: playBlock6, songPlayer: 'player-6'})

    document.querySelector('.block-6').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock7.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-7').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock7.setAttribute('replay', document.getElementById('player-7').load())
    playBlock7.setAttribute('play', document.getElementById('player-7').play())

    songs.push({songBlock: playBlock7, songPlayer: 'player-7'})

    document.querySelector('.block-7').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock8.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-8').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock8.setAttribute('replay', document.getElementById('player-8').load())
    playBlock8.setAttribute('play', document.getElementById('player-8').play())

    songs.push({songBlock: playBlock8, songPlayer: 'player-8'})

    document.querySelector('.block-8').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock9.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-9').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock9.setAttribute('replay', document.getElementById('player-9').load())
    playBlock9.setAttribute('play', document.getElementById('player-9').play())

    songs.push({songBlock: playBlock9, songPlayer: 'player-9'})

    document.querySelector('.block-9').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

playBlock10.addEventListener('click', function() {
    function removing() {
        document.querySelector('.block-10').classList.remove('active')
    }

    if (shares.length > 0) {
        deleteBlock()
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter2 > counter1 || (counter1 == counter2 & counter1 > 0) || (innerCounter > 0 & counter1 == 0)) {
        pauseButton.classList.add('dark1')
        pauseIcon.classList.add('dark2')
    }

    if (counter1 - counter2 > 0) {
        pauseButton.setAttribute('pause', document.getElementById('player').pause())
        playButton.setAttribute('replay', document.getElementById('player').load())
        playButton.removeAttribute('play')

        playButton.classList.add('dark1')
        playIcon.classList.add('dark2')

        counter1 = 0
        counter2 = 0
    }

    playBlock10.setAttribute('replay', document.getElementById('player-10').load())
    playBlock10.setAttribute('play', document.getElementById('player-10').play())

    songs.push({songBlock: playBlock10, songPlayer: 'player-10'})

    document.querySelector('.block-10').classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

learnBlock.addEventListener('click', function() {
    if (shares.length > 0) {
        deleteBlock()
    }
})