/**
 * Este Archivo contiene operaciones globales de la base de datos local
 */
import * as SQLite from "expo-sqlite";


/**
 * Función que abre la base de datos local
 * @returns instancia de la base de datos a usar
 */
const openDatabase = () => {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => { },
                };
            },
        };
    }
    console.log('[LOG] Abriendo base de datos: ')
    const db = SQLite.openDatabase("gastosdiarios.db");
    return db;
}

/**
 * Funcion para listar las tablas en la base de datos
 * @returns Listado de las tablas creadas en la base de datos
 */
export const showAllTables = async () => {
    const db = openDatabase();
    return new Promise(resolve => {
        try {
            console.log('[LOG] Obteniendo lista de tablas locales de ' + db._db._name)
            db.transaction(
                tx => {
                    tx.executeSql("SELECT name FROM sqlite_master WHERE type='table'", [], (_, { rows }) => {
                        resolve(rows._array);
                    }
                    );
                },
                null,
                null
            );
            //
        } catch (error) {
            console.log('[Error] No fue posible abrir la base de datos ' + error);
        }
    });
}


/**
 * Función que crea la base de datos de la aplicación
 * Es necesario que se defina un array de objetos con las tablas a crear
 */
export const createDatabase = async () => {
    let tables = [{
        name: 'category',
        query: 'create table if not exists category (id integer primary key not null, nombreCategoria text,icon text,description text);'
    },
    {
        name: 'account',
        query: 'create table if not exists account (id integer primary key not null, nombreCuenta text,description text);'
    },
    {
        name: 'info',
        query: 'create table if not exists info (id integer primary key not null, version text);'
    },
    {
        name: 'movement',
        query: 'create table if not exists movement (id integer primary key not null, account integer,cantidad real,categoria integer,descripcion text,fecha text,hora text,tipo text);'
    }
    ];

    let promiseArray = [];
    const db = openDatabase();
    tables.forEach(table => {
        promiseArray.push(new Promise(resolve => {
            try {
                console.log('[LOG] Creando tabla ', table.name)
                db.transaction(
                    tx => {
                        tx.executeSql(table.query, [], (_, { rows }) => {
                            resolve({ table: table.name, executed: true });
                        },(error=>console.log(error))
                        );
                    },
                    null,
                    null
                );

            } catch (error) {
                console.log('[ERROR] Ocurrio un error al ejecutar la operación' + error);
            }
        }, reject => {
            reject({ table: table.name, executed: false })
        }));
    })

    await Promise.all(promiseArray).then(result => {
        console.log('[LOG] Resultado de la creación de las tablas', result)
    }).catch(error => {
        console.log('[Error] Se genero un error al crear la base de datos', error)
    });
}

/**
 * Funcion que ejecuta un query arbitrario
 * @returns 
 */
export const executeSQL = async (query, values) => {
    const db = openDatabase();
    console.log('[LOG] Ejecutando query:',query)
    return new Promise(resolve => {
        try {
            db.transaction(
                tx => {
                    tx.executeSql(query, values, (_, { rows }) => {
                        console.log(JSON.stringify(rows))
                        resolve(rows._array);
                    }
                    ),(txObj, error) => console.log('Error ', error);
                },
                null,
                null
            );
        } catch (error) {
            console.log('[Error] Error ejecutando el query:' + error);
        }
    });
}

