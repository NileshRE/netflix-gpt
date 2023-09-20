

export const checkValidData =(email, password)=>{

    const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValid) return "Email is invalid!!";
    if(!passwordValid) return "Password should have 8 characters with atleast one capital, symbol & numeric value.";

    return null;
};
