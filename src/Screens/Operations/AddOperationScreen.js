import { ScrollView, StyleSheet, Text, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Button, TextInput, HelperText, IconButton, Modal } from 'react-native-paper'
import { Formik } from 'formik';
import { OperationsSchema } from '../../Schemas/OperationSchema';
import DropDown from "react-native-paper-dropdown";
import Calculator from '../../Components/Calculator';



const AddOperationScreen = ({ navigation, route }) => {
    const [showTypeDropDown, setShowTypeDropDown] = useState(false);
    const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const genderList = [
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Others",
            value: "others",
        },
    ];

    const showModal = () => {
        Keyboard.dismiss()
        setVisible(true);
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
                        initialValues={{ cantidad: '', tipo: '', categoria: '', descripcion: '' }}
                        onSubmit={values => console.log(values)}
                        validationSchema={OperationsSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                            <View>

                                <TextInput
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
                                    mode={"flat"}
                                    visible={showTypeDropDown}
                                    showDropDown={() => setShowTypeDropDown(true)}
                                    onDismiss={() => setShowTypeDropDown(false)}
                                    value={values.tipo}
                                    setValue={handleChange('tipo')}
                                    list={genderList}
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
                                    mode={"flat"}
                                    visible={showCategoryDropDown}
                                    showDropDown={() => setShowCategoryDropDown(true)}
                                    onDismiss={() => setShowCategoryDropDown(false)}
                                    value={values.categoria}
                                    setValue={handleChange('categoria')}
                                    list={genderList}
                                    style={{ marginTop: 10 }}
                                    onBlur={handleBlur('categoria')}
                                />
                                {errors.categoria && touched.categoria ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.categoria}
                                    </HelperText>
                                ) : null}

                                <TextInput
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
                                <Button mode='contained' onPress={handleSubmit} style={{ marginTop: 10 }}
                                >
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
    modalContainer: { backgroundColor: 'white', margin:10, borderRadius:5,overflow:'hidden' }
})