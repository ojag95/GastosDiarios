import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useEffect, useState,useContext } from 'react'
import LottieView from 'lottie-react-native';
import { Headline, withTheme, ProgressBar, Colors, Caption, FAB } from 'react-native-paper';
import { addBaseAccounts, consultAccounts } from '../../DataProvider/Accounts';
import { addBaseCategories, consultCategories } from '../../DataProvider/Category';
import { createDatabase, showAllTables } from '../../Utils/Database/Database';
import { OnBoardingContext } from '../../Context/OnboardingContext';

const InitializingScreen = ({ theme }) => {
    let {setOnBoardingNoVisible} = useContext(OnBoardingContext);
    const { colors } = theme;
    const animation = useRef(null);
    const [progress, setProgress] = useState({ progress: 0, currentTask: 'Creando base de datos...' })

    useEffect(() => {
        handleDatabaseCreation()

        return () => {

        }
    }, [])


    const handleDatabaseCreation = async () => {
        //Paso 1: Creación de Tablas de base de datos
        let resultCreatedTables = await createDatabase();
        let erroredTables = resultCreatedTables.filter(table => !table.executed);
        if (erroredTables.length > 0) {
            alert('hubo un error')
        } else {
            setProgress({ progress: 0.3, currentTask: 'Verificando Integridad...' })
        }

        //Paso 2 Consulta de base de datos
        let result = await showAllTables();

        //TODO agregar funcion que evalue las tablas creadas con las existentes
        console.log(result)


        setProgress({ progress: 0.6, currentTask: 'Agregando listado de cuentas...' })
        let accounts = await consultAccounts()
        console.log('Accounts Final', accounts)
        if (!accounts.rows.length > 0) {
            let resultAccount = await addBaseAccounts()
            console.log('Accounts created', resultAccount)
        }

        setProgress({ progress: 0.8, currentTask: 'Agregando listado de cuentas...' })

        let category = await consultCategories()
        console.log('Categories Final', category)
        if (!category.rows.length > 0) {
            let resultCategories = await addBaseCategories()
            console.log('Categories created', resultCategories)
        }

        setProgress({ progress: 1, currentTask: 'Agregando listado de categorías...' })

        setProgress({ progress: 1, currentTask: 'Listo!' })


    }

    return (
        <View style={styles.container} >
            <Headline>
                Inicializando App
            </Headline>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#ffff',
                }}
                source={require('../../../assets/Lotties/text-loading.json')}
            />
            <View style={{ width: '80%', marginVertical: 10 }}>
                <ProgressBar progress={progress.progress} color={colors.accent} />
            </View>
            <Caption>{progress.currentTask}</Caption>

            {progress.currentTask === 'Listo!' &&
                <FAB
                    style={styles.fab}
                    small={false}
                    icon="arrow-right"
                    animated
                    onPress={()=>setOnBoardingNoVisible()}
                />
            }
        </View>
    )
}

export default withTheme(InitializingScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fab: {
        position: 'absolute',
        margin: 20,
        bottom: 0,
    },
})