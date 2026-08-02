const keyboardLayout = [
  // Row 1
  [{code: 'Backquote', en: '`', enShift: '~', ka: '`', kaShift: '~', finger: 'lp'},
   {code: 'Digit1', en: '1', enShift: '!', ka: '1', kaShift: '!', finger: 'lp'},
   {code: 'Digit2', en: '2', enShift: '@', ka: '2', kaShift: '@', finger: 'lr'},
   {code: 'Digit3', en: '3', enShift: '#', ka: '3', kaShift: '#', finger: 'lm'},
   {code: 'Digit4', en: '4', enShift: '$', ka: '4', kaShift: '$', finger: 'li'},
   {code: 'Digit5', en: '5', enShift: '%', ka: '5', kaShift: '%', finger: 'li'},
   {code: 'Digit6', en: '6', enShift: '^', ka: '6', kaShift: '^', finger: 'ri'},
   {code: 'Digit7', en: '7', enShift: '&', ka: '7', kaShift: '&', finger: 'ri'},
   {code: 'Digit8', en: '8', enShift: '*', ka: '8', kaShift: '*', finger: 'rm'},
   {code: 'Digit9', en: '9', enShift: '(', ka: '9', kaShift: '(', finger: 'rr'},
   {code: 'Digit0', en: '0', enShift: ')', ka: '0', kaShift: ')', finger: 'rp'},
   {code: 'Minus', en: '-', enShift: '_', ka: '-', kaShift: '_', finger: 'rp'},
   {code: 'Equal', en: '=', enShift: '+', ka: '=', kaShift: '+', finger: 'rp'},
   {code: 'Backspace', display: 'Backspace', width: 'wide-2', finger: 'rp'}],
  // Row 2
  [{code: 'Tab', display: 'Tab', width: 'wide-1-5', finger: 'lp'},
   {code: 'KeyQ', en: 'q', enShift: 'Q', ka: 'ქ', finger: 'lp'},
   {code: 'KeyW', en: 'w', enShift: 'W', ka: 'წ', kaShift: 'ჭ', finger: 'lr'},
   {code: 'KeyE', en: 'e', enShift: 'E', ka: 'ე', finger: 'lm'},
   {code: 'KeyR', en: 'r', enShift: 'R', ka: 'რ', kaShift: 'ღ', finger: 'li'},
   {code: 'KeyT', en: 't', enShift: 'T', ka: 'ტ', kaShift: 'თ', finger: 'li'},
   {code: 'KeyY', en: 'y', enShift: 'Y', ka: 'ყ', finger: 'ri'},
   {code: 'KeyU', en: 'u', enShift: 'U', ka: 'უ', finger: 'ri'},
   {code: 'KeyI', en: 'i', enShift: 'I', ka: 'ი', finger: 'rm'},
   {code: 'KeyO', en: 'o', enShift: 'O', ka: 'ო', finger: 'rr'},
   {code: 'KeyP', en: 'p', enShift: 'P', ka: 'პ', finger: 'rp'},
   {code: 'BracketLeft', en: '[', enShift: '{', ka: '[', kaShift: '{', finger: 'rp'},
   {code: 'BracketRight', en: ']', enShift: '}', ka: ']', kaShift: '}', finger: 'rp'},
   {code: 'Backslash', en: '\\', enShift: '|', ka: '\\', kaShift: '|', width: 'wide-1-5', finger: 'rp'}],
  // Row 3
  [{code: 'CapsLock', display: 'Caps', width: 'wide-2', finger: 'lp'},
   {code: 'KeyA', en: 'a', enShift: 'A', ka: 'ა', finger: 'lp'},
   {code: 'KeyS', en: 's', enShift: 'S', ka: 'ს', kaShift: 'შ', finger: 'lr'},
   {code: 'KeyD', en: 'd', enShift: 'D', ka: 'დ', finger: 'lm'},
   {code: 'KeyF', en: 'f', enShift: 'F', ka: 'ფ', finger: 'li'},
   {code: 'KeyG', en: 'g', enShift: 'G', ka: 'გ', finger: 'li'},
   {code: 'KeyH', en: 'h', enShift: 'H', ka: 'ჰ', finger: 'ri'},
   {code: 'KeyJ', en: 'j', enShift: 'J', ka: 'ჯ', kaShift: 'ჟ', finger: 'ri'},
   {code: 'KeyK', en: 'k', enShift: 'K', ka: 'კ', finger: 'rm'},
   {code: 'KeyL', en: 'l', enShift: 'L', ka: 'ლ', finger: 'rr'},
   {code: 'Semicolon', en: ';', enShift: ':', ka: ';', kaShift: ':', finger: 'rp'},
   {code: 'Quote', en: "'", enShift: '"', ka: "'", kaShift: '"', finger: 'rp'},
   {code: 'Enter', display: 'Enter', width: 'wide-2', finger: 'rp'}],
  // Row 4
  [{code: 'ShiftLeft', display: 'Shift', width: 'wide-2-5', finger: 'lp'},
   {code: 'KeyZ', en: 'z', enShift: 'Z', ka: 'ზ', kaShift: 'ძ', finger: 'lp'},
   {code: 'KeyX', en: 'x', enShift: 'X', ka: 'ხ', finger: 'lr'},
   {code: 'KeyC', en: 'c', enShift: 'C', ka: 'ც', kaShift: 'ჩ', finger: 'lm'},
   {code: 'KeyV', en: 'v', enShift: 'V', ka: 'ვ', finger: 'li'},
   {code: 'KeyB', en: 'b', enShift: 'B', ka: 'ბ', finger: 'li'},
   {code: 'KeyN', en: 'n', enShift: 'N', ka: 'ნ', finger: 'ri'},
   {code: 'KeyM', en: 'm', enShift: 'M', ka: 'მ', finger: 'ri'},
   {code: 'Comma', en: ',', enShift: '<', ka: ',', kaShift: '<', finger: 'rm'},
   {code: 'Period', en: '.', enShift: '>', ka: '.', kaShift: '>', finger: 'rr'},
   {code: 'Slash', en: '/', enShift: '?', ka: '/', kaShift: '?', finger: 'rp'},
   {code: 'ShiftRight', display: 'Shift', width: 'wide-2-5', finger: 'rp'}],
  // Row 5
  [{code: 'Space', display: 'Space', en: ' ', ka: ' ', width: 'spacebar', finger: 'thumb'}]
];

