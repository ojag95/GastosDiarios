import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView, { setPage } from 'react-native-pager-view';
import { Button, Caption, Headline, TouchableRipple, withTheme } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { Appbar } from 'react-native-paper';


const OnboardingScreen = ({ theme,navigation }) => {

  const { colors } = theme
  const animation = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0} ref={pageRef}>
        <View style={[styles.page, { backgroundColor: 'white' }]} key="1">
          <View style={{ borderRadius: 200, backgroundColor: '#EEEEEE', overflow: 'hidden', padding: 30, margin: 10, alignItems: 'center', justifyContent: 'center' }} >
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 200,
                height: 200,
                backgroundColor: '#eee',
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require('../../../assets/Lotties/flying-wallet-money.json')}
            />
          </View>
          <Headline>Gastos diarios</Headline>
          <Caption>Gestiona tus finanzas</Caption>
          <Appbar style={[styles.bottom, { justifyContent: 'flex-end' }]}>
            <Button mode='contained' style={{ elevation: 0 ,backgroundColor:'#00a9a4'}} onPress={() => pageRef.current.setPage(1)}>Siguiente  ❯</Button>

          </Appbar>
        </View>
        <View style={[styles.page, { backgroundColor: '#FFFFFF' }]} key="2">
          <View style={{ borderRadius: 200, backgroundColor: '#EEEEEE', overflow: 'hidden', padding: 30, margin: 10, alignItems: 'center', justifyContent: 'center' }} >
            <LottieView
              autoPlay
              ref={animation2}
              style={{
                width: 200,
                height: 200,
                backgroundColor: '#eee',
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require('../../../assets/Lotties/google-icons-forms.json')}
            />
          </View>
          <Headline>Registra tus movimientos</Headline>
          <Caption>Compras, Pagos, Prestamos, lo que tu quieras...</Caption>
          <Appbar style={[styles.bottom, { justifyContent: 'space-between' }]}>
            <Button mode='contained' style={{ elevation: 0,backgroundColor:'#00a9a4' }} onPress={() => pageRef.current.setPage(0)}>{'❮'} Anterior  </Button>

            <Button mode='contained' style={{ elevation: 0,backgroundColor:'#00a9a4' }} onPress={() => pageRef.current.setPage(2)}>Siguiente  ❯</Button>

          </Appbar>
        </View>
        <View style={styles.page} key="3">
          <View style={{ borderRadius: 200, backgroundColor: '#EEEEEE', overflow: 'hidden', padding: 30, margin: 10, alignItems: 'center', justifyContent: 'center' }} >
            <LottieView
              autoPlay
              ref={animation3}
              style={{
                width: 200,
                height: 200,
                backgroundColor: '#eee',
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require('../../../assets/Lotties/money-investment.json')}
            />
          </View>
          <Headline>LLeva un mejor control</Headline>
          <Caption>Revisa los reportes, graficas o exportalos si lo deseas</Caption>
          <Appbar style={[styles.bottom, { justifyContent: 'space-between' }]}>
            <Button mode='contained' style={{ elevation: 0,backgroundColor:'#00a9a4' }} onPress={() => pageRef.current.setPage(1)}>{'❮'} Anterior  </Button>

            <Button mode='contained' style={{ elevation: 0,backgroundColor:'#00a9a4' }} onPress={() => navigation.navigate('InitializingScreen')}>Continuar  ❯</Button>

          </Appbar>
        </View>
      </PagerView>
    </View>
  )
}

export default withTheme(OnboardingScreen)

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    backgroundColor:'#00a9a4'
  },
})