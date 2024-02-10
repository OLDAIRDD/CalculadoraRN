import { View } from 'react-native'
import React from 'react'
import { Boton, Caja } from './Atomicos'
import { estilos } from './Estilos'

export const Calculadora = () => {
  return (
    <View>
        <View>
            <Caja valor={'0.0'}/>
        </View>
        <View style={estilos.botonera}>
            <Boton Texto={' % '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={'CE'} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' C '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={'<-'} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={'1/x'} ColorA={'#0094E3'} ColorB={'#84FEE0'} />
            <Boton Texto={' x²'} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={'sqr'} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' / '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 7 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 8 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 9 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' * '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 4 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 5 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 6 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' - '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 1 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 2 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 3 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' + '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={'+/-'} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' 0 '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' . '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
            <Boton Texto={' = '} ColorA={'#0094E3'} ColorB={'#84FEE0'}/>
        </View>
    </View>
  )
}