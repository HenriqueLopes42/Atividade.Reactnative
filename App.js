import { StyleSheet, Text, View } from 'react-native';
import ListaVendedor from './src/components/ListarVendedor';
import IncluirVendedor from './src/components/IncluirVendedor';



export default function App() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Lista de Vendedores</Text>
      </View>
      <View style={styles.listar}>
        <ListaVendedor />
      </View>
      
      <View style={styles.menu}>
        <IncluirVendedor />  
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  title: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 20,
  },
  menu: {
    //backgroundColor: "#E70F0F"
  },
  listar: {
    flexDirection: 'column',
    maxHeight: '79%',
  }
});
