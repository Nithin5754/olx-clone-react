


export const validateForm=(email,password)=>{
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if(email.trim().length === 0 || password.trim().length === 0 ){
    return "Space not allowed";
}

console.log(emailRegex,"isvalid");
  if(!emailRegex)return "invalid email" 
  if(!passwordRegex) return "invavalid password"




}