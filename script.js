let deferredPrompt;
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
    { name: 'ეტაპი 6: ციფრები და სიმბოლოები', data: ['123!', '?.,', '(10)', '45-67', '@email', '100%', 'A+B=C', '"hello"', '5*5=25', '#tag'] }
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
    { name: 'Stage 6: Numbers & Symbols', data: ['123!', '?.,', '(10)', '45-67', '@email', '100%', 'A+B=C', '"hello"', '5*5=25', '#tag'] }
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
let isGameStarted = false;
let currentTaskCount = 1;
const maxTasks = 3;

// --- LEADERBOARD & REGISTRATION ---
let studentName = '';
let studentGrade = '';
let userSessionResults = [];
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzANXGEqYAz6ZFV5qwaVF8AbjA7-SEknW0DKwRbskXIa_Aa2gqP7UtMKzjgRNx0tY2pkw/exec';
let timeElapsed = 0;
let dictationWordsCount = 0;
let audioCtx = null;

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

let lastTaskContent = "";

function generateText(lang, levelIndex) {
  let targetArray = [];
  
  if (levelIndex === 0) {
    targetArray = gameData.letters;
  } else if (levelIndex === 1) {
    const cat = document.getElementById('categorySelect').value;
    targetArray = gameData.words[cat] || gameData.words.school;
  } else if (levelIndex === 2) {
    targetArray = gameData.sentences;
  } else if (levelIndex === 3) {
    targetArray = gameData.words.school; // Fallback to words because missing letters logic breaks if string has _
  } else if (levelIndex === 4) {
    targetArray = gameData.dictation;
  } else if (levelIndex === 5) {
    targetArray = gameData.symbols;
  } else if (levelIndex === 7) {
    targetArray = gameData.pythonText;
  } else if (levelIndex === 8) {
    targetArray = gameData.pythonMath;
  } else if (levelIndex === 9) {
    targetArray = gameData.pythonMicrobit;
  } else {
    targetArray = gameData.words.school;
  }

  let newTask = "";
  let elementsToPick = 1; 

  if (levelIndex === 0) {
    elementsToPick = 20; // ეტაპი 1 (ასოები)
  } else if (levelIndex === 1) {
    elementsToPick = 8; // ეტაპი 2 (სიტყვები)
  } else if (levelIndex === 3) {
    elementsToPick = 6; // ეტაპი 4 (გამოტოვებული ასოები)
  } else if (levelIndex === 5) {
    elementsToPick = 15; // ეტაპი 6 (სიმბოლოები)
  } else if (levelIndex === 2) {
    elementsToPick = 2; // ეტაპი 3 (წინადადებები)
  } else if (levelIndex >= 7) {
    elementsToPick = 1; // Python და Micro:bit ეტაპები
  }

  let maxAttempts = 10;
  let attempts = 0;

  do {
    let tempArray = [];
    let lastElement = "";
    for (let i = 0; i < elementsToPick; i++) {
      let randomElement;
      let innerAttempts = 0;
      do {
        const randomIndex = Math.floor(Math.random() * targetArray.length);
        randomElement = targetArray[randomIndex];
        innerAttempts++;
      } while (randomElement === lastElement && innerAttempts < 10 && targetArray.length > 1);
      
      tempArray.push(randomElement);
      lastElement = randomElement;
    }
    newTask = tempArray.join(" "); // ვაერთებთ სიტყვებს/ასოებს გამოტოვებული სივრცით
    attempts++;
  } while (newTask === lastTaskContent && attempts < maxAttempts && targetArray.length > 1);

  lastTaskContent = newTask;
  return newTask;
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
  
  // Disable visual hints for Free Typing(6), Guess(3), and Dictation(4) modes
  if (currentLevel === 6 || currentLevel === 3 || currentLevel === 4) return;
  
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
        if (currentLevel === 5) shiftEl.classList.add('shift-highlight');
      }
      const sFinger = document.getElementById(`finger-${shiftFinger}`);
      if (sFinger) sFinger.classList.add('active');
      
      if (currentLevel === 5 && gigaTooltip) {
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
  
  if (startTime && currentLevel !== 6) {
    timeElapsed = Math.floor((now - startTime) / 1000);
    document.getElementById('timeLeft').innerText = timeElapsed;
  } else {
    document.getElementById('timeLeft').innerText = 0;
  }
  
  const timeDiff = startTime ? Math.max((now - startTime) / 1000 / 60, 0.01) : 0.01;
  
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
  const elapsedMinutes = (now - startTime) / 60000;
  const wpm = elapsedMinutes > 0 ? Math.round((totalTyped / 5) / elapsedMinutes) : 0;
    
  // Store result in session memory instead of submitting immediately
  userSessionResults.push({ wpm: wpm, accuracy: acc });
    
  document.getElementById('modalWpm').innerText = wpm;
  document.getElementById('modalAccuracy').innerText = acc;
  
  let stars = '⭐';
  if (acc >= 90) stars = '⭐⭐';
  if (acc >= 95 && wpm > 15) stars = '⭐⭐⭐';
  document.getElementById('modalStars').innerText = stars;
  
  if (timeout) {
    document.getElementById('resultTitle').innerText = 'დრო ამოიწურა!';
    document.getElementById('resultModal').classList.add('show');
  } else {
    document.getElementById('nextStageModal').classList.add('show');
  }
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

let gigaIsOnLeft = true;

function moveGiga() {
  const gigaContainer = document.getElementById('gigaContainer');
  const stageInstruction = document.getElementById('stageInstruction');
  const gigaImage = document.querySelector('.giga-image');
  if (!gigaContainer || !stageInstruction || !gigaImage) return;

  // 1. ინსტრუქციის ტექსტი მაშინვე ქრება
  stageInstruction.style.opacity = '0';

  // 2. გიგა იცვლის მხარეს
  gigaIsOnLeft = !gigaIsOnLeft;

  // გავასუფთაოთ კონტეინერზე არსებული ძველი ტრანსფორმაცია
  gigaContainer.style.transform = 'none';

  if (gigaIsOnLeft) {
    gigaContainer.style.left = '10%';
    gigaImage.style.transform = 'scaleX(1)';
  } else {
    gigaContainer.style.left = '80%';
    gigaImage.style.transform = 'scaleX(-1)';
  }

  // 3. 1 წამის შემდეგ გამოდის ინსტრუქცია
  setTimeout(() => {
    let instructionText = "";
    switch (currentLevel) {
      case 0:
        instructionText = "📖 მოათავსე თითები საწყის პოზიციაზე (A S D F და J K L ;) და ივარჯიშე ასოების სწორად აკრეფაში!";
        break;
      case 1:
        instructionText = "📖 სიტყვების აკრეფის დროა! ყურადღებით დააკვირდი თითოეულ ასოს და ეცადე, არ შეგეშალოს.";
        break;
      case 2:
        instructionText = "📖 ახლა მთლიანი წინადადებები უნდა ავკრიფოთ! სიტყვების გამოსაყოფად არ დაგავიწყდეს ჰარის (Space) გამოყენება.";
        break;
      case 3:
        instructionText = "📖 დააკვირდი სიტყვას, გამოიცანი რომელი ასო აკლია და ჩასვი ზუსტად!";
        break;
      case 4:
        instructionText = "📖 ხმოვანი კარნახი: დააჭირე მოსმენის ღილაკს და ყურადღებით აკრიფე ის, რასაც გაიგონებ.";
        break;
      case 5:
        instructionText = "📖 დიდი ასოებისა და სასვენი ნიშნების დასაწერად არ დაგავიწყდეს Shift ღილაკის გამოყენება!";
        break;
      case 6:
        instructionText = "📖 ფინალური პროექტი! თავისუფლად დაწერე ტექსტი, დაიცავი წესები და შეამოწმე შენი ცოდნა.";
        break;
      case 7:
        instructionText = "📖 პითონში print ნიშნავს 'დაბეჭდეს'. რაც ფრჩხილებში და ბრჭყალებში წერია, კომპიუტერი ზუსტად იმას გვეტყვის!";
        break;
      case 8:
        instructionText = "📖 პითონმა კარგად იცის მათემატიკა! თუ ციფრებს ბრჭყალების გარეშე დავწერთ, ის თავად გამოიცნობს პასუხს.";
        break;
      case 9:
        instructionText = "📖 მოდი დავანთოთ ნათურები Micro:bit-ზე! დააკვირდი წერტილებს და დიდი/პატარა ასოებს სინტაქსში.";
        break;
    }
    stageInstruction.innerText = instructionText;
    stageInstruction.style.opacity = '1';
  }, 1000);
}

function startLevel() {
  currentLevel = parseInt(document.getElementById('levelSelect').value);
  
  if (currentLevel >= 7) {
    document.body.classList.add('hacker-mode');
  } else {
    document.body.classList.remove('hacker-mode');
  }
  
  moveGiga();
  if (currentLevel === 4 || currentLevel === 5) {
    document.getElementById('langSelect').value = 'en';
  }
  currentLang = document.getElementById('langSelect').value;
  document.body.setAttribute('data-lang', currentLang);
  
  if (currentLevel === 1 || currentLevel === 3 || currentLevel === 4) {
    document.getElementById('categorySelect').style.display = 'inline-block';
  } else {
    document.getElementById('categorySelect').style.display = 'none';
  }
  
  if (currentLevel === 4) {
    document.getElementById('dictationBtn').style.display = 'block';
    document.body.classList.add('level-5');
  } else {
    document.getElementById('dictationBtn').style.display = 'none';
    document.body.classList.remove('level-5');
  }
  
  if (currentLevel === 6) {
    document.getElementById('taskProgress').style.display = 'none';
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
    document.getElementById('taskProgress').style.display = 'inline-block';
    document.getElementById('taskProgress').innerText = `დავალება 1/${maxTasks}`;
    document.body.classList.remove('level-4');
    document.getElementById('textDisplay').style.display = 'block';
    document.getElementById('freeTypingContainer').style.display = 'none';
  }
  clearInterval(timerInterval);
  startTime = null;
  isGameStarted = false;
  errors = 0;
  totalTyped = 0;
  currentIndex = 0;
  timeElapsed = 0;
  dictationWordsCount = 0;
  currentTaskCount = 1;
  document.getElementById('timeLeft').innerText = '0';

  if (currentLevel !== 6) {
    targetText = generateText(currentLang, currentLevel);
  }

  updateStats();
  
  const display = document.getElementById('textDisplay');
  display.innerHTML = '';
  
  if (currentLevel === 3) {
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
  
  if (currentLevel === 4) {
    setTimeout(() => {
      document.getElementById('dictationBtn').click();
    }, 500);
  }
}

document.addEventListener('keydown', (e) => {
  
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
  
  if (currentLevel === 6) {
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

  if (!isGameStarted) {
    isGameStarted = true;
    startTime = new Date();
    timerInterval = setInterval(updateStats, 1000);
  }

  const expectedChar = targetText[currentIndex];
  // For symbols/numbers level (5) always match in English mode
  const typedChar = getTypedChar(e, (currentLevel === 5) ? 'en' : currentLang);
  
  if (typedChar === expectedChar) {
    playSound('correct');
    triggerGigaCorrect();
    
    const span = document.getElementById(`char-${currentIndex}`);
    span.classList.remove('current', 'wrong');
    span.classList.add('correct');
    
    if (currentLevel === 3) {
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
      // One task done
      currentTaskCount++;
      const progressEl = document.getElementById('taskProgress');
      if (progressEl) progressEl.innerText = `დავალება ${currentTaskCount}/${maxTasks}`;

      if (currentTaskCount > maxTasks) {
        // All tasks for this level completed — auto advance
        clearInterval(timerInterval);
        const levelSelect = document.getElementById('levelSelect');
        const currentIdx = levelSelect.selectedIndex;
        const maxIdx = levelSelect.options.length - 1;
        
        if (currentIdx < maxIdx) {
          // შემდეგ ეტაპზე გადასვლა — ლამაზი მოდალი alert()-ის ნაცვლად
          pendingNextLevel = currentIdx + 1;
          document.getElementById('levelUpModal').classList.add('show');
          triggerStars();
        } else {
          // ყველა ეტაპი დასრულდა
          document.getElementById('allDoneModal').classList.add('show');
          triggerFireworks();
        }
      } else {
        // Reset sub-task state (timer pauses until first keypress)
        clearInterval(timerInterval);
        isGameStarted = false;
        startTime = null;
        timeElapsed = 0;
        document.getElementById('timeLeft').innerText = '0';

        // Load next text for same level
        targetText = generateText(currentLang, currentLevel);
        currentIndex = 0;

        const display = document.getElementById('textDisplay');
        display.innerHTML = '';
        
        if (currentLevel === 3) {
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
        } else {
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
        }

        if (currentLevel === 4) {
          setTimeout(() => document.getElementById('dictationBtn').click(), 500);
        }
      }
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

const _lang = document.getElementById('langSelect');
if (_lang) _lang.addEventListener('change', startLevel);
const _level = document.getElementById('levelSelect');
if (_level) _level.addEventListener('change', startLevel);
const _cat = document.getElementById('categorySelect');
if (_cat) _cat.addEventListener('change', startLevel);
const _restart = document.getElementById('restartBtn');
if (_restart) _restart.addEventListener('click', startLevel);

const nextLevelBtn = document.getElementById('nextLevelBtn');
if (nextLevelBtn) {
  nextLevelBtn.addEventListener('click', () => {
    document.getElementById('resultModal').classList.remove('show');
    startLevel();
  });
}

const autoNextBtn = document.getElementById('autoNextStageBtn');
if (autoNextBtn) {
  autoNextBtn.addEventListener('click', () => {
    const modal = document.getElementById('nextStageModal');
    if (modal) modal.classList.remove('show');
    
    const levelSelect = document.getElementById('levelSelect');
    const currentIdx = levelSelect.selectedIndex;
    const maxIdx = levelSelect.options.length - 1;
    
    if (currentIdx < maxIdx) {
      levelSelect.selectedIndex = currentIdx + 1;
    }
    // Whether last level or not, call startLevel to reset state
    startLevel();
  });
}

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

document.getElementById('closeProjectBtn').addEventListener('click', () => {
  document.getElementById('projectModal').classList.remove('show');
});

document.getElementById('checkProjectBtn').addEventListener('click', () => {
  const text = document.getElementById('freeTypingArea').value || '';
  
  const isLengthOk = text.length >= 40;
  const isPunctOk = /[.,!?]/.test(text);
  const isShiftOk = /[A-Zჭღშძჟჩთ]/.test(text);
  
  const updateCrit = (id, isOk) => {
    const el = document.getElementById(id);
    if (isOk) {
      el.innerText = '✔';
      el.className = 'crit-icon success';
    } else {
      el.innerText = '✖';
      el.className = 'crit-icon fail';
    }
  };
  
  updateCrit('critLengthIcon', isLengthOk);
  updateCrit('critPunctIcon', isPunctOk);
  updateCrit('critShiftIcon', isShiftOk);
  
  const msgEl = document.getElementById('projectModalMessage');
  if (isLengthOk && isPunctOk && isShiftOk) {
    msgEl.innerText = "ყოჩაღ! შენი პროექტი იდეალურია!";
    msgEl.style.color = "#4caf50";
    playSound('correct');
    
    // Calculate and submit overall average score
    let avgWpm = 0;
    let avgAcc = 0;
    if (userSessionResults.length > 0) {
      let sumWpm = 0;
      let sumAcc = 0;
      userSessionResults.forEach(res => {
        sumWpm += res.wpm;
        sumAcc += res.accuracy;
      });
      avgWpm = Math.round(sumWpm / userSessionResults.length);
      avgAcc = Math.round(sumAcc / userSessionResults.length);
    }
    saveResultToDatabase(avgWpm, avgAcc);
    
    // Confetti / Stars
    triggerFireworks();
  } else {
    msgEl.innerText = "გთხოვ, დააკმაყოფილო ყველა პირობა!";
    msgEl.style.color = "#f44336";
    playSound('wrong');
  }
  
  document.getElementById('projectModal').classList.add('show');
});

// --- LEADERBOARD & REGISTRATION ---
// (Variables declared at top of file)

const startAppBtn = document.getElementById('startAppBtn');
if (startAppBtn) {
  startAppBtn.addEventListener('click', () => {
    const nameEl = document.getElementById('studentName');
    const gradeEl = document.getElementById('studentGrade');
    if (!nameEl || !gradeEl) return;
    
    const nameInput = nameEl.value.trim();
    const gradeInput = gradeEl.value.trim();
    
    if (!nameInput || !gradeInput) {
      alert('გთხოვ, შეავსო ორივე ველი!');
      return;
    }
    
    studentName = nameInput;
    studentGrade = gradeInput;
    
    const modal = document.getElementById('registrationModal');
    if (modal) modal.classList.remove('show');
    
    // Render keyboard and load level AFTER registration
    renderKeyboard();
    startLevel();
  });
}

function saveResultToDatabase(finalWpm, finalAccuracy) {
    if (!studentName || !studentGrade) return;
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: studentName,
            grade: studentGrade,
            wpm: finalWpm,
            accuracy: finalAccuracy,
            date: new Date().toLocaleDateString()
        })
    }).then(() => console.log("მონაცემები გაიგზავნა!"))
      .catch(err => console.error("შეცდომა:", err));
}

function loadLeaderboard() {
  document.getElementById('leaderboardModal').classList.add('show');
  document.getElementById('leaderboardLoading').style.display = 'block';
  document.getElementById('leaderboardLoading').innerText = "იტვირთება მონაცემები...";
  document.getElementById('leaderboardTable').style.display = 'none';
  
  fetch(SCRIPT_URL)
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById('leaderboardBody');
      tbody.innerHTML = '';
      
      data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${row.name || 'უცნობი'}</td>
          <td>${row.grade || '-'}</td>
          <td>${row.wpm || 0}</td>
          <td>${row.accuracy || 0}%</td>
          <td>${row.date ? new Date(row.date).toLocaleDateString() : '-'}</td>
        `;
        tbody.appendChild(tr);
      });
      
      document.getElementById('leaderboardLoading').style.display = 'none';
      document.getElementById('leaderboardTable').style.display = 'table';
    })
    .catch(e => {
      document.getElementById('leaderboardLoading').innerText = "ვერ მოხერხდა მონაცემების ჩატვირთვა.";
      console.error(e);
    });
}

const top10Btn = document.getElementById('top10Btn');
if (top10Btn) top10Btn.addEventListener('click', loadLeaderboard);

const closeLeaderboardBtn = document.getElementById('closeLeaderboardBtn');
if (closeLeaderboardBtn) {
  closeLeaderboardBtn.addEventListener('click', () => {
    document.getElementById('leaderboardModal').classList.remove('show');
  });
}

// Do NOT call renderKeyboard() or startLevel() here.
// They are called inside startAppBtn handler AFTER registration.

function triggerStars() {
  confetti({
    particleCount: 30,
    spread: 60,
    origin: { y: 0.6 },
    colors: ['#FFD700', '#FFA500', '#FFF8DC'],
    shapes: ['star'],
    ticks: 50
  });
}

function triggerFireworks() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, zIndex: 9999, colors: ['#ff0000', '#00ff00', '#0000ff', '#ffeb3b', '#ff9800'] });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, zIndex: 9999, colors: ['#ff0000', '#00ff00', '#0000ff', '#ffeb3b', '#ff9800'] });
    if (Date.now() < end) { requestAnimationFrame(frame); }
  }());
}

// ეტაპის გადასვლის მოდალის ღილაკი
let pendingNextLevel = -1;
const levelUpNextBtn = document.getElementById('levelUpNextBtn');
if (levelUpNextBtn) {
  levelUpNextBtn.addEventListener('click', () => {
    document.getElementById('levelUpModal').classList.remove('show');
    if (pendingNextLevel >= 0) {
      const levelSelect = document.getElementById('levelSelect');
      levelSelect.selectedIndex = pendingNextLevel;
      pendingNextLevel = -1;
      startLevel();
    }
  });
}

// ყველა ეტაპის დასრულების მოდალის ღილაკი
const allDoneCloseBtn = document.getElementById('allDoneCloseBtn');
if (allDoneCloseBtn) {
  allDoneCloseBtn.addEventListener('click', () => {
    document.getElementById('allDoneModal').classList.remove('show');
    startLevel();
  });
}

// PWA ინსტალაციის ლოგიკა
const installAppBtn = document.getElementById('installAppBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  // ვაჩერებთ ბრაუზერის სტანდარტულ, უხილავ მოქმედებას
  e.preventDefault();
  // ვიმახსოვრებთ ივენთს, რომ მოგვიანებით გამოვიძახოთ
  deferredPrompt = e;
  // ვაჩენთ ჩვენს ლამაზ ღილაკს ეკრანზე
  if (installAppBtn) {
    installAppBtn.style.display = 'inline-block';
  }
});

if (installAppBtn) {
  installAppBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      // ვაჩვენებთ ინსტალაციის შეთავაზების ფანჯარას
      deferredPrompt.prompt();
      // ველოდებით მომხმარებლის გადაწყვეტილებას
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`მომხმარებელმა აირჩია: ${outcome}`);
      // ივენთი გამოყენებულია, ვანულებთ მას
      deferredPrompt = null;
      // ვმალავთ ღილაკს
      installAppBtn.style.display = 'none';
    }
  });
}

// თუ მომხმარებელმა უკვე დააინსტალირა, ვმალავთ ღილაკს
window.addEventListener('appinstalled', () => {
  if (installAppBtn) {
    installAppBtn.style.display = 'none';
  }
  deferredPrompt = null;
  console.log('აპლიკაცია წარმატებით დაინსტალირდა!');
});

// ვცდილობთ ეკრანის ავტომატურ ჰორიზონტალურად გაშლას (თუ ბრაუზერი დათანხმდება)
function lockLandscape() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape').catch(() => {
// ზოგიერთი მობილური ბრაუზერი უსაფრთხოების გამო ამას ბლოკავს, ამიტომ გაფრთხილება გვაზღვევს

});
}
}
window.addEventListener('load', lockLandscape);
