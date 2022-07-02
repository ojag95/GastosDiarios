import { executeSQL} from "../Utils/Database/Database";

export const addBaseAccounts=async()=>{
    let query='Insert into account (id,nombreCuenta,description) values(?,?,?);'
    let data=[1, 'Principal','Cuenta Principal'];
    let result =await executeSQL(query,data);
    console.log(result);
    return result;
}

export const consultAccounts=async()=>{
    let query='SELECT * FROM account;'
    let data=[];
    let result=await executeSQL(query,data);
    console.log(result)
    return result;
}