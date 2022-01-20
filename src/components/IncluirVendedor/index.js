import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

export default function IncluirVendedor() {
  return (
    <View  style={styles.container}>
        <View style={styles.Button}>
      <Button
                    onPress={Incluir}
                    title="Incluir Animal"
                    color="#4CAF50"
                    accessibilityLabel="Learn more about this purple button"
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
        alignItems: "flex-start",
        justifyContent: 'center',
        marginStart: 10,
        marginTop: 20,
      },
});