const levels = {
  ka: [
    { name: 'ეტაპი 1: ასოები', data: ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'] },
    { name: 'ეტაპი 2: სიტყვები', categories: {
        mixed: ['სკოლა', 'წიგნი', 'ბურთი', 'მასწავლებელი', 'მზე', 'მთვარე', 'ცოდნა', 'კომპიუტერი', 'კლავიატურა', 'საქართველო', 'თბილისი', 'მეგობარი', 'მოსწავლე', 'გაკვეთილი', 'მუსიკა', 'ისტორია'],
        animals: ['ძაღლი', 'კატა', 'დათვი', 'მგელი', 'მელა', 'კურდღელი', 'ლომი', 'ვეფხვი', 'სპილო', 'ჟირაფი', 'მაიმუნი', 'ცხენი', 'ძროხა'],
        colors: ['წითელი', 'ლურჯი', 'მწვანე', 'ყვითელი', 'შავი', 'თეთრი', 'ნარინჯისფერი', 'იისფერი', 'ვარდისფერი', 'ყავისფერი', 'რუხი'],
        school: ['სკოლა', 'წიგნი', 'რვეული', 'კალამი', 'ფანქარი', 'ჩანთა', 'დაფა', 'მასწავლებელი', 'მოსწავლე', 'მერხი', 'საშლელი', 'სახაზავი']
      } 
    },
    { name: 'ეტაპი 3: ტექსტები', data: [
      'მე ვსწავლობ ბეჭდვას ათი თითით. ეს ძალიან სახალისოა!',
      'კლავიატურაზე მუშაობა ძალიან საინტერესოა, თუ სწორად იყენებ თითებს.',
      'სწრაფი ბეჭდვა დროის დაზოგვის საუკეთესო საშუალებაა თანამედროვე სამყაროში.',
      'ინტერნეტი და ტექნოლოგიები გვეხმარება ახალი ცოდნის მიღებაში.',
      'რობოტი გიგა ჩემი საუკეთესო მეგობარია და ის ყოველთვის მეხმარება.',
      'სკოლაში ბევრი ახალი და საინტერესო საგანი ვისწავლე დღეს.',
      'მზე ანათებს, ჩიტები გალობენ და ეზოში ბავშვები თამაშობენ.',
      'წიგნების კითხვა ავითარებს ფანტაზიას და აფართოებს თვალსაწიერს.',
      'ჯანსაღი კვება და ვარჯიში აუცილებელია ძლიერი ორგანიზმისთვის.',
      'ჩემი ოცნებაა გავხდე პროგრამისტი და შევქმნა მაგარი თამაშები.'
    ] },
    { name: 'ეტაპი 7: ციფრები და სიმბოლოები', data: ['123!', '?.,', '(10)', '45-67', '@email', '100%', 'A+B=C', '"hello"', '5*5=25', '#tag'] }
  ],
  en: [
    { name: 'Stage 1: Letters', data: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] },
    { name: 'Stage 2: Words', categories: {
        mixed: ['school', 'book', 'ball', 'teacher', 'sun', 'moon', 'knowledge', 'computer', 'keyboard', 'friend', 'student', 'lesson', 'music', 'history', 'georgia', 'tbilisi'],
        animals: ['dog', 'cat', 'bear', 'wolf', 'fox', 'rabbit', 'lion', 'tiger', 'elephant', 'giraffe', 'monkey', 'horse', 'cow'],
        colors: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange', 'purple', 'pink', 'brown', 'grey'],
        school: ['school', 'book', 'notebook', 'pen', 'pencil', 'bag', 'board', 'teacher', 'student', 'desk', 'eraser', 'ruler']
      } 
    },
    { name: 'Stage 3: Texts', data: [
      'I am learning to type with ten fingers. It is very fun!',
      'Working on the keyboard is very interesting if you use your fingers correctly.',
      'Fast typing is the best way to save time in the modern world.',
      'The internet and technologies help us gain new knowledge.',
      'Giga the robot is my best friend and always helps me learn.',
      'I learned many new and interesting subjects at school today.',
      'The sun is shining, birds are singing, and children are playing.',
      'Reading books develops imagination and broadens the mind.',
      'Healthy food and exercise are essential for a strong body.',
      'My dream is to become a programmer and create awesome games.'
    ] },
    { name: 'Stage 7: Numbers & Symbols', data: ['123!', '?.,', '(10)', '45-67', '@email', '100%', 'A+B=C', '"hello"', '5*5=25', '#tag'] }
  ]
};

