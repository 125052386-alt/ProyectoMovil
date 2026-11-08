import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AppHeader({
  title,
  subtitle,
  showBack = false,
  showMenu = false,
  rightActionTitle,
  onRightActionPress = () => {},
  rightBadgeText,
  style,
}) {
  return (
    <View style={[styles.contenedorCabecera, style]}>
      <View style={styles.contenedorIzquierdo}>
        {showBack && (
          <TouchableOpacity style={styles.botonIcono} activeOpacity={0.7}>
            <Text style={styles.flechaVolver}>‹</Text>
          </TouchableOpacity>
        )}
        {showMenu && (
          <TouchableOpacity style={styles.botonIcono} activeOpacity={0.7}>
            <View style={styles.menuHamburguesa}>
              <View style={styles.lineaMenu} />
              <View style={styles.lineaMenu} />
              <View style={styles.lineaMenu} />
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.columnaTitulo}>
          <Text style={styles.titulo}>{title}</Text>
          {subtitle ? <Text style={styles.subtitulo}>{subtitle}</Text> : null}
        </View>
      </View>

      {rightActionTitle && (
        <TouchableOpacity
          style={styles.botonAccionDerecha}
          activeOpacity={0.8}
          onPress={onRightActionPress}
        >
          <Text style={styles.textoAccionDerecha}>{rightActionTitle}</Text>
        </TouchableOpacity>
      )}

      {rightBadgeText && (
        <View style={styles.insigniaDerecha}>
          <Text style={styles.textoInsigniaDerecha}>{rightBadgeText}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorCabecera: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  contenedorIzquierdo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  columnaTitulo: {
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  subtitulo: {
    fontSize: 12,
    color: '#0FAD76',
    fontWeight: '600',
    marginTop: 2,
  },
  botonIcono: {
    marginRight: 12,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flechaVolver: {
    fontSize: 28,
    fontWeight: '400',
    color: '#0F172A',
    lineHeight: 28,
  },
  menuHamburguesa: {
    width: 20,
    height: 14,
    justifyContent: 'space-between',
  },
  lineaMenu: {
    height: 2.2,
    backgroundColor: '#0F172A',
    borderRadius: 2,
  },
  botonAccionDerecha: {
    backgroundColor: '#0FAD76',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  textoAccionDerecha: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  insigniaDerecha: {
    backgroundColor: '#E6FAF2',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  textoInsigniaDerecha: {
    color: '#0FAD76',
    fontSize: 12,
    fontWeight: '700',
  },
});