import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Avatar({ initials, size = 48, backgroundColor = '#0FAD76', style }) {
  const estiloContenedor = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: backgroundColor,
  };

  const estiloTexto = {
    fontSize: size * 0.38,
  };

  return (
    <View style={[styles.contenedorAvatar, estiloContenedor, style]}>
      <Text style={[styles.iniciales, estiloTexto]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  iniciales: {
    color: '#FFFFFF',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});