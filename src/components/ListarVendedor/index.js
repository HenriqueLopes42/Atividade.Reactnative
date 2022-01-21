import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function ListaVendedor() {
    const [vendedores, setVendedores] = useState([]);

//    useEffect( () => {
//        api.get('vendedor').then( (res) => {
//            setVendedores(res.data);
//            console.log(vendedores);
//        });
//    },[]);

    useEffect( () => {
      setVendedores(repositories);
    },[]);


  return (
    <View>
      <FlatList 
      
        data = {vendedores}
        renderItem={ ({item}) =>
            

            <View style={styles.row}>
                <Text style={styles.idVendedor}>{item.idVendedor}</Text>
                <Text style={styles.NomeVendedor}>{item.nome}</Text>
            </View>
        }
      />
    </View>
  );
}



const styles  = StyleSheet.create({

  container: {
      flex: 1,
      alignContent: "center",
      alignSelf: "center",
      justifyContent: 'center',
      paddingTop: 10,
      backgroundColor: '#1ff0f1',
      padding: 8,
    },
    row: {
      flexDirection: 'row',
  },
  idVendedor: {
    fontSize: 20,
    backgroundColor: '#F8F0DF',
    marginTop: 10,
    marginStart: 10,
    borderRadius: 10,
    padding:8
  },
  NomeVendedor: {
    
    fontSize: 14,
    backgroundColor: '#79B4B7',
    marginTop: 10,
    marginStart: 10,
    borderRadius: 10,
    padding:10
  },
});

export const repositories = [
  {
      idVendedor: 1,
      nome: "Joao",
      desc: 'gerente geral'
  },
  {
      idVendedor: 2,
      nome: "cleverson",
      desc: 'gerente não geral',
  },
  {
      idVendedor: 3,
      nome: "antonio",
      desc: 'funcionario',
  },
  {
      idVendedor: 3,
      nome: "criver",
      desc: 'funcionario',
  }
];
