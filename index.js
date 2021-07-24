const pianoKey = document.querySelectorAll('.piano-key'),
      piano = document.querySelector('.piano'),
      notes = document.querySelector('.btn-notes'),
      letters = document.querySelector('.btn-letters'),
      fullscreen = document.querySelector('.fullscreen'),
      names = 'c d e f g a b cc dd . ff gg aa'.split(' ');
let prev = '',
    activete = 0;

fullscreen.addEventListener('click', (event) => {
  event.preventDefault();
  
  toggleFullScreen();

  fullscreen.classList.toggle('openfullscreen');
  fullscreen.classList.toggle('exitfullscreen');
});


function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.querySelector('body').requestFullscreen();
      fullscreen.classList.toggle('openfullscreen');
      fullscreen.classList.toggle('exitfullscreen');
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fullscreen.classList.toggle('openfullscreen');
      fullscreen.classList.toggle('exitfullscreen');
    }
  }
}

letters.addEventListener('click', (event) => {
  event.preventDefault();

  notes.classList.remove('btn-active');
  letters.classList.add('btn-active');
  pianoKey.forEach(item => {
    item.classList.add('clicked');
  });
});

notes.addEventListener('click', (event) => {
  event.preventDefault();

  letters.classList.remove('btn-active');
  notes.classList.add('btn-active');
  pianoKey.forEach(item => {
    item.classList.remove('clicked');
  });
});


pianoKey.forEach((item, i) => {
  item.addEventListener('mousedown', (event) => {
    item.classList.add('piano-key-active');
    pioNino(names[i]);
    activete = 1;
  });

  item.addEventListener('mouseover', (event) => {
    if(activete == 1) {
      item.classList.add('piano-key-active');
      pioNino(names[i]);
    }
  });

  item.addEventListener('mouseup', (event) => {
    item.classList.remove('piano-key-active');
    activete = 0;
  });

  item.addEventListener('mouseout', (event) => {
    item.classList.remove('piano-key-active');
  });
});

piano.addEventListener('mouseout', (event) => {
  document.addEventListener('mouseup', (event) => {
    activete = 0;
  })
})




function allItem() {
  pianoKey.forEach((item, i) => {
    item.addEventListener('mouseover', (event) => {
      item.classList.add('piano-key-active');
      switch(i) {
        
        case 0:
          pioNino('c');
          break;
        case 1:
          pioNino('d');
          break;
        case 2:
          pioNino('e');
          break;
        case 3:
          pioNino('f');
          break;
        case 4: 
          pioNino('g');
          break;
        case 5: 
          pioNino('a');
          break;
        case 6: 
          pioNino('b');
        case 7:
          pioNino('cc');
          break;
        case 8: 
          pioNino('dd');
          break;
        case 10: 
          pioNino('ff');
          break;
        case 11:
          pioNino('gg');
          break;
        case 12: 
          pioNino('aa');
          break;
      }


    });

    item.addEventListener('mouseup', (event) => {
      item.classList.remove('piano-key-active');
    });
  });
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  
  switch(event.key.toLowerCase()) {
    case "k": 
      activeKlav('a', 5);
      prev = 'a';
      break;
    case "l":
      activeKlav('b', 6);
      prev = 'b';
      break;
    case "d":
      activeKlav('c', 0);
      prev = 'c';
      break;
    case "f":
      activeKlav('d', 1);
      prev = 'd';
      break;
    case "g":
      activeKlav('e', 2);
      prev = 'e';
      break;
    case 'h':
      activeKlav('f', 3);
      prev = 'f';
      break;
    case 'j':
      activeKlav('g', 4);
      prev = 'g';
      break;
    case 'r':
      activeKlav('aa', 7);
      prev = 'aa';
      break;
    case 't':
      activeKlav('cc', 8);
      prev = 'cc';
      break;
    case 'u':
      activeKlav('dd', 10);
      prev = 'dd';
      break;
    case 'i':
      activeKlav('ff', 11);
      prev = 'ff';
      break;
    case 'o':
      activeKlav('gg', 12);
      prev = 'gg';
      break;


    case "л": 
      activeKlav('a', 5);
      prev = 'a';
      break;
    case "д":
      activeKlav('b', 6);
      prev = 'b';
      break;
    case "в":
      activeKlav('c', 0);
      prev = 'c';
      break;
    case "а":
      activeKlav('d', 1);
      prev = 'd';
      break;
    case "п":
      activeKlav('e', 2);
      prev = 'e';
      break;
    case 'р':
      activeKlav('f', 3);
      prev = 'f';
      break;
    case 'о':
      activeKlav('g', 4);
      prev = 'g';
      break;
    case 'к':
      activeKlav('aa', 7);
      prev = 'aa';
      break;
    case 'е':
      activeKlav('cc', 8);
      prev = 'cc';
      break;
    case 'г':
      activeKlav('dd', 10);
      prev = 'dd';
      break;
    case 'ш':
      activeKlav('ff', 11);
      prev = 'ff';
      break;
    case 'щ':
      activeKlav('gg', 12);
      prev = 'gg';
      break;
  }
});

function letterActive(num) {
  pianoKey[num].classList.add('piano-key-active');
}

document.addEventListener('keyup', (event) => {
  event.preventDefault();

  prev = '';
  pianoKey.forEach(item => {
    if (item.classList.contains('piano-key-active') == true) {
      item.classList.remove('piano-key-active');
    }
  });
});

function pioNino(name) {
  const audio = document.createElement('audio');
        audio.setAttribute("autoplay","true");
        audio.innerHTML = `<source src='assets/audio/${name}.mp3' type=\"audio/mpeg\">`;
        document.body.appendChild(audio);
}

function activeKlav(item, index) {
  if(item != prev) {
    pioNino(item);
    letterActive(index);
  }
}
