import {Pressable,Image,Text,View} from 'react-native'
import { estilos } from './Estilos'

export const Boton=({Texto,Logo,ColorA,ColorB,accion})=>{
    return(
      <Pressable 
      style={({pressed})=>[{
        backgroundColor:pressed?ColorA:ColorB,
        margin:pressed?3:4
      },estilos.boton]} 
      onPress={accion}
      >
        <Image style={estilos.imagenB} source={Logo} />
        <Text style={estilos.textoB}>{Texto}</Text>
      </Pressable>
    )
  }

export const Caja=({valor})=>{
    return(
        <View style={estilos.caja}> 
            <Text style= {estilos.textBox}>{valor}</Text>
        </View>
    )
}