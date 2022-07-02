import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Appbar, Caption, Colors, FAB, Headline, Title, withTheme, Text, Surface } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import OperationsCard from '../../Components/OperationsCard';

const OperationsScreen = ({ navigation, theme }) => {
    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const { width, height } = useWindowDimensions()
    const { colors } = theme;
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

                    <Text style={{ color: colors.background, fontSize: 60 }}>$350</Text>
                    <Surface style={{ flexDirection: 'row', margin: 10, borderRadius: 10, elevation: 6 }}>
                        <View style={{ padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Ingresos totales</Text>
                            <Caption>$350</Caption></View>
                        <View style={{ padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Gastos totales</Text>
                            <Caption>$150</Caption>
                        </View>
                        <View style={{ padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Saldo Anterior</Text>
                            <Caption>$550</Caption>
                        </View>
                    </Surface>

                </View>
            </View>
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
    },
})