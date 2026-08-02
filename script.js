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
    { name: 'ეტაპი 2: სიტყვები', data: ['სკოლა', 'წიგნი', 'ბურთი', 'მასწავლებელი', 'მზე', 'მთვარე', 'ცოდნა', 'კომპიუტერი', 'კლავიატურა', 'საქართველო', 'თბილისი', 'მეგობარი', 'მოსწავლე', 'გაკვეთილი', 'მუსიკა', 'ისტორია'] },
    { name: 'ეტაპი 3: ტექსტები', data: [
      'მე ვსწავლობ ბეჭდვას ათი თითით. ეს ძალიან სახალისოა!',
      'კლავიატურაზე მუშაობა ძალიან საინტერესოა, თუ სწორად იყენებ თითებს.',
      'სწრაფი ბეჭდვა დროის დაზოგვის საუკეთესო საშუალებაა თანამედროვე სამყაროში.',
      'ინტერნეტი და ტექნოლოგიები გვეხმარება ახალი ცოდნის მიღებაში.'
    ] }
  ],
  en: [
    { name: 'Stage 1: Letters', data: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] },
    { name: 'Stage 2: Words', data: ['school', 'book', 'ball', 'teacher', 'sun', 'moon', 'knowledge', 'computer', 'keyboard', 'friend', 'student', 'lesson', 'music', 'history', 'georgia', 'tbilisi'] },
    { name: 'Stage 3: Texts', data: [
      'I am learning to type with ten fingers. It is very fun!',
      'Working on the keyboard is very interesting if you use your fingers correctly.',
      'Fast typing is the best way to save time in the modern world.',
      'The internet and technologies help us gain new knowledge.'
    ] }
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
  const level = levels[lang][levelIndex];
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
    let res = [];
    for(let i=0; i<10; i++) {
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
  document.querySelectorAll('.key.highlight, .finger.active').forEach(el => {
    el.classList.remove('highlight', 'active');
  });
  
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
      if (shiftEl) shiftEl.classList.add('highlight');
      const sFinger = document.getElementById(`finger-${shiftFinger}`);
      if (sFinger) sFinger.classList.add('active');
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
  let timeDiff = startTime ? (now - startTime) / 1000 / 60 : 0.01;
  if (timeDiff === 0) timeDiff = 0.01;
  
  const wordsTyped = totalTyped / 5;
  const wpm = Math.round(wordsTyped / timeDiff);
  const accuracy = totalTyped === 0 ? 100 : Math.round(((totalTyped - errors) / totalTyped) * 100);
  
  document.getElementById('wpm').innerText = wpm > 0 ? wpm : 0;
  document.getElementById('accuracy').innerText = Math.max(0, accuracy);
  document.getElementById('score').innerText = Math.max(0, (totalTyped * 10) - (errors * 20));
}

function showModal() {
  const acc = totalTyped === 0 ? 100 : Math.round(((totalTyped - errors) / totalTyped) * 100);
  const now = new Date();
  let timeDiff = (now - startTime) / 1000 / 60;
  if (timeDiff === 0) timeDiff = 0.01;
  const wpm = Math.round((totalTyped / 5) / timeDiff);
  
  document.getElementById('modalWpm').innerText = wpm;
  document.getElementById('modalAccuracy').innerText = acc;
  
  let stars = '⭐';
  if (acc >= 90) stars = '⭐⭐';
  if (acc >= 95 && wpm > 15) stars = '⭐⭐⭐';
  document.getElementById('modalStars').innerText = stars;
  
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
  
  currentLang = document.getElementById('langSelect').value;
  document.body.setAttribute('data-lang', currentLang);
  
  currentLevel = parseInt(document.getElementById('levelSelect').value);
  
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

  targetText = generateText(currentLang, currentLevel);
  
  updateStats();
  
  const display = document.getElementById('textDisplay');
  display.innerHTML = '';
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
    
    currentIndex++;
    totalTyped++;
    
    if (currentIndex < targetText.length) {
      document.getElementById(`char-${currentIndex}`).classList.add('current');
      highlightNextKey();
    } else {
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
