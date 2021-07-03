window.onload = ()=>{
  const el = document.getElementsByClassName('p-loading');
  const delay = el[0].dataset.delay * 1000;
  console.log(delay);
  setTimeout(function(){
    for(let i = 0; i < el.length; i ++){
      el[i].classList.remove('is-loading');
    }
  },delay)
}