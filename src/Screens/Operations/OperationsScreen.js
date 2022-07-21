import { StyleSheet, useWindowDimensions, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Appbar, Caption, Colors, FAB, Headline, Title, withTheme, Text, Surface, Modal, Subheading, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import OperationsCard from '../../Components/OperationsCard';
import { consultAllMovements } from '../../DataProvider/Movements';
import ImagePickerGallery from '../../Components/ImagePickerGallery';

const OperationsScreen = ({ navigation, theme }) => {
    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const [data, setData] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const { width, height } = useWindowDimensions()
    const { colors } = theme;
    const [activeItem, setActiveItem] = useState({
        account: "",
        cantidad: 0,
        categoria: "",
        descripcion: "",
        fecha: "",
        hora: "",
        id: 0,
        tipo: "",
    })
    const [totals, setTotals] = useState({ingresos:0,gastos:0,general:0})
    const [pictures, setPictures] = useState([{ uri: 'https://picsum.photos/600' }, { uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4' }, {
        uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    },
    {
        uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    },])

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    useEffect(() => {
        calculateTotal()

        return () => {

        }
    }, [data])

    const calculateTotal=()=>{
        let egresosArray=data.filter(operation=>operation.tipo==='Gasto')
        console.log('EGRESOS',egresosArray);
        let ingresosArray=data.filter(operation=>operation.tipo==='Ingreso')
        console.log('INGRESOS',ingresosArray)
        let totalEgresos=0;
        let totalIngresos=0;
        egresosArray.forEach(operation => {
            totalEgresos+=operation.cantidad 
        });
        ingresosArray.forEach(operation => {
            totalIngresos+=operation.cantidad 
        });

        let totalGeneral=totalIngresos-totalEgresos;
        console.log('TOTAL INGRESOS',totalIngresos)
        console.log('TOTAL EGRESOS',totalEgresos)
        setTotals({ingresos:totalIngresos,gastos:totalEgresos,general:totalGeneral})


    }

    const getData = async () => {
        setIsRefreshing(true)
        let movements = await consultAllMovements();
        if (movements.executed) {
            setData(movements.rows)
            setIsRefreshing(false)
        }
        else {
            setIsRefreshing(false)
        }
    }

    const showModal = (item) => {
        setVisibleModal(true);
        setActiveItem(item)
    };
    const hideModal = () => setVisibleModal(false);


    const renderItem = ({ item }) => {
        return (
            <OperationsCard data={item} onPress={() => showModal(item)} />
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={{ backgroundColor: colors.primary, elevation: 6 }}>
                <Appbar.Header style={{ elevation: 0 }}>
                    <Appbar.Content title="Movimientos" subtitle="Consulte todos sus movimientos" />
                    <Appbar.Action icon="magnify" onPress={_handleSearch} />
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                </Appbar.Header>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: height / 4 }}>
                    <Caption style={{ color: colors.background }}>Saldo actual</Caption>

                    <Text style={{ color: colors.background, fontSize: 60 }}>${totals.general}</Text>
                    <Surface style={{ flexDirection: 'row', margin: 10, borderRadius: 10, elevation: 6 }}>
                        <View style={{ padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Ingresos totales</Text>
                            <Caption>${totals.ingresos}</Caption></View>
                        <View style={{ padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Gastos totales</Text>
                            <Caption>${totals.gastos}</Caption>
                        </View>
                        <View style={{ padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Saldo Anterior</Text>
                            <Caption>$550</Caption>
                        </View>
                    </Surface>

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList

                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    refreshing={isRefreshing}
                    onRefresh={() => getData()}
                    fadingEdgeLength={100}
                    ListHeaderComponent={<View style={{height:10}}/>}
                    ListFooterComponent={<View style={{height:100}}/>}
                />
            </View>
            <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={styles.modalcontainer}>
                <Subheading>{activeItem.tipo} en cuenta {activeItem.account}</Subheading>
                <Caption>{activeItem.fecha} {activeItem.hora}</Caption>
                <Text style={{fontSize:48}}>${activeItem.cantidad}</Text>
                <Subheading>{activeItem.categoria}</Subheading>
                <Caption>{activeItem.descripcion}</Caption>
                <ImagePickerGallery
                    title={'Fotografías'}
                    galleryPickerEnabled={false}
                    cameraPickerEnabled={false}
                    visibleGalleryRoll={true}
                    pictures={pictures}
                    handlePictures={setPictures} />
                <Button mode='contained' icon={'close-circle-outline'} style={{marginTop:20}} onPress={hideModal}>Cerrar</Button>

            </Modal>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => navigation.navigate('AddOperationsScreen')}
            />
        </View>
    )
}

export default withTheme(OperationsScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }, fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }, modalcontainer:
    {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 5
    }
})