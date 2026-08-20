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
  [{code: 'ControlLeft', display: 'Ctrl', width: 'wide-1-5', finger: 'lp'},
   {code: 'MetaLeft', display: 'Win', width: 'wide-1', finger: 'thumb'},
   {code: 'AltLeft', display: 'Alt', width: 'wide-1', finger: 'thumb'},
   {code: 'Space', display: 'Space', en: ' ', ka: ' ', width: 'spacebar', finger: 'thumb'},
   {code: 'AltRight', display: 'Alt', width: 'wide-1', finger: 'thumb'},
   {code: 'ControlRight', display: 'Ctrl', width: 'wide-1-5', finger: 'rp'}]
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
let currentExamQuestion = null;
let currentIndex = 0;
let errors = 0;
let totalTyped = 0;
let startTime = null;
let timerInterval = null;
let isGameStarted = false;
let currentTaskCount = 1;
let maxTasks = 3;
let currentTargetArray = [];

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

let levelQueue = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleWithoutConsecutiveDuplicates(arr) {
  let shuffled;
  let hasConsecutive = true;
  
  while (hasConsecutive) {
    shuffled = [...arr].sort(() => Math.random() - 0.5);
    hasConsecutive = false;
    
    for (let i = 0; i < shuffled.length - 1; i++) {
      if (shuffled[i] === shuffled[i + 1]) {
        hasConsecutive = true;
        break;
      }
    }
  }
  return shuffled;
}

function generateText(lang, levelIndex) {
  let targetArray = [];
  
  if (levelIndex === 0) {
    targetArray = lang === 'en' ? gameData.enMiddleRow : gameData.kaMiddleRow;
  } else if (levelIndex === 1) {
    targetArray = lang === 'en' ? gameData.enTopRow : gameData.kaTopRow;
  } else if (levelIndex === 2) {
    targetArray = lang === 'en' ? gameData.enBottomRow : gameData.kaBottomRow;
  } else if (levelIndex === 3) {
    const cat = document.getElementById('categorySelect').value;
    targetArray = gameData.words[cat] || gameData.words.school;
  } else if (levelIndex === 4) {
    targetArray = gameData.sentences;
  } else if (levelIndex === 5) {
    targetArray = gameData.words.school; 
  } else if (levelIndex === 6) {
    targetArray = gameData.dictation;
  } else if (levelIndex === 7) {
    targetArray = gameData.symbols;
  } else if (levelIndex === 9) {
    targetArray = (lang === 'en') ? gameData.pythonText : gameData.robotCommands;
  } else if (levelIndex === 10) {
    targetArray = gameData.pythonCommands;
  } else if (levelIndex === 11) {
    targetArray = gameData.pythonVariables;
  } else if (levelIndex === 12) {
    targetArray = gameData.pythonLoops;
  } else if (levelIndex === 13) {
    targetArray = gameData.pythonConditions;
  } else if (levelIndex === 14) {
    targetArray = finalExamQuestions;
  } else {
    targetArray = gameData.words.school;
  }

  currentTargetArray = targetArray;

  let newTask = "";
  let elementsToPick = 1; 

  if (levelIndex >= 0 && levelIndex <= 2) {
    elementsToPick = 15; // 15 ასო თითო დავალებაზე
  } else if (levelIndex === 3) {
    elementsToPick = 8; // სიტყვები
  } else if (levelIndex === 5) {
    elementsToPick = 6; // გამოტოვებული ასოები
  } else if (levelIndex === 7) {
    elementsToPick = 5; // სიმბოლოები
  } else if (levelIndex === 4) {
    elementsToPick = 2; // წინადადებები
  } else if (levelIndex >= 9 && levelIndex <= 13) {
    elementsToPick = 1; // კოდირება
  }

  if (currentTaskCount === 1) {
    let pool;
    if (levelIndex === 14) {
      pool = [...targetArray];
    } else if (levelIndex >= 0 && levelIndex <= 2) {
      // ვამრავლებთ ბევრჯერ, რომ 3 სრულყოფილი დავალება გამოვიდეს
      pool = [...targetArray, ...targetArray, ...targetArray, ...targetArray, ...targetArray];
      pool = shuffleWithoutConsecutiveDuplicates(pool);
    } else {
      pool = [...targetArray, ...targetArray];
      pool = shuffleWithoutConsecutiveDuplicates(pool);
    }
    
    levelQueue = [];
    
    // პირველ 3 ეტაპზე ვზღუდავთ ზუსტად 3 დავალებით, სხვაგან არ ვზღუდავთ
    let taskLimit = (levelIndex >= 0 && levelIndex <= 2) ? 3 : 999;
    
    while (pool.length >= elementsToPick && levelQueue.length < taskLimit) {
      let group = pool.splice(0, elementsToPick);
      if (levelIndex === 14) {
        levelQueue.push(group[0]);
      } else if (levelIndex >= 0 && levelIndex <= 2) {
        // პირველ 3 ეტაპზე ასოები ერთიანდება დაშორების (Space) გარეშე
        levelQueue.push(group.join(""));
      } else {
        // დანარჩენ ეტაპებზე რჩება სტანდარტული დაშორებები
        levelQueue.push(group.join(" "));
      }
    }
  }

  if (currentTaskCount <= levelQueue.length) {
    newTask = levelQueue[currentTaskCount - 1];
  } else {
    newTask = levelQueue[0] || targetArray[0];
  }

  if (levelIndex === 14) {
    currentExamQuestion = newTask;
    newTask = newTask.q;
  }

  lastTaskContent = newTask;
  return newTask;
}

