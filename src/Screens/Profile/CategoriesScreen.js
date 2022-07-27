import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Appbar, withTheme, List, FAB, Modal, Headline, Title, Subheading, TextInput, Button, HelperText, Dialog, Paragraph } from 'react-native-paper'
import { consultCategories, delecteCategory, editCategory, insertCategory } from '../../DataProvider/Category';
import { CategorySchema } from '../../Schemas/CategorySchema';
import { Formik } from 'formik';
import * as Haptics from 'expo-haptics';


const CategoriesScreen = ({ navigation, theme }) => {
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(undefined);
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [title, setTitle] = useState({
        title: 'Agregar categoría',
        subtitle: 'Complete la Información para registrar una categoría'
    })
    useEffect(() => {
        getData();
        return () => {

        }
    }, [])

    const showDialog = () => setVisibleDialog(true);

    const hideDialog = () => setVisibleDialog(false);

    const getData = async () => {
        setIsLoading(true)
        let categories = await await consultCategories()
        let categoriesCombo = []
        categories.rows.forEach(category => {
            categoriesCombo.push({ label: category.nombreCategoria, value: category.id.toString() })
        });
        setCategoryList(categories.rows)
        setIsLoading(false)
    }

    const renderItem = ({ item }) => {
        return (
            <List.Item
                key={item.id}
                title={item.nombreCategoria}
                description={item.description}
                left={props => <List.Icon {...props} icon="file-tree" />}
                onPress={() => {
                    console.log(item.id)
                    setSelectedItem(item)
                    setTitle({
                        title: 'Editar categoría',
                        subtitle: 'Complete la Información para modificar una categoría'
                    })
                    showModal()
                }}
                onLongPress={() => {
                    setSelectedItem(item)
                    Haptics.selectionAsync()
                    showDialog()
                }
                }
            />

        )
    }

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    const handleSubmit = async (nombreCategoria, descripcionCategoria) => {
        if (selectedItem) {
            let result = await editCategory(selectedItem.id, nombreCategoria, descripcionCategoria)
            console.log(result)
            hideModal()
        } else {
            let result = await insertCategory(nombreCategoria, descripcionCategoria)
            console.log(result)
            hideModal()
        }
        getData()
    }

    const handleDelete = async () => {
        let result = await delecteCategory(selectedItem.id)
        console.log(result)
        getData()
        hideDialog()
    }

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Categorías" subtitle="Consulte, agregue o edite las categorías" />
            </Appbar.Header>
            <FlatList
                data={categoryList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshing={isLoading}
                onRefresh={() => getData()}
            />
            {!isLoading &&
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => {
                        setTitle({
                            title: 'Agregar categoría',
                            subtitle: 'Complete la Información para registrar una categoría'
                        })
                        setSelectedItem(undefined)
                        showModal()
                    }}
                />
            }
            <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                <Title>{title.title}</Title>
                <Text>{title.subtitle}</Text>
                <ScrollView contentContainerStyle={{ padding: 0 }}>
                    <Formik
                        initialValues={{ nombreCategoria: !selectedItem ? '' : selectedItem.nombreCategoria, description: !selectedItem ? '' : selectedItem.description }}
                        onSubmit={values => handleSubmit(values.nombreCategoria, values.description)}
                        validationSchema={CategorySchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, fecha, setFieldValue }) => (
                            <View>
                                <TextInput
                                    mode={"outlined"}
                                    label="Nombre de la categoría"
                                    value={values.nombreCategoria}
                                    onChangeText={handleChange('nombreCategoria')}
                                    onBlur={handleBlur('nombreCategoria')}
                                    error={errors.nombreCategoria && touched.nombreCategoria ? true : false}
                                    keyboardType={'default'}
                                    style={{ marginTop: 10 }}

                                />
                                {errors.nombreCategoria && touched.nombreCategoria ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.nombreCategoria}
                                    </HelperText>
                                ) : null}

                                <TextInput
                                    mode='outlined'
                                    label="Descripción de la categoría"
                                    value={values.description}
                                    onChangeText={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    error={errors.description && touched.description ? true : false}
                                    style={{ marginTop: 10 }}

                                />
                                {errors.description && touched.description ? (
                                    <HelperText type="error" visible={true}>
                                        {errors.description}
                                    </HelperText>
                                ) : null}



                                <Button mode='contained' onPress={handleSubmit} style={{ marginTop: 10 }}>
                                    Confirmar
                                </Button>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </Modal>
            <Dialog visible={visibleDialog} onDismiss={hideDialog}>
                <Dialog.Title>Eliminar Categoria</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>¿Desea elminar esta categoría?</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Cancelar</Button>
                    <Button onPress={() => handleDelete()}>Confirmar</Button>
                </Dialog.Actions>
            </Dialog>

        </View>
    )
}

export default withTheme(CategoriesScreen)

const styles = StyleSheet.create({
    container: { flex: 1 },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10
    }
})