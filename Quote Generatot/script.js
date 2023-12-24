let quoteEl = document.querySelector('.quote-box');
let authorEl = document.querySelector('.author');
const btn = document.querySelector('.btn1');
const genNewQuote = async () => {
  try{
  const res = await fetch("https://api.quotable.io/random")
  const data = await res.json();
  
  if(!res.ok) {
    console.log(data.description);
    return
  }
  quoteEl.innerText = '"'+data.content+'"';
  authorEl.innerText = "-"+data.author;
  }
  catch(error) {
    console.log(error);
  }
}
btn.addEventListener('click',genNewQuote);
