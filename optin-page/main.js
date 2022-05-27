let randomCode=['credit-cartel/b15','credit-cartel/za2','credit-cartel/5la',
'credit-cartel/rf1','credit-cartel/h55','credit-cartel/y89','credit-cartel/w52',
'credit-cartel/x24'
,'credit-cartel/q32','credit-cartel/u69','credit-cartel/n67','credit-cartel/m98',
'credit-cartel/c20','credit-cartel/d44','credit-cartel/j80','credit-cartel/t11',
'credit-cartel/v07','credit-cartel/r37','credit-cartel/i26','credit-cartel/f19'];

const referralInput=document.querySelector('.referral');
const submitBtn=document.querySelector('.header-btn')

const invalidInput=document.querySelector('.invalid');
const scriptURL = 'https://script.google.com/macros/s/AKfycbyVLkM-XztLihYZm3CnX3D4ZImJ98E5r4e9OpqGKZrOYXxHN8XRzs4P20KvyKwcjKWa/exec'
const form = document.forms['google-sheet']
 referralInput.addEventListener('mouseleave',function(){
     if(randomCode.includes(referralInput.value)){
      
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response=>console.log('success',response)).catch(error=>console.log("error",error))
            document.forms['google-sheet'].reset()
            setTimeout(() => {
                window.location.href='./../thankyou-page/index.html'
            }, 1000);
        })
        
   }else if(referralInput.value!=''){
         invalidInput.innerHTML='invalid referral code';
   }
 })