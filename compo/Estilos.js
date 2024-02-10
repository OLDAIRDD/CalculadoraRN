import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    //Estilos para el boton
    imagenB:{
        height:33,
        width:30,
        marginEnd:10
      },
      textoB:{
        color:'black',
        fontSize:18,
        alignItems: 'center'
      },
      boton:{
        flexDirection:'row',
        padding:7,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#0094E3',
        borderWidth:1,
        borderRadius:5
      },
      //estilos para la caja de la calculadora
      caja:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:2,
        height:85,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10
      },
      textBox:{
        color:'black',
        fontSize:35
      },
      //estilos para el div de la botonera
      botonera:{
        flexDirection:'row',
        padding:3.8,
        justifyContent:'space-evenly',
        flexWrap:'wrap'
      }

})