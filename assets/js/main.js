let count =document.querySelector('input').value;

const plus =document.querySelector('.plus');
const minus =document.querySelector('.minus');
plus.addEventListener('click',function(){
    if(document.querySelector('input[name="quantity"]').value <100){
    count++;
    document.querySelector('input[name="quantity"]').value =count;} 
})
minus.addEventListener('click',function(){
   if(document.querySelector('input[name="quantity"]').value > 1){
    count--;
    document.querySelector('input[name="quantity"]').value =count;
   }
})

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counter");
let started = false; // Function Started ? No
console.log(section)
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {

    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
let subimg = document.querySelectorAll('.sub-img');
for(let i =0 ;i < subimg.length;i++){
  subimg[i].addEventListener('click',function(){
    const src=subimg[i].getAttribute('src');
    document.querySelector('.main-img').setAttribute('src',src);
  })

}

$(".sub-img").click(function(){
  const src=$(this).attr('src')
  $('.main-img').attr('src',src);
})
