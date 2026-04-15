import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(null);

  const gerarNumero = () => {
    const aleatorio = Math.floor(Math.random() * 100) + 1;
    setNumero(aleatorio);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Número Aleatório</Text>
      {numero !== null && <Text style={styles.numero}>{numero}</Text>}
      <Button title="Gerar Número" onPress={gerarNumero} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  numero: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
