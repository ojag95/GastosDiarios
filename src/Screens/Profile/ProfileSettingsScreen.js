import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Appbar, withTheme, Headline, List, IconButton,TextInput, Button } from 'react-native-paper';
import { useState } from 'react';


const ProfileSettingsScreen = ({ theme, navigation }) => {
  const [nombre, setNombre] = useState('')
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Editar su perfil" subtitle="Modifique su información personal" />
      </Appbar.Header>
      <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Avatar.Icon style={{
          elevation: 6,
          backgroundColor: colors.accent
        }} size={100} icon="account" />
        <IconButton size={20} rippleColor={colors.accent} style={{ backgroundColor: 'white', position: 'absolute', bottom:0, right: 0, elevation: 6 }} icon={'pencil'} />
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <ScrollView contentContainerStyle={{ padding: 10 }}>
        <TextInput
        mode='outlined'
      label="Nombre completo"
      value={nombre}
      onChangeText={text => setNombre(text)}
    />
    <Button mode='contained' style={{marginVertical:10}} icon={'content-save'} onPress={()=>console.log('TEST')}>Guardar</Button>
        </ScrollView>
      </View>
    </View>
  )
}

export default withTheme(ProfileSettingsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})