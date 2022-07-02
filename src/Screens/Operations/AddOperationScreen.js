import { ScrollView, StyleSheet, Text, View, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Appbar, Button, TextInput, HelperText, IconButton, Modal } from 'react-native-paper'
import { Formik } from 'formik';
import { OperationsSchema } from '../../Schemas/OperationSchema';
import DropDown from "react-native-paper-dropdown";
import Calculator from '../../Components/Calculator';
import { obtenerValoresCategory } from '../../Utils/Database/Database';
import { consultCategories } from '../../DataProvider/Category';
import { consultAccounts } from '../../DataProvider/Accounts';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/es-mx' // ES 2015 

dayjs.locale('es-mx')

const AddOperationScreen = ({ navigation, route }) => {
    const [showTypeDropDown, setShowTypeDropDown] = useState(false);
    const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
    const [showAccountDropDown, setShowAccountDropDown] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [accountList, setAccountList] = useState([]);
    const [date, setDate] = useState(new Date())
    const [visibleDatePicker, setVisibleDatePicker] = useState(false)
    const [datePickerMode, setDatePickerMode] = useState('date')
    const typeList = [{
        label: 'Ingreso',
        value: 'Ingreso'
    },
    {
        label: 'Gasto',
        value: 'Gasto'
    }
    ]

    useEffect(() => {
        getData();

        return () => {

        }
    }, [])

    const getData = async () => {
        let categories = await await consultCategories()
        let accounts = await await consultAccounts()
        console.log('CATEGORIAS', categories)
        console.log('Cuentas', accounts)
        let categoriesCombo = []
        categories.forEach(category => {
            categoriesCombo.push({ label: category.nombreCategoria, value: category.id.toString() })
        });
        let accountsCombo = []
        accounts.forEach(account => {
            accountsCombo.push({ label: account.nombreCuenta, value: account.id.toString() })
        });
        setAccountList(accountsCombo)
        setCategoryList(categoriesCombo)
    }

    const showModal = () => {
        Keyboard.dismiss()
        setVisible(true);
    }

    const showDatePicker = (mode) => {
        console.log('mode', mode)
        Keyboard.dismiss()
        setDatePickerMode(mode)
        setVisibleDatePicker(true)
    }

    const handleSelectedDate = (event, date) => {
        Keyboard.dismiss()
        setVisibleDatePicker(false)
        var fecha = dayjs(date.toString());
        let resultDate = fecha.format('DD/MM/YYYY', 'es-mx')
        return resultDate
    }

    const handleSelectedTime = (event, date) => {
        Keyboard.dismiss()
        setVisibleDatePicker(false)
        var time = dayjs(date.toString());
        let resultTime = time.format('hh:mm a', 'es-mx')
        return resultTime
    }



    const handleDateFormat = () => {

    }

    const hideModal = () => setVisible(false);


    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Agregar Movimiento" subtitle="Agregue un movimiento nuevo" />
            </Appbar.Header>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 10 }}>
                    <Formik
                        initialValues={{ cantidad: '', tipo: '', categoria: '', descripcion: '', account: '', fecha: '', hora: '' }}
                        onSubmit={values => console.log(values)}
                        validationSchema={OperationsSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, fecha, setFieldValue }) => (
                            <View>

                                <TextInput
                                    mode={"outlined"}
                                    label="Cantidad"
                                    value={values.cantidad}
                                    onChangeText={handleChange('cantidad')}
                                    onBlur={handleBlur('cantidad')}
                                    error={errors.cantidad && touched.cantidad ? true : false}
                                    keyboardType={'decimal-pad'}
                                    style={{ marginTop: 10 }}
                                    right={<TextInput.Icon name="calculator" onPress={() => showModal()} />}

                                />
                                {errors.cantidad && touched.cantidad ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.cantidad}
                                    </HelperText>
                                ) : null}
                                <View style={{ marginTop: 10 }} />
                                <DropDown
                                    label={"Tipo"}
                                    mode={"outlined"}
                                    visible={showTypeDropDown}
                                    showDropDown={() => setShowTypeDropDown(true)}
                                    onDismiss={() => setShowTypeDropDown(false)}
                                    value={values.tipo}
                                    setValue={handleChange('tipo')}
                                    list={typeList}
                                    style={{ marginTop: 10 }}
                                    onBlur={handleBlur('tipo')}
                                />
                                {errors.tipo && touched.tipo ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.tipo}
                                    </HelperText>
                                ) : null}
                                <View style={{ marginTop: 10 }} />

                                <DropDown
                                    label={"Categoría"}
                                    mode={"outlined"}
                                    visible={showCategoryDropDown}
                                    showDropDown={() => setShowCategoryDropDown(true)}
                                    onDismiss={() => setShowCategoryDropDown(false)}
                                    value={values.categoria}
                                    setValue={handleChange('categoria')}
                                    list={categoryList}
                                    style={{ marginTop: 10 }}
                                    onBlur={handleBlur('categoria')}
                                />
                                {errors.categoria && touched.categoria ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.categoria}
                                    </HelperText>
                                ) : null}


                                <View style={{ marginTop: 10 }} />

                                <DropDown
                                    label={"Cuenta"}
                                    mode={"outlined"}
                                    visible={showAccountDropDown}
                                    showDropDown={() => setShowAccountDropDown(true)}
                                    onDismiss={() => setShowAccountDropDown(false)}
                                    value={values.account}
                                    setValue={handleChange('account')}
                                    list={accountList}
                                    style={{ marginTop: 10 }}
                                    onBlur={handleBlur('account')}
                                />
                                {errors.account && touched.account ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.account}
                                    </HelperText>
                                ) : null}


                                <TextInput
                                    mode='outlined'
                                    label="Descripción"
                                    value={values.descripcion}
                                    onChangeText={handleChange('descripcion')}
                                    onBlur={handleBlur('descripcion')}
                                    error={errors.descripcion && touched.descripcion ? true : false}
                                    style={{ marginTop: 10 }}

                                />
                                {errors.descripcion && touched.descripcion ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.descripcion}
                                    </HelperText>
                                ) : null}
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginRight: 5 }}>
                                        <TextInput
                                            mode='outlined'
                                            label="Fecha"
                                            value={values.fecha}
                                            onChangeText={handleChange('fecha')}
                                            onBlur={handleBlur('fecha')}
                                            error={errors.fecha && touched.fecha ? true : false}
                                            style={{ marginTop: 10 }}
                                            right={<TextInput.Icon name="calendar" onPress={() => showDatePicker('date')} />}

                                        />
                                        {errors.fecha && touched.fecha ? (
                                            <HelperText type="error" visible={true}>
                                                {errors.fecha}
                                            </HelperText>
                                        ) : null}
                                    </View>
                                    <View style={{ flex: 1, marginLeft: 5 }}>
                                        <TextInput
                                            mode='outlined'
                                            label="Hora"
                                            value={values.hora}
                                            onChangeText={handleChange('hora')}
                                            onBlur={handleBlur('hora')}
                                            error={errors.hora && touched.hora ? true : false}
                                            style={{ marginTop: 10 }}
                                            right={<TextInput.Icon name="clock" onPress={() => showDatePicker('time')} />}

                                        />
                                        {errors.hora && touched.hora ? (
                                            <HelperText type="error" visible={true}>
                                                {errors.hora}
                                            </HelperText>
                                        ) : null}
                                    </View>
                                </View>

                                {visibleDatePicker &&
                                    <DateTimePicker
                                        mode={datePickerMode}
                                        value={date}
                                        locale="es-MX"
                                        onChange={(event, date) => {
                                            if (datePickerMode === 'date') {
                                                let formatedDate = handleSelectedDate(event, date);
                                                setFieldValue('fecha', formatedDate);
                                            } else {
                                                let formatedTime = handleSelectedTime(event, date);
                                                setFieldValue('hora', formatedTime);
                                            }

                                        }} />
                                }
                                <Button mode='contained' onPress={handleSubmit} style={{ marginTop: 10 }}>
                                    Confirmar
                                </Button>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
                <Calculator />
            </Modal>
        </View>
    )
}

export default AddOperationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    modalContainer: { backgroundColor: 'white', margin: 10, borderRadius: 5, overflow: 'hidden' }
})