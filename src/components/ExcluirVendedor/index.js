import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

export default function ExcluirVendedor() {
  return (
    <View  style={styles.container}>
        <View style={styles.Button}>
      <Button
                    onPress={Incluir}
                    title="Incluir Vendedor"
                    color="#4CAF50"
                />
    </View>
    </View>
  );
}


export function Incluir(){
    
}


const styles  = StyleSheet.create({

    botao:{
        marginVertical:8,
        marginHorizontal:16,
        fontSize: 18,
        borderRadius:10,
    },
    container: {
        flex: 1 ,
        alignItems: "flex-start",
        justifyContent: 'center',
        marginStart: 10,
        marginTop: 20,
      },
});