import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AreaChart, Grid, StackedAreaChart, PieChart,BarChart } from 'react-native-svg-charts'
const dataOLD = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
import * as shape from 'd3-shape'
import { consultAllMovements } from '../../DataProvider/Movements';
import { Appbar, Caption, Headline, Title, withTheme } from 'react-native-paper'

const ReportsScreen = ({ theme }) => {
    const [data, setData] = useState([])
    const [totals, setTotals] = useState({ ingresos: 0, gastos: 0, general: 0 })
    const [ingresos, setIngresos] = useState([])
    const { colors } = theme;
    const [totalOperaciones, setTotalOperaciones] = useState([0, 0])
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)


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

    const getData = async () => {
        let movements = await consultAllMovements();
        if (movements.executed) {
            setData(movements.rows)

        }
        else {

        }
    }

    const calculateTotal = () => {
        let egresosArray = data.filter(operation => operation.tipo === 'Gasto')
        console.log('EGRESOS', egresosArray);
        let ingresosArray = data.filter(operation => operation.tipo === 'Ingreso')
        console.log('INGRESOS', ingresosArray)
        let totalEgresos = 0;
        let totalIngresos = 0;
        let egresosSimplifiedArray = []
        let ingresosSimplifiedArray = []
        egresosArray.forEach(operation => {
            totalEgresos += operation.cantidad
            egresosSimplifiedArray.push(operation.cantidad)

        });
        ingresosArray.forEach(operation => {
            totalIngresos += operation.cantidad
            ingresosSimplifiedArray.push(operation.cantidad)

        });

        let totalGeneral = totalIngresos - totalEgresos;
        console.log('TOTAL INGRESOS', totalIngresos)
        console.log('TOTAL EGRESOS', totalEgresos)
        setTotals({ ingresos: totalIngresos, gastos: totalEgresos, general: totalGeneral })
        setTotalOperaciones([totalEgresos, totalIngresos])


    }

    const RenderBarChart=()=>{
        return (
            <View>
                <Title>Porcentaje por operaciones</Title>
                <Caption>Muestra el porcentaje de ingresos y gastos</Caption>
            <BarChart style={{ height: 200 }} data={dataOLD} svg={{ fill:'rgb(134, 65, 244)' }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
            </View>
        )
    }

    const RenderPieChart = () => {
        let pieData = totalOperaciones
            .map((value, index) => ({
                value,
                svg: {
                    fill: index === 1 ? colors.error : colors.accent,
                    onPress: () => console.log('press', index, value),
                },
                key: `pie-${index}`,
            }))
        return (
            <View>
                <Title>Porcentaje por operaciones</Title>
                <Caption>Muestra el porcentaje de ingresos y gastos</Caption>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text>Tipo de movimiento</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: colors.accent, marginRight: 5 }} />
                            <Caption>Ingresos ${totalOperaciones[0]}</Caption>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: colors.error, marginRight: 5 }} />
                            <Caption>Gastos ${totalOperaciones[1]}</Caption>
                        </View>


                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <PieChart style={{ height: 130 }} data={pieData} />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Reportes" subtitle="Consulte sus reportes" />
            </Appbar.Header>
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <Title>Reporte total de operaciones</Title>
                <Caption>Las posicion de las curvas indica si fue un ingreso o un gasto</Caption>
                <AreaChart
                    style={{ height: 200 }}
                    data={dataOLD}
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={shape.curveNatural}
                    svg={{ fill: colors.accentWithOpacity }}

                >
                    <Grid />
                </AreaChart>
                <RenderPieChart />
                <RenderBarChart/>
                
            </ScrollView>
        </View>
    )
}

export default withTheme(ReportsScreen)

const styles = StyleSheet.create({})