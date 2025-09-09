const container=document.querySelector('.container')
const box=document.querySelector('.box')
const errorr=document.querySelector('.error')
const nextBtn=document.querySelector('.nextBtn')
const tweetBtn=document.querySelector('.tweetBtn')
const copyBtn=document.querySelector('.copyBtn')
const start=document.querySelector('.start')
const copied=document.querySelector('.copied')
let currentAdvice;
let url=`https://api.adviceslip.com/advice`
  async function fetchAdvice(){

    start.style.display='none'
    box.innerHTML='Loading advice... ⌛'
    try {
         const res= await fetch(url)
         const data= await res.json();
         console.log(data);
         nextBtn.innerHTML='Get Next'
         currentAdvice=data.slip.advice;
         box.innerHTML=`"${currentAdvice}"`;
         copyBtn.style.display='inline-block'
         tweetBtn.style.display='inline-block'
        
        
    } catch (error) {
        errorr.innerHTML="Failed to fetch advice. Try again!";
    }

  } 

  function tweetAdvice() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentAdvice)}`;
  window.open(twitterUrl, "_blank");
}
  function copyAdvice(){
    navigator.clipboard.writeText(currentAdvice).then(()=>{
        copied.style.display='block'

        setTimeout(()=>{
            copied.style.display='none';
        },1500)
    })
  }
 nextBtn.addEventListener('click',fetchAdvice)
 copyBtn.addEventListener("click", copyAdvice);
 tweetBtn.addEventListener("click", tweetAdvice);
