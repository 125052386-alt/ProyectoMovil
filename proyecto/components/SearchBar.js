import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function SearchBar({
  placeholder = 'Buscar...',
  value,
  onChangeText = () => {},
  style,
}) {
  return (
    <View style={[styles.contenedor, style]}>
      <Text style={styles.iconoBusqueda}>🔍</Text>
      <TextInput
        style={styles.entrada}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    marginBottom: 14,
  },
  iconoBusqueda: {
    fontSize: 14,
    marginRight: 8,
    opacity: 0.6,
  },
  entrada: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: 0,
  },
});