import { executeSQL } from "../Utils/Database/Database"

export const insertMovement = async (account, cantidad, categoria, descripcion, fecha, hora, tipo) => {
    let query = 'Insert into movement ( account,cantidad,categoria,descripcion,fecha,hora,tipo) values(?,?,?,?,?,?,?);'
    let data = [account, cantidad, categoria, descripcion, fecha, hora, tipo];
    let result = await executeSQL(query, data);
    console.log(result)
    return result;
}

export const consultAllMovements = async () => {
    let query = 'select m.id,a.nombreCuenta as account,m.cantidad,c.nombreCategoria as categoria,m.descripcion,m.fecha,m.hora,m.tipo from movement as m inner join account as a on m.account=a.id inner join category as c on m.categoria= c.id order by m.fecha desc, m.hora desc ;'
    let data = [];
    let result = await executeSQL(query, data);
    console.log(result)
    return result;
}