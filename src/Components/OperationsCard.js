import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Caption, Subheading, Surface, Title, TouchableRipple, withTheme ,Text,} from 'react-native-paper'
import Colors from '../Constants/Colors';

const OperationsCard = ({theme,data, onPress}) => {
    const {account,cantidad,categoria,descripcion,fecha,hora,tipo}=data;
    const {colors}=theme;
    return (
        <TouchableRipple
            borderless={true}
            onPress={() => onPress()}
            rippleColor="rgba(0,169,164,0.32)"
            style={styles.rippleContainer}
        >
            <Surface style={styles.card}>
                <View style={[styles.operationIndicator, tipo==='Ingreso'?{backgroundColor: Colors.Green}:{backgroundColor: Colors.Red}]} />
                <View style={styles.container}>
                    <View style={styles.operationDetails}>
                        <Subheading>Cuenta {account}</Subheading>
                        <Text style={{fontWeight:'bold'}}>{categoria}</Text>
                        <Text numberOfLines={1}>{descripcion}</Text>
                        <Caption numberOfLines={1}>{fecha} {hora}</Caption>
                    </View>
                    <View style={styles.operationAmount}>
                        <Title numberOfLines={1}>{tipo==='Ingreso'?'+':'-'}${cantidad}</Title>
                    </View>
                </View>
            </Surface>
        </TouchableRipple>
    )
}

export default withTheme(OperationsCard)

const styles = StyleSheet.create({
    card: {
        paddingRight: 10,
        flexDirection: 'row',
    },
    operationIndicator: {
        height: 105,
        width: 12,
        marginRight: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    operationDetails: {
        flex: 2
    },
    operationAmount: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rippleContainer:{ 
        marginHorizontal: 10,
        marginVertical:5, 
        elevation: 6, 
        overflow: 'hidden', 
        borderRadius: 5 
    }
})