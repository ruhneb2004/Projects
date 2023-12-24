const inputData = document.getElementById('input-box');
const outputList = document.getElementById('activity-list')
const resultContainer = document.querySelector('.result-container');
function postInputToPage () {
  document.getElementById('add-button')
  .addEventListener('click',() => {
    if (inputData.value.trim() === '') {
      alert('Cannot add blank tasks!')
    }
    else {
      appendListData();
    }
  })
  document.getElementById('input-box')
    .addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && inputData.value.trim() !== '') {
        appendListData();
      }
    })
}

function appendListData () {
  outputList.innerHTML += `<li>${inputData.value} <span>\u00d7</span> </li>`
  saveData();
    inputData.value='';
}

postInputToPage();

//THIS PART OF THE CODE IS PRETTY NEW TO ME

resultContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
})
function saveData () {
  localStorage.setItem('dataList',outputList.innerHTML);
}
function getData () {
  outputList.innerHTML= localStorage.getItem('dataList');
}
getData();