let currentLang = 'ka';
let currentLevel = 0;
let targetText = '';
let currentIndex = 0;
let errors = 0;
let totalTyped = 0;
let startTime = null;
let timerInterval = null;
let audioCtx = null;
let timeLeftValue = 60;
let isTimeUp = false;
let dictationWordsCount = 0;

// Audio generation
function playSound(type) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  if (type === 'correct') {
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  } else if (type === 'wrong') {
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.15);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.15);
  }
}

function generateText(lang, levelIndex) {
  let arrayIndex = levelIndex;
  if (levelIndex === 6) arrayIndex = 3;
  const level = levels[lang][arrayIndex];
  
  if (levelIndex === 0) { // Letters
    let res = [];
    for(let i=0; i<6; i++) {
      let chunk = "";
      for(let j=0; j<4; j++) {
        chunk += level.data[Math.floor(Math.random() * level.data.length)];
      }
      res.push(chunk);
    }
    return res.join(' ');
  } else if (levelIndex === 1) { // Words
    const cat = document.getElementById('categorySelect').value;
    const wordList = level.categories[cat] || level.categories.mixed;
    
    if (currentLevel === 5) {
      return wordList[Math.floor(Math.random() * wordList.length)];
    }
    
    let res = [];
    for(let i=0; i<10; i++) {
      res.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }
    return res.join(' ');
  } else if (levelIndex === 6) { // Symbols
    let res = [];
    for(let i=0; i<8; i++) {
      res.push(level.data[Math.floor(Math.random() * level.data.length)]);
    }
    return res.join(' ');
  } else { // Texts
    return level.data[Math.floor(Math.random() * level.data.length)];
  }
}

let virtualShift = false;

