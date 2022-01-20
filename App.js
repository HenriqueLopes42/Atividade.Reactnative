import { StyleSheet, Text, View } from 'react-native';
import ListaVendedor from './src/components/ListarVendedor';
import IncluirVendedor from './src/components/IncluirVendedor';



export default function App() {
  return (
    <View>
      <Text>Lista de Vendedores</Text>
      <ListaVendedor />
      <IncluirVendedor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
