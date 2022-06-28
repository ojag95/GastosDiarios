import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, FAB } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import OperationsCard from '../../Components/OperationsCard';


const OperationsScreen = ({navigation}) => {
    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Appbar.Header>
                <Appbar.Content title="Movimientos" subtitle="Consulte todos sus movimientos" />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
            <View>
                <OperationsCard />
                <OperationsCard />

                <OperationsCard />

                <OperationsCard />

            </View>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => navigation.navigate('AddOperationsScreen')}
            />
        </View>
    )
}

export default OperationsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }, fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})