function handleVirtualKeyClick(e) {
  const keyEl = e.target.closest('.key');
  if (!keyEl) return;
  
  const code = keyEl.id;
  
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    virtualShift = !virtualShift;
    document.getElementById('ShiftLeft').classList.toggle('active', virtualShift);
    document.getElementById('ShiftRight').classList.toggle('active', virtualShift);
    return;
  }
  
  keyEl.classList.add('active');
  setTimeout(() => { keyEl.classList.remove('active'); }, 150);
  
  const event = new KeyboardEvent('keydown', {
    code: code,
    key: '',
    shiftKey: virtualShift,
    bubbles: true
  });
  document.dispatchEvent(event);
  
  if (virtualShift) {
    virtualShift = false;
    const sl = document.getElementById('ShiftLeft');
    const sr = document.getElementById('ShiftRight');
    if(sl) sl.classList.remove('active');
    if(sr) sr.classList.remove('active');
  }
}

function renderKeyboard() {
  const kb = document.getElementById('keyboard');
  kb.innerHTML = '';
  
  keyboardLayout.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'row';
    
    row.forEach(key => {
      const keyEl = document.createElement('div');
      keyEl.className = `key ${key.finger} ${key.width ? key.width.replace('.', '-') : ''}`;
      keyEl.id = key.code;
      
      if (key.display !== undefined) {
         keyEl.innerHTML = `<div class="main-char" style="font-size:1em;">${key.display}</div>`;
      } else {
         let shiftHtml = key.kaShift ? `<div class="shift-char">⇧${key.kaShift}</div>` : '';
         let mainHtml = `<div class="main-char">${key.ka || ''}</div>`;
         let enHtml = `<div class="en-char">${key.en || ''}</div>`;
         
         keyEl.innerHTML = shiftHtml + mainHtml + enHtml;
      }
      rowEl.appendChild(keyEl);
    });
    kb.appendChild(rowEl);
  });
  
  kb.addEventListener('mousedown', (e) => { e.preventDefault(); handleVirtualKeyClick(e); });
  kb.addEventListener('touchstart', (e) => { e.preventDefault(); handleVirtualKeyClick(e); }, {passive: false});
}

function highlightNextKey() {
  document.querySelectorAll('.key.highlight, .finger.active, .key.shift-highlight').forEach(el => {
    el.classList.remove('highlight', 'active', 'shift-highlight');
  });
  
  const gigaTooltip = document.getElementById('gigaTooltip');
  if (gigaTooltip) gigaTooltip.classList.remove('show');
  
  if (currentIndex >= targetText.length) return;
  const char = targetText[currentIndex];
  
  let targetKey = null;
  let needsShift = false;
  
  for (let row of keyboardLayout) {
    for (let key of row) {
      if (currentLang === 'ka') {
        if (key.ka === char || key.kaShift === char || (key.en === char)) {
          targetKey = key;
          if (key.kaShift === char) needsShift = true;
          break;
        }
      } else {
        if (key.en === char || key.enShift === char || (key.en && key.en.toUpperCase() === char)) {
          targetKey = key;
          if (key.enShift === char || (key.en && key.en.toUpperCase() === char && char.toUpperCase() !== char.toLowerCase())) needsShift = true;
          break;
        }
      }
    }
    if (targetKey) break;
  }
  
  if (targetKey) {
    const keyEl = document.getElementById(targetKey.code);
    if (keyEl) keyEl.classList.add('highlight');
    
    if (targetKey.finger) {
      if (targetKey.finger === 'thumb') {
         document.getElementById('finger-l-thumb').classList.add('active');
         document.getElementById('finger-r-thumb').classList.add('active');
      } else {
         const fingerEl = document.getElementById(`finger-${targetKey.finger}`);
         if (fingerEl) fingerEl.classList.add('active');
      }
    }
    
    if (needsShift) {
      let shiftCode = 'ShiftLeft';
      let shiftFinger = 'lp';
      if (['lp', 'lr', 'lm', 'li'].includes(targetKey.finger)) {
        shiftCode = 'ShiftRight';
        shiftFinger = 'rp';
      }
      const shiftEl = document.getElementById(shiftCode);
      if (shiftEl) {
        shiftEl.classList.add('highlight');
        if (currentLevel === 6) shiftEl.classList.add('shift-highlight');
      }
      const sFinger = document.getElementById(`finger-${shiftFinger}`);
      if (sFinger) sFinger.classList.add('active');
      
      if (currentLevel === 6 && gigaTooltip) {
        gigaTooltip.classList.add('show');
      }
    }
  }
}

