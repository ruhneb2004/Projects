
const addBtn = document.getElementById('add-btn');
const inputBox = document.querySelector('.input-box');
const noteContent = document.querySelector('.note-content');
const appContainer = document.querySelector('.container');
const showNote = document.querySelector('.show-note');
let newSavedNoteContainerHTML = '';
let lastKeyPressedTime = 0;

function mainStructure () {
  inputBoxFun();
  saveNote();
  removeSavedNote();
  viewNote();
};

function inputBoxFun () {
inputBox.addEventListener('click',setUp);
}

function setUp () {
  if (inputBox.innerText === 'take notes...') {
    inputBox.innerText = '';
    }
    inputBox.setAttribute('id','black-font');
}
function saveNote () {
  addBtn.addEventListener('click',assignVariable);
  inputBox.addEventListener('keydown',(e) => {
    doubleClickHandler(300,assignVariable,'Meta',e);
    setUp();
  })
}

function assignVariable () {
    if (inputBox.innerText.trim() !== '' && inputBox.innerText !== 'take notes...') {
      const newSavedNoteContainer = document.createElement('div');
      noteContent.append(newSavedNoteContainer);
      newSavedNoteContainer.classList.add('saved-note-container');
      const newSavedNote = document.createElement('div');
      newSavedNote.classList.add('saved-note');
      newSavedNoteContainer.appendChild(newSavedNote);
      const xBtn = document.createElement('button');
      xBtn.classList.add('x-btn');
      xBtn.innerHTML='X';
      newSavedNoteContainer.appendChild(xBtn);

      newSavedNote.innerHTML= inputBox.innerHTML;

      inputBox.innerHTML = 'take notes...';
      inputBox.removeAttribute('id','black-font');
      console.log(newSavedNoteContainerHTML);


    } else {
      alert('There is no content in the note. Please type some content before adding the note.')
    };
}

function removeSavedNote () {
  noteContent.addEventListener('click',(e) => {
    if (e.target.tagName === 'BUTTON') {
      e.target.parentNode.remove();
    }
  })
};

function viewNote () {
  noteContent.addEventListener('click',(e) => {
    if (e.target.classList.contains('saved-note')) {

      showNote.innerText = e.target.innerText;
      const createImg = document.createElement('img');
      createImg.setAttribute('src','images/close-icon.png');
      createImg.setAttribute('id','close-icon');

      const showNoteContent = document.createElement('div');
      showNoteContent.classList.add('show-note-content');
      showNote.appendChild(showNoteContent);

      showNote.appendChild(createImg);
      showNote.classList.remove('hide-note');
      closeNote();
    }
  })
}
function closeNote () {
  const closeBtn = document.getElementById('close-icon');
  if (closeBtn) {
    closeBtn.addEventListener('click',() => {
      showNote.classList.add('hide-note')
    })
  }
}

function doubleClickHandler (delay,fun,keyAssigned,e) {
    const currentTime = new Date().getTime();
    if (currentTime - lastKeyPressedTime <= delay && e.key === keyAssigned) {
      fun();
    }
    lastKeyPressedTime = currentTime;
};
mainStructure();