function validateForm() {
const f=document.member;

/* 이름 */
const name=document.forms["member"]["name"].value;
if (name==null || name=="") {
    alert("Name을 입력하세요");
    return false;
}


/* 아이디 */
const reg_exp1=new RegExp("^(?=.*[a-z])(?=.*[0-9]).{6,12}$");
const id=reg_exp1.exec(f.id.value);
if(id==null) {
    alert("6~12자의 영문자, 숫자를 혼합하여 입력하세요.");
    return false;
}


/* 비밀번호 */
const reg_exp2=new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{4,15}$");
const pass=reg_exp2.exec(f.pass.value);
if(pass==null) {
    alert("4~15자의 영문 대/소문자, 숫자와 특수기호를 포함해서 입력하세요.");
    return false;
}

const pw=document.forms["member"]["pass"].value;
const cp=document.forms["member"]["confirm_pass"].value;
if (pw!=cp)
{
  alert("비밀번호가 일치하지 않습니다.");
  return false;
}


/* 전화번호 */
const reg_exp3=new RegExp("^[0-9]{11}$");
const phone=reg_exp3.exec(f.tel.value); 
if(phone==null) {
    alert("하이픈(-)을 제외한 11자리의 전화번호를 입력해주세요");
    return false;
}

const p=document.forms["member"]["tel"].value;
if (p==null || p=="")
{
  alert("전화번호를 입력하세요");
  return false
}


/* 이메일 */
const e=document.forms["member"]["email"].value;
if (e==null || e=="")
{
  alert("Email을 입력하세요");
  return false;
}


/* 주소 */
const a=document.forms["member"]["address"].value;
if (a==null || a=="")
{
  alert("Address을 입력하세요");
  return false;
}

}