function getTypedChar(e, lang) {
  let mappedChar = e.key; 
  const shift = e.shiftKey;
  
  for (let row of keyboardLayout) {
    for (let key of row) {
      if (key.code === e.code) {
        if (lang === 'ka') {
          mappedChar = (shift && key.kaShift) ? key.kaShift : (key.ka || key.en || '');
        } else {
          mappedChar = (shift && key.enShift) ? key.enShift : (key.en || '');
        }
        break;
      }
    }
  }
  return mappedChar;
}

function updateStats() {
  const now = new Date();
  
  if (startTime && currentLevel !== 3) {
    const elapsedSeconds = Math.floor((now - startTime) / 1000);
    timeLeftValue = 60 - elapsedSeconds;
    
    if (timeLeftValue <= 0) {
      timeLeftValue = 0;
      document.getElementById('timeLeft').innerText = 0;
      clearInterval(timerInterval);
      if (!isTimeUp) {
        isTimeUp = true;
        showModal(true);
      }
    } else {
      document.getElementById('timeLeft').innerText = timeLeftValue;
    }
  } else {
    document.getElementById('timeLeft').innerText = 60;
  }
  
  let timeDiff = startTime ? (now - startTime) / 1000 / 60 : 0.01;
  if (timeLeftValue <= 0 && startTime) timeDiff = 1.0;
  if (timeDiff === 0) timeDiff = 0.01;
  
  const wordsTyped = totalTyped / 5;
  const wpm = Math.round(wordsTyped / timeDiff);
  const accuracy = totalTyped === 0 ? 100 : Math.round(((totalTyped - errors) / totalTyped) * 100);
  
  document.getElementById('wpm').innerText = wpm > 0 ? wpm : 0;
  document.getElementById('accuracy').innerText = Math.max(0, accuracy);
  document.getElementById('score').innerText = Math.max(0, (totalTyped * 10) - (errors * 20));
}

function showModal(timeout = false) {
  const acc = totalTyped === 0 ? 100 : Math.round(((totalTyped - errors) / totalTyped) * 100);
  const now = new Date();
  let elapsed = startTime ? (now - startTime) / 1000 : 0;
  if (timeout) elapsed = 60;
  let timeDiff = elapsed / 60;
  if (timeDiff === 0) timeDiff = 0.01;
  const wpm = Math.round((totalTyped / 5) / timeDiff);
  
  document.getElementById('modalWpm').innerText = wpm;
  document.getElementById('modalAccuracy').innerText = acc;
  
  let stars = '⭐';
  if (acc >= 90) stars = '⭐⭐';
  if (acc >= 95 && wpm > 15) stars = '⭐⭐⭐';
  document.getElementById('modalStars').innerText = stars;
  
  if (timeout) {
    document.getElementById('resultTitle').innerText = 'დრო ამოიწურა!';
  } else {
    document.getElementById('resultTitle').innerText = 'გილოცავთ! Level Complete!';
  }
  
  document.getElementById('resultModal').classList.add('show');
}

function triggerGigaCorrect() {
  const giga = document.getElementById('gigaContainer');
  if (!giga) return;
  giga.classList.remove('dance', 'shake-head');
  void giga.offsetWidth; // trigger reflow
  giga.classList.add('dance');
  
  // Star particle
  const star = document.createElement('div');
  star.className = 'giga-star';
  star.innerText = '⭐';
  const tx = (Math.random() - 0.5) * 150;
  const ty = -50 - Math.random() * 50;
  star.style.setProperty('--tx', `${tx}px`);
  star.style.setProperty('--ty', `${ty}px`);
  
  document.getElementById('starsContainer').appendChild(star);
  setTimeout(() => star.remove(), 600);
}

function triggerGigaWrong() {
  const giga = document.getElementById('gigaContainer');
  if (!giga) return;
  giga.classList.remove('dance', 'shake-head');
  void giga.offsetWidth;
  giga.classList.add('shake-head');
}

