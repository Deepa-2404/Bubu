function showAll() {
  document.querySelectorAll('.item').forEach(e => e.style.display ='block');
}
    function showCategory(cat){
        document.querySelectorAll('.item').forEach(e=>{
            e.style.display=e.classList.contains(cat) ? 'block':'none';
        });
    }