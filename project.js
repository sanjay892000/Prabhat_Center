let signbtn=document.getElementById('signbtn');
let signupbtn=document.getElementById('signupbtn');
signbtn.addEventListener('click', clicksignbtn);
signupbtn.addEventListener('click', clickSignupBtn)

function clicksignbtn(e){
    console.log('im signbtn',e);
    e.preventdefault();
}
function clickSignupBtn(e){
    console.log('im a signupbtn',e);
    e.preventdefault();

}