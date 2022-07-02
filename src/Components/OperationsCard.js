import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Caption, Subheading, Surface, Title, TouchableRipple, withTheme ,Text,} from 'react-native-paper'
import Colors from '../Constants/Colors';

const OperationsCard = ({theme}) => {
    const {colors}=theme;
    return (
        <TouchableRipple
            borderless={true}
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0,169,164,0.32)"
            style={styles.rippleContainer}
        >
            <Surface style={styles.card}>

                <View style={styles.operationIndicator} />
                <View style={styles.container}>
                    <View style={styles.operationDetails}>
                        <Subheading>Efectivo</Subheading>
                        <Text style={{fontWeight:'600'}}>Sueldo</Text>
                        <Text numberOfLines={1}>Esta es la descripción del movimientojajajajajjajajja</Text>
                        <Caption numberOfLines={1}>24 de Junio 2022 1:15PM</Caption>

                    </View>
                    <View style={styles.operationAmount}>
                        <Title numberOfLines={1}>$450000</Title>
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
        backgroundColor: Colors.Green,
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