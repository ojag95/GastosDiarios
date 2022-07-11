import { executeSQL} from "../Utils/Database/Database";


export const addBaseCategories=async()=>{
    let query='Insert into category (id,nombreCategoria,icon,description) values(?,?,?,?);'
    let data=[  
                [1,'Sueldo', '', 'Ingresos por su sueldo'],
                [2,'Ventas', '', 'Ingresos por ventas'],
                [3,'Pago de prestamo', '', 'Ingresos por el pago de un prestamo']
            ]
    
    data.forEach(category=>{
        executeSQL(query,category);
    })
        
}

export const consultCategories=async()=>{
    let query='SELECT * FROM category;'
    let data=[];
    let result=await executeSQL(query,data);
    console.log(result)
    return result;
}