function updateDynamicInstruction() {
  if (currentLevel >= 10 && typeof codeExplanations !== 'undefined' && codeExplanations[targetText]) {
    const instructionBox = document.getElementById('stageInstruction');
    if (instructionBox) {
      instructionBox.innerHTML = codeExplanations[targetText];
      instructionBox.style.animation = 'none';
      setTimeout(() => instructionBox.style.animation = 'pulse 0.5s ease', 10);
    }
  } else {
    const instructionBox = document.getElementById('stageInstruction');
    if (instructionBox && instructionBox.dataset.originalText && currentLevel >= 10) {
      instructionBox.innerHTML = instructionBox.dataset.originalText;
    }
  }
}

let virtualShift = false;
let virtualCtrl = false;
let virtualAlt = false;

function toggleLanguage() {
  const langSelect = document.getElementById('langSelect');
  if (!langSelect) return;
  langSelect.value = (langSelect.value === 'ka') ? 'en' : 'ka';
  currentLang = langSelect.value;
  document.body.setAttribute('data-lang', currentLang);
  
  renderKeyboard();
  if (targetText && currentIndex < targetText.length) {
    highlightNextKey();
  }
}

function checkVirtualLanguageToggle() {
  if ((virtualCtrl && virtualAlt) || (virtualShift && virtualAlt) || (virtualCtrl && virtualShift)) {
    toggleLanguage();
    virtualCtrl = false;
    virtualAlt = false;
    virtualShift = false;
    document.querySelectorAll('.key.active').forEach(el => {
      if (['ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'ShiftLeft', 'ShiftRight'].includes(el.id)) {
        el.classList.remove('active');
      }
    });
  }
}

function handleVirtualKeyClick(e) {
  const keyEl = e.target.closest('.key');
  if (!keyEl) return;
  
  const code = keyEl.id;
  
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    virtualShift = !virtualShift;
    document.getElementById('ShiftLeft')?.classList.toggle('active', virtualShift);
    document.getElementById('ShiftRight')?.classList.toggle('active', virtualShift);
    checkVirtualLanguageToggle();
    return;
  }
  if (code === 'ControlLeft' || code === 'ControlRight') {
    virtualCtrl = !virtualCtrl;
    document.getElementById('ControlLeft')?.classList.toggle('active', virtualCtrl);
    document.getElementById('ControlRight')?.classList.toggle('active', virtualCtrl);
    checkVirtualLanguageToggle();
    return;
  }
  if (code === 'AltLeft' || code === 'AltRight') {
    virtualAlt = !virtualAlt;
    document.getElementById('AltLeft')?.classList.toggle('active', virtualAlt);
    document.getElementById('AltRight')?.classList.toggle('active', virtualAlt);
    checkVirtualLanguageToggle();
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
    document.getElementById('ShiftLeft')?.classList.remove('active');
    document.getElementById('ShiftRight')?.classList.remove('active');
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
         let shiftChar = '';
         if (currentLang === 'ka' && key.kaShift) {
             shiftChar = key.kaShift;
         } else if (currentLang === 'en' && key.enShift && !/^[A-Z]$/.test(key.enShift)) {
             shiftChar = key.enShift;
         } else if (currentLang === 'en' && key.kaShift && !/^[a-zA-Z]$/.test(key.kaShift)) {
             shiftChar = key.kaShift;
         }
         
         let shiftHtml = shiftChar ? `<div class="shift-char">⇧${shiftChar}</div>` : '';
         let mainHtml = '';
         let enHtml = '';
         
         if (currentLang === 'en') {
             mainHtml = `<div class="main-char">${key.en || ''}</div>`;
             enHtml = (key.ka && key.ka !== key.en) ? `<div class="en-char">${key.ka}</div>` : '';
         } else {
             mainHtml = `<div class="main-char">${key.ka || ''}</div>`;
             enHtml = (key.en && key.en !== key.ka) ? `<div class="en-char">${key.en}</div>` : '';
         }
         
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
  if (currentLevel === 8 || currentLevel === 5 || currentLevel === 6) return;
  
  if (currentIndex >= targetText.length) return;
  const char = targetText[currentIndex];
  
  let targetKey = null;
  let needsShift = false;
  
  for (let row of keyboardLayout) {
    for (let key of row) {
      if (key.ka === char || key.kaShift === char || 
          key.en === char || key.enShift === char || 
          (key.en && key.en.toUpperCase() === char)) {
          
        targetKey = key;
        
        if (key.kaShift === char || key.enShift === char || 
           (key.en && key.en.toUpperCase() === char && char.toUpperCase() !== char.toLowerCase())) {
           needsShift = true;
        }
        break;
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
        if (currentLevel === 7) shiftEl.classList.add('shift-highlight');
      }
      const sFinger = document.getElementById(`finger-${shiftFinger}`);
      if (sFinger) sFinger.classList.add('active');
      
      if (currentLevel === 7 && gigaTooltip) {
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
  
  if (startTime && currentLevel !== 8) {
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
    gigaContainer.style.left = '-60px';
    gigaImage.style.transform = 'scaleX(1)';
  } else {
    gigaContainer.style.left = 'calc(100% - 140px)';
    gigaImage.style.transform = 'scaleX(-1)';
  }

  // 3. 1 წამის შემდეგ გამოდის ინსტრუქცია
  setTimeout(() => {
    let instructionText = "";
    switch (currentLevel) {
      case 0:
        instructionText = "📖 ეტაპი 1: მოათავსე თითები შუა რიგზე (A S D F და J K L ;) და ივარჯიშე საწყის პოზიციაზე!";
        break;
      case 1:
        instructionText = "📖 ეტაპი 2: ზედა რიგის დროა! თითები ისევ შუაში გიწყვია და მხოლოდ საჭირო ასოსკენ იწევი მაღლა.";
        break;
      case 2:
        instructionText = "📖 ეტაპი 3: ქვედა რიგი! თითები ჩამოსწიე ქვემოთ და ისევ საწყის პოზიციაზე დააბრუნე.";
        break;
      case 3:
        instructionText = "📖 ეტაპი 4: სიტყვების აკრეფის დროა! ყურადღებით დააკვირდი თითოეულ ასოს.";
        break;
      case 4:
        instructionText = "📖 ეტაპი 5: ახლა მთლიანი წინადადებები უნდა ავკრიფოთ! გამოიყენე Space სიტყვების გამოსაყოფად.";
        break;
      case 5:
        instructionText = "📖 ეტაპი 6: დააკვირდი სიტყვას, გამოიცანი რომელი ასო აკლია და ჩასვი ზუსტად!";
        break;
      case 6:
        instructionText = "📖 ეტაპი 7: ხმოვანი კარნახი: დააჭირე მოსმენის ღილაკს და აკრიფე რასაც გაიგონებ.";
        break;
      case 7:
        instructionText = "📖 ეტაპი 8: დიდი ასოებისა და სასვენი ნიშნების დასაწერად გამოიყენე Shift ღილაკი!";
        break;
      case 8:
        instructionText = "📖 ეტაპი 9: ფინალური პროექტი! თავისუფლად დაწერე ტექსტი და შეამოწმე შენი ცოდნა.";
        break;
      case 9:
        instructionText = "💻 ეტაპი 10: შენ პროგრამისტი ხარ! მოდი, რობოტ გიგას ალგორითმი დავუწეროთ.";
        break;
      case 10:
        instructionText = "🐍 ეტაპი 11: მართე გიგა პითონის ბრძანებებით! არ დაგავიწყდეს ფრჩხილები ().";
        break;
      case 11:
        instructionText = "🐍 ეტაპი 12: ვისწავლოთ ცვლადები! = ნიშნით კომპიუტერი იმახსოვრებს მონაცემებს.";
        break;
      case 12:
        instructionText = "🐍 ეტაპი 13: ციკლები! კოდი რომ არ ვწეროთ ბევრჯერ, ვიყენებთ for და while-ს.";
        break;
      case 13:
        instructionText = "🐍 ეტაპი 14: პირობები! if ნიშნავს 'თუ'. ასე რობოტი გადაწყვეტილებებს დამოუკიდებლად იღებს!";
        break;
    }

    if ([6, 7, 10, 11, 12, 13].includes(currentLevel)) {
      instructionText += "\n\n🇬🇧 გადართე ინგლისურ (EN) კლავიატურაზე.";
    } else {
      instructionText += "\n\n🇬🇪 გადართე ქართულ (GE) კლავიატურაზე.";
    }

    stageInstruction.innerText = instructionText;
    stageInstruction.dataset.originalText = instructionText;
    stageInstruction.style.color = ""; // reset color in case it was warning
    stageInstruction.style.opacity = '1';
  }, 1000);
}

function startLevel() {
  currentLevel = parseInt(document.getElementById('levelSelect').value);
  
  if (currentLevel >= 9) {
    document.body.classList.add('hacker-mode');
  } else {
    document.body.classList.remove('hacker-mode');
  }
  
  moveGiga();
  
  if (currentLevel === 6 || currentLevel === 7) {
    document.getElementById('langSelect').value = 'en';
  }
  currentLang = document.getElementById('langSelect').value;
  document.body.setAttribute('data-lang', currentLang);
  
  renderKeyboard();
  
  if (currentLevel === 3 || currentLevel === 5 || currentLevel === 6) {
    document.getElementById('categorySelect').style.display = 'inline-block';
  } else {
    document.getElementById('categorySelect').style.display = 'none';
  }
  
  if (currentLevel === 6) {
    document.getElementById('dictationBtn').style.display = 'block';
    document.body.classList.add('level-5');
  } else {
    document.getElementById('dictationBtn').style.display = 'none';
    document.body.classList.remove('level-5');
  }
  
  if (currentLevel === 8 || currentLevel === 14) {
    if (currentLevel === 8) {
      document.getElementById('taskProgress').style.display = 'none';
      document.getElementById('textDisplay').style.display = 'none';
      document.getElementById('downloadBtn').innerText = 'შენახვა / გადმოწერა';
      document.getElementById('checkProjectBtn').style.display = 'inline-block';
      document.getElementById('freeTypingArea').placeholder = 'დაიწყე ბეჭდვა აქ... ჩაწერე შენი მოთხრობა, ლექსი ან მილოცვა!';
    } else {
      document.getElementById('taskProgress').style.display = 'inline-block';
      document.getElementById('textDisplay').style.display = 'block';
      document.getElementById('downloadBtn').innerText = 'პასუხის გაგზავნა';
      document.getElementById('checkProjectBtn').style.display = 'none';
      document.getElementById('freeTypingArea').placeholder = 'პასუხები ჩაწერე ამ ველში';
    }
    document.body.classList.add('level-4');
    document.getElementById('freeTypingContainer').style.display = 'flex';
    document.getElementById('freeTypingArea').value = '';
    document.querySelectorAll('.key.highlight, .finger.active').forEach(el => {
      el.classList.remove('highlight', 'active');
    });
    document.getElementById('freeTypingArea').focus();
    if (currentLevel === 8) return; 
  } else {
    document.getElementById('taskProgress').style.display = 'inline-block';
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

  if (currentLevel !== 8) {
    targetText = generateText(currentLang, currentLevel);
    updateDynamicInstruction();
    maxTasks = levelQueue.length;
    const taskProgress = document.getElementById('taskProgress');
    if (taskProgress && taskProgress.style.display !== 'none') {
      taskProgress.innerText = `დავალება ${currentTaskCount}/${maxTasks}`;
    }
  }

  updateStats();
  
  const display = document.getElementById('textDisplay');
  display.innerHTML = '';
  
  if (currentLevel === 5) {
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
  } else if (currentLevel !== 5) {
    for (let i = 0; i < targetText.length; i++) {
      if (targetText[i] === '\n') {
        display.appendChild(document.createElement('br'));
      }
      
      const span = document.createElement('span');
      span.className = 'char';
      span.id = `char-${i}`;
      span.innerText = targetText[i];
      if (targetText[i] === '\n') {
        span.style.display = 'none'; 
      }
      display.appendChild(span);
    }
    
    if(targetText.length > 0) {
      document.getElementById('char-0').classList.add('current');
      highlightNextKey();
    }
  }
  
  if (currentLevel === 6) {
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
    
    if ((e.shiftKey && e.altKey) || (e.ctrlKey && e.altKey) || (e.ctrlKey && e.shiftKey)) {
      if (!window.lastLangToggleTime || Date.now() - window.lastLangToggleTime > 500) {
        toggleLanguage();
        window.lastLangToggleTime = Date.now();
      }
    }
    return;
  }

  // Dynamic Language Warning Check
  if (currentLevel !== 8 && currentIndex < targetText.length) {
    const expectedChar = targetText[currentIndex];
    const expectedLang = (currentLevel === 7) ? 'en' : currentLang;
    const typedChar = getTypedChar(e, expectedLang);
    
    if (typedChar !== expectedChar) {
      const alternateLang = (currentLang === 'ka') ? 'en' : 'ka';
      const typedCharAlt = getTypedChar(e, alternateLang);
      
      if (typedCharAlt === expectedChar) {
        const isExpectedEng = /[a-zA-Z]/.test(expectedChar);
        const stageInstruction = document.getElementById('stageInstruction');
        const langName = isExpectedEng ? "ინგლისურ" : "ქართულ";
        
        stageInstruction.innerText = `⚠️ ყურადღება: გთხოვ, გადართე ${langName} ენაზე (აპლიკაციის მენიუდან ან Ctrl+Alt-ით)!`;
        stageInstruction.style.color = "#ff9800";
        if (window.langWarningTimeout) clearTimeout(window.langWarningTimeout);
        window.langWarningTimeout = setTimeout(() => {
           stageInstruction.innerText = stageInstruction.dataset.originalText || "";
           stageInstruction.style.color = "";
        }, 3000);
        e.preventDefault();
        return;
      }
    }
  }
  
  if (currentLevel === 8 || currentLevel === 14) {
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
  const typedChar = getTypedChar(e, (currentLevel === 7) ? 'en' : currentLang);
  
  if (typedChar === expectedChar) {
    playSound('correct');
    triggerGigaCorrect();
    
    const span = document.getElementById(`char-${currentIndex}`);
    span.classList.remove('current', 'wrong');
    span.classList.add('correct');
    
    if (currentLevel === 5) {
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
      if (progressEl) progressEl.innerText = `დავალება ${currentTaskCount > maxTasks ? maxTasks : currentTaskCount}/${maxTasks}`;

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
        updateDynamicInstruction();
        currentIndex = 0;

        const display = document.getElementById('textDisplay');
        display.innerHTML = '';
        
        if (currentLevel === 5) {
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

        if (currentLevel === 6) {
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
  
  const studentName = document.getElementById('studentName').value || 'Unknown';
  const studentGrade = document.getElementById('studentGrade').value || 'Unknown';

  if (currentLevel === 14) {
    const payload = {
      type: 'exam',
      name: document.getElementById('studentName').value || 'უცნობი',
      grade: document.getElementById('studentGrade').value || '-',
      question: currentExamQuestion ? currentExamQuestion.q : targetText,
      answer: document.getElementById('freeTypingArea').value,
      correctAnswer: currentExamQuestion ? currentExamQuestion.correct : ''
    };
    fetch(SCRIPT_URL, {
      method: 'POST', mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(() => {
      document.getElementById('freeTypingArea').value = '';
      alert('პასუხი გაგზავნილია! გააგრძელე შემდეგი კითხვით.');
      
      currentTaskCount++;
      const taskProgress = document.getElementById('taskProgress');
      if (taskProgress) taskProgress.innerText = `დავალება ${currentTaskCount > maxTasks ? maxTasks : currentTaskCount}/${maxTasks}`;

      if (currentTaskCount > maxTasks) {
        document.getElementById('allDoneModal').classList.add('show');
        triggerFireworks();
      } else {
        targetText = generateText(currentLang, currentLevel);
        const display = document.getElementById('textDisplay');
        display.innerHTML = '';
        for (let i = 0; i < targetText.length; i++) {
          if (targetText[i] === '\n') {
            display.appendChild(document.createElement('br'));
          }
          const span = document.createElement('span');
          span.className = 'char';
          span.id = `char-${i}`;
          span.innerText = targetText[i];
          if (targetText[i] === '\n') {
            span.style.display = 'none';
          }
          display.appendChild(span);
        }
        document.getElementById('freeTypingArea').focus();
      }
    }).catch(e => alert("შეცდომა გაგზავნისას."));
  } else {
    const payload = {
      type: 'project',
      name: document.getElementById('studentName').value || 'უცნობი',
      grade: document.getElementById('studentGrade').value || '-',
      projectText: document.getElementById('freeTypingArea').value
    };
    fetch(SCRIPT_URL, {
      method: 'POST', mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(() => alert('პროექტი გაიგზავნა მასწავლებელთან!')).catch(e => alert("შეცდომა გაგზავნისას."));
  }
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
    triggerFireworks();
    
    // პროექტის წარმატებით დასრულების შემდეგ ავტომატურად ვრთავთ შემდეგ ეტაპზე
    setTimeout(() => {
      document.getElementById('projectModal').classList.remove('show');
      const levelSelect = document.getElementById('levelSelect');
      const currentIdx = levelSelect.selectedIndex;
      const maxIdx = levelSelect.options.length - 1;
      
      if (currentIdx < maxIdx) {
        pendingNextLevel = currentIdx + 1;
        document.getElementById('levelUpModal').classList.add('show');
        triggerStars();
      } else {
        document.getElementById('allDoneModal').classList.add('show');
      }
    }, 2000);
    
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
    const payload = {
        type: 'stats',
        name: document.getElementById('studentName').value || 'უცნობი',
        grade: document.getElementById('studentGrade').value || '-',
        wpm: Number(document.getElementById('wpm').innerText) || 0,
        accuracy: Number(document.getElementById('accuracy').innerText) || 0,
        date: new Date().toLocaleDateString('ka-GE')
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
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

// ღილაკი: მთავარ ეკრანზე დაბრუნება
const returnHomeBtn = document.getElementById('returnHomeBtn');
if (returnHomeBtn) {
  returnHomeBtn.addEventListener('click', () => {
    document.getElementById('allDoneModal').classList.remove('show');
    location.reload(); 
  });
}

// ღილაკი: სტატისტიკის ნახვა
const viewStatsBtn = document.getElementById('viewStatsBtn');
if (viewStatsBtn) {
  viewStatsBtn.addEventListener('click', () => {
    document.getElementById('allDoneModal').classList.remove('show');
    const top10Btn = document.getElementById('top10Btn');
    if (top10Btn) top10Btn.click();
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