function startLevel() {
  clearInterval(timerInterval);
  startTime = null;
  errors = 0;
  totalTyped = 0;
  currentIndex = 0;
  timeLeftValue = 60;
  isTimeUp = false;
  dictationWordsCount = 0;
  document.getElementById('timeLeft').innerText = '60';
  
  currentLevel = parseInt(document.getElementById('levelSelect').value);
  
  if (currentLevel === 5) {
    document.getElementById('langSelect').value = 'en';
  }
  
  currentLang = document.getElementById('langSelect').value;
  document.body.setAttribute('data-lang', currentLang);
  
  if (currentLevel === 1 || currentLevel === 4 || currentLevel === 5) {
    document.getElementById('categorySelect').style.display = 'inline-block';
  } else {
    document.getElementById('categorySelect').style.display = 'none';
  }
  
  if (currentLevel === 5) {
    document.getElementById('dictationBtn').style.display = 'block';
    document.body.classList.add('level-5');
  } else {
    document.getElementById('dictationBtn').style.display = 'none';
    document.body.classList.remove('level-5');
  }
  
  if (currentLevel === 3) {
    document.body.classList.add('level-4');
    document.getElementById('textDisplay').style.display = 'none';
    document.getElementById('freeTypingContainer').style.display = 'flex';
    document.getElementById('freeTypingArea').value = '';
    document.querySelectorAll('.key.highlight, .finger.active').forEach(el => {
      el.classList.remove('highlight', 'active');
    });
    document.getElementById('freeTypingArea').focus();
    return;
  } else {
    document.body.classList.remove('level-4');
    document.getElementById('textDisplay').style.display = 'block';
    document.getElementById('freeTypingContainer').style.display = 'none';
  }

  if (currentLevel === 4 || currentLevel === 5) {
    targetText = generateText(currentLang, 1);
  } else if (currentLevel !== 3) {
    targetText = generateText(currentLang, currentLevel);
  }

  updateStats();
  
  const display = document.getElementById('textDisplay');
  display.innerHTML = '';
  
  if (currentLevel === 4) {
    const words = targetText.split(' ');
    let cIndex = 0;
    let missingIndices = [];
    for (let w of words) {
      if (w.length > 0) {
        let r = Math.floor(Math.random() * w.length);
        missingIndices.push(cIndex + r);
      }
      cIndex += w.length + 1;
    }
    
    let firstMissing = -1;
    for (let i = 0; i < targetText.length; i++) {
      const span = document.createElement('span');
      span.className = 'char';
      span.id = `char-${i}`;
      if (missingIndices.includes(i)) {
        span.innerText = '_';
        if (firstMissing === -1) firstMissing = i;
      } else {
        span.innerText = targetText[i];
        span.classList.add('correct');
      }
      display.appendChild(span);
    }
    
    if (firstMissing !== -1) {
       currentIndex = firstMissing;
       document.getElementById(`char-${currentIndex}`).classList.add('current');
       highlightNextKey();
    }
  } else if (currentLevel !== 3) {
    for (let i = 0; i < targetText.length; i++) {
      const span = document.createElement('span');
      span.className = 'char';
      span.id = `char-${i}`;
      span.innerText = targetText[i];
      display.appendChild(span);
    }
    
    if(targetText.length > 0) {
      document.getElementById('char-0').classList.add('current');
      highlightNextKey();
    }
  }
  
  if (currentLevel === 5) {
    setTimeout(() => {
      document.getElementById('dictationBtn').click();
    }, 500);
  }
}

