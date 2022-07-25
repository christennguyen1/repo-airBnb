const USER_INFOR="USER_INFOR";

export const localServe={
    setUserInfor:(data)=>{
    let json=JSON.stringify(data);
    localStorage.setItem(USER_INFOR,json);
    },
    getUserInfor:()=>{
        if(localStorage.getItem(USER_INFOR)){
            let json=localStorage.getItem(USER_INFOR);
            return JSON.parse(json);
        }
        else{
            return null;
        }
    },
    removeUserInfor:()=>{
        localStorage.removeItem(USER_INFOR);
    },
}