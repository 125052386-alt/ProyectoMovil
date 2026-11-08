import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import Tarjetas from '../components/Tarjetas';
import CustomButton from '../components/CustomButton';
import UserBottomTabBar from '../components/UserBottomTabBar';

export default function FavoritosScreen() {
  const listaFavoritos = [
    {
      id: '1',
      name: 'Juan Pérez',
      skill: 'Programación',
      details: '2 horas · 4.8 ★ · Tecnología',
    },
    {
      id: '2',
      name: 'Karen Hernández',
      skill: 'Pintura',
      details: '1.5 horas · 4.9 ★ · Artes',
    },
    {
      id: '3',
      name: 'Ana Garcia',
      skill: 'Matemáticas',
      details: '2 horas · 4.9 ★ · Educación',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera con icono de estrella */}
      <View style={styles.filaCabecera}>
        <Text style={styles.estrellaCabecera}>★</Text>
        <Text style={styles.tituloCabecera}>Favoritos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Lista de Favoritos */}
        {listaFavoritos.map((item) => (
          <Tarjetas key={item.id} style={styles.tarjeta}>
            <View style={styles.filaTitulo}>
              <Text style={styles.estrellaElemento}>★</Text>
              <Text style={styles.tituloElemento}>
                {item.name} — {item.skill}
              </Text>
            </View>

            <Text style={styles.detallesElemento}>{item.details}</Text>

            {/* Acciones: Contactar y Eliminar */}
            <View style={styles.filaAcciones}>
              <CustomButton
                title="Contactar"
                variant="action-contact"
                style={styles.botonAccion}
              />
              <CustomButton
                title="Eliminar"
                variant="action-delete"
                style={styles.botonAccion}
              />
            </View>
          </Tarjetas>
        ))}
      </ScrollView>

      {/* Barra de Navegación Inferior */}
      <UserBottomTabBar activeTab="Inicio" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  filaCabecera: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  estrellaCabecera: {
    fontSize: 20,
    color: '#F59E0B',
    marginRight: 8,
  },
  tituloCabecera: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 24,
  },
  tarjeta: {
    padding: 16,
    marginBottom: 14,
  },
  filaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  estrellaElemento: {
    fontSize: 14,
    color: '#F59E0B',
    marginRight: 6,
  },
  tituloElemento: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  detallesElemento: {
    fontSize: 12.5,
    color: '#64748B',
    marginBottom: 14,
  },
  filaAcciones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
    paddingTop: 8,
  },
  botonAccion: {
    marginLeft: 8,
  },
});