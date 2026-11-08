import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function UserBottomTabBar({ activeTab = 'Inicio', onTabPress = () => {} }) {
  const pestanas = [
    { name: 'Inicio', id: 'Inicio' },
    { name: 'Habilidades', id: 'Habilidades' },
    { name: 'Explorar', id: 'Explorar' },
    { name: 'Historial', id: 'Historial' },
    { name: 'Perfil', id: 'Perfil' },
  ];

  return (
    <View style={styles.contenedor}>
      <View style={styles.filaNavegacion}>
        {pestanas.map((tab) => {
          const estaActivo = tab.id === activeTab;
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.botonPestana}
              activeOpacity={0.7}
              onPress={() => onTabPress(tab.id)}
            >
              <Text style={[styles.etiquetaPestana, estaActivo && styles.etiquetaPestanaActiva]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.indicadorInicio} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
    paddingBottom: 8,
  },
  filaNavegacion: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  botonPestana: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  etiquetaPestana: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
  etiquetaPestanaActiva: {
    color: '#0FAD76',
    fontWeight: '700',
  },
  indicadorInicio: {
    width: 134,
    height: 5,
    backgroundColor: '#0F172A',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 4,
  },
});