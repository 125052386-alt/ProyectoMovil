import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Tarjetas({ children: contenido, style: estilo }) {
  return <View style={[styles.tarjeta, estilo]}>{contenido}</View>;
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
    marginBottom: 14,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
});