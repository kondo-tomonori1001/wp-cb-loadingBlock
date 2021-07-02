window.onload = ()=>{
  setTimeout(function(){
    const el = document.getElementsByClassName('p-loading');
    for(let i = 0; i < el.length; i ++){
      el[i].classList.remove('is-loading');
    }
  },4000)
}