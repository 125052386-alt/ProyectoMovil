import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomButton({
  title,
  variant = 'primary', // 'primary' | 'outline' | 'action-view' | 'action-edit' | 'action-delete' | 'action-disable' | 'action-contact'
  onPress = () => {},
  style,
  textStyle,
}) {
  let buttonStyle = styles.botonPrincipal;
  let textVariantStyle = styles.textoPrincipal;

  switch (variant) {
    case 'outline':
      buttonStyle = styles.botonContorno;
      textVariantStyle = styles.textoContorno;
      break;
    case 'action-view':
      buttonStyle = styles.botonAccionVer;
      textVariantStyle = styles.textoAccionVer;
      break;
    case 'action-edit':
      buttonStyle = styles.botonAccionEditar;
      textVariantStyle = styles.textoAccionEditar;
      break;
    case 'action-delete':
      buttonStyle = styles.botonAccionEliminar;
      textVariantStyle = styles.textoAccionEliminar;
      break;
    case 'action-disable':
      buttonStyle = styles.botonAccionDeshabilitar;
      textVariantStyle = styles.textoAccionDeshabilitar;
      break;
    case 'action-contact':
      buttonStyle = styles.botonAccionContactar;
      textVariantStyle = styles.textoAccionContactar;
      break;
    case 'header-add':
      buttonStyle = styles.botonAgregarCabecera;
      textVariantStyle = styles.textoAgregarCabecera;
      break;
    default:
      buttonStyle = styles.botonPrincipal;
      textVariantStyle = styles.textoPrincipal;
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[buttonStyle, style]}
    >
      <Text style={[textVariantStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // Botón principal verde sólido
  botonPrincipal: {
    backgroundColor: '#0FAD76',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // Botón contorno (ej: Cerrar Sesión)
  botonContorno: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#F87171',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoContorno: {
    color: '#EF4444',
    fontSize: 15,
    fontWeight: '700',
  },

  // Botón acción pequeña "Ver"
  botonAccionVer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAccionVer: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '600',
  },

  // Botón acción pequeña "Editar"
  botonAccionEditar: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAccionEditar: {
    color: '#15803D',
    fontSize: 13,
    fontWeight: '600',
  },

  // Botón acción pequeña "Eliminar"
  botonAccionEliminar: {
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAccionEliminar: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '600',
  },

  // Botón acción "Inhabilitar"
  botonAccionDeshabilitar: {
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAccionDeshabilitar: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '600',
  },

  // Botón acción "Contactar"
  botonAccionContactar: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAccionContactar: {
    color: '#0FAD76',
    fontSize: 13,
    fontWeight: '600',
  },

  // Botón de cabecera verde pequeño (+ Añadir, + Publicar, + Agregar)
  botonAgregarCabecera: {
    backgroundColor: '#0FAD76',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAgregarCabecera: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});