document.addEventListener('keydown', (e) => {
  if (isTimeUp) return;
  
  if (e.key === 'Escape') {
    document.getElementById('theoryModal').classList.remove('show');
    return;
  }
  
  if (document.getElementById('theoryModal').classList.contains('show') || 
      document.getElementById('resultModal').classList.contains('show')) {
    return;
  }

  if (['Shift', 'CapsLock', 'Control', 'Alt', 'Meta'].includes(e.key)) {
    const el = document.getElementById(e.code);
    if(el) el.classList.add('active');
    return;
  }
  
  if (currentLevel === 3) {
    const el = document.getElementById(e.code);
    if(el) el.classList.add('active');
    triggerGigaCorrect();
    
    if (!e.isTrusted) {
      const ta = document.getElementById('freeTypingArea');
      if (e.code === 'Backspace') {
        ta.value = ta.value.slice(0, -1);
      } else if (e.code === 'Space') {
        ta.value += ' ';
      } else if (e.code === 'Enter') {
        ta.value += '\n';
      } else if (e.code === 'Tab') {
        ta.value += '\t';
      } else {
        const char = getTypedChar(e, currentLang);
        if (char) ta.value += char;
      }
    }
    return;
  }
  
  if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
  
  const el = document.getElementById(e.code);
  if(el) el.classList.add('active');

  if (currentIndex >= targetText.length) return;

  if (!startTime) {
    startTime = new Date();
    timerInterval = setInterval(updateStats, 1000);
  }

  const expectedChar = targetText[currentIndex];
  const typedChar = getTypedChar(e, currentLang);
  
  if (typedChar === expectedChar) {
    playSound('correct');
    triggerGigaCorrect();
    
    const span = document.getElementById(`char-${currentIndex}`);
    span.classList.remove('current', 'wrong');
    span.classList.add('correct');
    
    if (currentLevel === 4) {
       span.innerText = expectedChar;
    }
    
    currentIndex++;
    totalTyped++;
    
    while (currentIndex < targetText.length && document.getElementById(`char-${currentIndex}`).classList.contains('correct')) {
       currentIndex++;
    }
    
    if (currentIndex < targetText.length) {
      document.getElementById(`char-${currentIndex}`).classList.add('current');
      highlightNextKey();
    } else {
      if (currentLevel === 5) {
        dictationWordsCount++;
        if (dictationWordsCount < 10) {
           targetText = generateText(currentLang, 1);
           currentIndex = 0;
           
           const display = document.getElementById('textDisplay');
           display.innerHTML = '';
           for (let i = 0; i < targetText.length; i++) {
             const span = document.createElement('span');
             span.className = 'char';
             span.id = `char-${i}`;
             span.innerText = targetText[i];
             display.appendChild(span);
           }
           if (targetText.length > 0) {
             document.getElementById('char-0').classList.add('current');
             highlightNextKey();
           }
           
           setTimeout(() => {
             document.getElementById('dictationBtn').click();
           }, 500);
           
           return;
        }
      } else if (currentLevel === 2) {
        targetText = generateText(currentLang, currentLevel);
        currentIndex = 0;
        
        const display = document.getElementById('textDisplay');
        display.innerHTML = '';
        for (let i = 0; i < targetText.length; i++) {
          const span = document.createElement('span');
          span.className = 'char';
          span.id = `char-${i}`;
          span.innerText = targetText[i];
          display.appendChild(span);
        }
        if (targetText.length > 0) {
          document.getElementById('char-0').classList.add('current');
          highlightNextKey();
        }
        return;
      }
      
      clearInterval(timerInterval);
      updateStats();
      showModal();
    }
  } else {
    if (typedChar.length === 1) {
      playSound('wrong');
      triggerGigaWrong();
      errors++;
      totalTyped++;
      
      const span = document.getElementById(`char-${currentIndex}`);
      span.classList.add('wrong');
      
      const container = document.querySelector('.container');
      container.classList.remove('shake');
      void container.offsetWidth; 
      container.classList.add('shake');
    }
  }
  updateStats();
});

document.addEventListener('keyup', (e) => {
  const el = document.getElementById(e.code);
  if(el) el.classList.remove('active');
});

document.getElementById('langSelect').addEventListener('change', startLevel);
document.getElementById('levelSelect').addEventListener('change', startLevel);
document.getElementById('categorySelect').addEventListener('change', startLevel);
document.getElementById('restartBtn').addEventListener('click', startLevel);
document.getElementById('nextLevelBtn').addEventListener('click', () => {
  document.getElementById('resultModal').classList.remove('show');
  startLevel();
});

document.getElementById('theoryBtn').addEventListener('click', () => {
  document.getElementById('theoryModal').classList.add('show');
});
document.getElementById('closeTheoryBtn').addEventListener('click', () => {
  document.getElementById('theoryModal').classList.remove('show');
});

document.getElementById('dictationBtn').addEventListener('click', () => {
  if (!targetText) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(targetText);
  utterance.lang = 'en-US';
  window.speechSynthesis.speak(utterance);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const text = document.getElementById('freeTypingArea').value;
  if (!text) {
    alert("გთხოვთ აკრიფოთ ტექსტი შენახვამდე.");
    return;
  }
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'chemi_proeqti.txt';
  a.click();
});

renderKeyboard();
startLevel();
