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
            
           
              <View style={styles.container}>
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
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
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
    padding:10,
    marginHorizontal: '11%',
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
      nome: "cleversona aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      desc: 'gerente não geral',
  },
  {
      idVendedor: 3,
      nome: "antonio",
      desc: 'funcionario',
  },
  {
      idVendedor: 4,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 5,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 6,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 10,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 11,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 12,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 111,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 222,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 333,
      nome: "criver",
      desc: 'funcionario',
  },
  {
      idVendedor: 245,
      nome: "criver",
      desc: 'funcionario',
  }
];
