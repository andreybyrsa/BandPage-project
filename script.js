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
    document.querySelector('.footer__2').style.display = 'none'

})

headerButton2.addEventListener('click', function() {
    headerButton1.classList.remove('opacity1')
    headerButton2.classList.remove('opacity2')

    headerButton2.classList.add('opacity1')
    headerButton1.classList.add('opacity2')

    document.querySelector('.music__card__2').style.display = 'none'
    document.querySelector('.music__card__1').style.display = 'block'
    document.querySelector('.footer__2').style.display = 'block'

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


// Button play/pause

let songs = []
let songsCounter = 0

let playButton = document.querySelector('.play__button')
let playIcon = document.querySelector('.play__icon')
let pauseButton = document.querySelector('.pause__button')
let pauseIcon = document.querySelector('.pause__icon')

let counter1 = 0
let counter2 = 0

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

    playButton.classList.remove('dark1')
    playButton.classList.add('light1')
    playIcon.classList.remove('dark2')
    playIcon.classList.add('light2')

})

pauseButton.addEventListener('click', function() {
    pauseButton.setAttribute('pause', document.getElementById('player').pause())
    playButton.removeAttribute('play')

    playButton.classList.remove('light1')
    playIcon.classList.remove('light2')

    if (counter1 > 0) {
        playIcon.classList.add('dark2')
        playButton.classList.add('dark1')
    }

    pauseButton.classList.remove('dark1')
    pauseButton.classList.add('light1')
    pauseIcon.classList.remove('dark2')
    pauseIcon.classList.add('light2')

    if (counter1 > 0) {
        counter2++
    }
})


// Song Buttons 

let block1 = document.querySelector('.block-1')
let block2 = document.querySelector('.block-2')
let block3 = document.querySelector('.block-3')
let block4 = document.querySelector('.block-4')
let block5 = document.querySelector('.block-5')
let block6 = document.querySelector('.block-6')
let block7 = document.querySelector('.block-7')
let block8 = document.querySelector('.block-8')
let block9 = document.querySelector('.block-9')
let block10 = document.querySelector('.block-10')

block1.addEventListener('click', function() {
    function removing() {
        block1.classList.remove('active')
    }

    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block1.setAttribute('replay', document.getElementById('player-1').load())
    block1.setAttribute('play', document.getElementById('player-1').play())

    songs.push({songBlock: block1, songPlayer: 'player-1'})

    block1.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})


block2.addEventListener('click', function() {
    function removing() {
        block2.classList.remove('active')
    }

    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block2.setAttribute('replay', document.getElementById('player-2').load())
    block2.setAttribute('play', document.getElementById('player-2').play())

    songs.push({songBlock: block2, songPlayer: 'player-2'})

    block2.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block3.addEventListener('click', function() {
    function removing() {
        block3.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block3.setAttribute('replay', document.getElementById('player-3').load())
    block3.setAttribute('play', document.getElementById('player-3').play())

    songs.push({songBlock: block3, songPlayer: 'player-3'})

    block3.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block4.addEventListener('click', function() {
    function removing() {
        block4.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block4.setAttribute('replay', document.getElementById('player-4').load())
    block4.setAttribute('play', document.getElementById('player-4').play())

    songs.push({songBlock: block4, songPlayer: 'player-4'})

    block4.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block5.addEventListener('click', function() {
    function removing() {
        block5.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block5.setAttribute('replay', document.getElementById('player-5').load())
    block5.setAttribute('play', document.getElementById('player-5').play())

    songs.push({songBlock: block5, songPlayer: 'player-5'})

    block5.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block6.addEventListener('click', function() {
    function removing() {
        block6.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block6.setAttribute('replay', document.getElementById('player-6').load())
    block6.setAttribute('play', document.getElementById('player-6').play())

    songs.push({songBlock: block6, songPlayer: 'player-6'})

    block6.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block7.addEventListener('click', function() {
    function removing() {
        block7.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block7.setAttribute('replay', document.getElementById('player-7').load())
    block7.setAttribute('play', document.getElementById('player-7').play())

    songs.push({songBlock: block7, songPlayer: 'player-7'})

    block7.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block8.addEventListener('click', function() {
    function removing() {
        block8.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block8.setAttribute('replay', document.getElementById('player-8').load())
    block8.setAttribute('play', document.getElementById('player-8').play())

    songs.push({songBlock: block8, songPlayer: 'player-8'})

    block8.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block9.addEventListener('click', function() {
    function removing() {
        block9.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block9.setAttribute('replay', document.getElementById('player-9').load())
    block9.setAttribute('play', document.getElementById('player-9').play())

    songs.push({songBlock: block9, songPlayer: 'player-9'})

    block9.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})

block10.addEventListener('click', function() {
    function removing() {
        block10.classList.remove('active')
    }
    
    if (songsCounter > 0) {
        songs[0].songBlock.setAttribute('pause', document.getElementById(songs[0].songPlayer).pause())
        songs.pop(songs[0])
    }

    if (counter1 == counter2 || counter2 > counter1) {
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

    block10.setAttribute('replay', document.getElementById('player-10').load())
    block10.setAttribute('play', document.getElementById('player-10').play())

    songs.push({songBlock: block10, songPlayer: 'player-10'})

    block10.classList.add('active')
    setTimeout(removing, 400)

    songsCounter++
})





