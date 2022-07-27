import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Appbar, withTheme, Headline, List } from 'react-native-paper';

const ProfileScreen = ({ theme,navigation }) => {
    const { colors } = theme;
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'flex-end' }}>
                
                    <Headline numberOfLines={1} style={{ marginVertical: 10, marginHorizontal: 10, color: colors.background }}>Oscar Josué Avila Gutiérrez</Headline>
            </View>
            <View style={{ flex: 2 }}>
                <Avatar.Icon style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    top: '-11%',
                    zIndex: 100,
                    elevation: 6,
                    backgroundColor: colors.accent
                }} size={68} icon="account" />
                <ScrollView contentContainerStyle={{ padding: 0 }}>
                    <List.Section>
                        <List.Subheader>Personales</List.Subheader>
                        <List.Item
                            title="Mi Perfil"
                            description="Configure opciones relacionadas a su cuenta"
                            onPress={() => navigation.navigate('ProfileSettingsScreen')}
                            left={props => <List.Icon {...props} icon="account" />}
                        />
                    </List.Section>
                    <List.Section>
                        <List.Subheader>General</List.Subheader>
                        <List.Item
                            title="Categorías"
                            description="Agregue o modifique Categorías"
                            onPress={() => navigation.navigate('CategoriesScreen')}
                            left={props => <List.Icon {...props} icon="file-tree" />}
                        />
                        <List.Item
                            title="Formato de Moneda"
                            description="Configure el formato de moneda usado en la aplicación"
                            onPress={() => console.log('Presionado')}
                            left={props => <List.Icon {...props} icon="cash" />}
                        />
                        <List.Item
                            title="Formato de Fechas"
                            description="Configure como se ven las fechas en la aplicación"
                            onPress={() => console.log('Presionado')}
                            left={props => <List.Icon {...props} icon="calendar" />}
                        />
                    </List.Section>
                    <List.Section>
                        <List.Subheader>Apariencia</List.Subheader>
                        <List.Item
                            title="Temas"
                            description="Modifique los colores de la aplicación"
                            onPress={() => console.log('Presionado')}
                            left={props => <List.Icon {...props} icon="palette" />}
                        />
                    </List.Section>
                    <List.Section>
                        <List.Subheader>Sistema</List.Subheader>
                        <List.Item
                            title="Base de datos"
                            description="Opciones relacionadas a la base de datos"
                            onPress={() => console.log('Presionado')}
                            left={props => <List.Icon {...props} icon="database" />}
                        />
                    </List.Section>
                    <List.Section>
                        <List.Subheader>Ayuda</List.Subheader>
                        <List.Item
                            title="Acerca de"
                            description="Información de la Aplicación"
                            onPress={() => console.log('Presionado')}
                            left={props => <List.Icon {...props} icon="information" />}
                        />
                        <List.Item
                            title="Doname un café"
                            description="Si la aplicación es de uso doneme un café"
                            onPress={() => console.log('Presionado')}
                            left={props => <List.Icon {...props} icon="coffee" />}
                        />
                    </List.Section>
                </ScrollView>
            </View>
        </View>
    )
}

export default withTheme(ProfileScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})