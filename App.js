import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Estado } from './componentes/Estado';
import { Boton } from './componentes/Atomicos';
import { Calculadora } from './componentes/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}>Calculadora Estándar</Text>      
    </View>
  )
}

export function Cuerpo(){
  return(
    <View style={styles.contenido}>
        <Calculadora/>
    </View>
  )
}

export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>Oldiar Díaz Domínguez</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCDCDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  encabezado:{
    flex:0.7,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#CCDCDB',
    
  },
  pie:{
    flex:0.,
    flexDirection:'row',
    backgroundColor:'#CCDCDB',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  contenido:{
    flex:2,
    alignItems:'stretch',
    padding:20
  },
  texto:{
    color:"black",
    fontSize:35
  }
});
