import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({
  label,
  value,
  placeholder,
  secureTextEntry = false,
  onChangeText = () => {},
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
}) {
  return (
    <View style={[styles.contenedor, style]}>
      {label ? <Text style={styles.etiqueta}>{label}</Text> : null}
      <TextInput
        style={[
          styles.entrada,
          multiline && styles.entradaMultilinea,
          inputStyle,
        ]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 16,
    width: '100%',
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  entrada: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#0F172A',
  },
  entradaMultilinea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
});