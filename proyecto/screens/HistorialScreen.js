import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import Tarjetas from '../components/Tarjetas';
import UserBottomTabBar from '../components/UserBottomTabBar';

export default function HistorialScreen() {
  const pestanas = [
    { id: 'todos', label: 'Todos', active: true },
    { id: 'recibidos', label: 'Recibidos', active: false },
    { id: 'prestados', label: 'Prestados', active: false },
  ];

  const elementosHistorial = [
    {
      id: '1',
      title: 'Ayuda en Programación',
      date: '15 de Septiembre · Con: Juan Usuario',
      status: '✓ Completado',
      hours: '+2h',
      type: 'positive',
    },
    {
      id: '2',
      title: 'Clases de Guitarra',
      date: '31 de Agosto · Con: Sofía Castro',
      status: '✓ Completado',
      hours: '-1h',
      type: 'negative',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera */}
      <AppHeader title="Historial" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Filtros Segmentados */}
        <View style={styles.contenedorSegmentado}>
          {pestanas.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.pestanaSegmentada,
                tab.active && styles.pestanaSegmentadaActiva,
              ]}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.textoSegmentado,
                  tab.active && styles.textoSegmentadoActivo,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Banner de Créditos Verde */}
        <View style={styles.bannerCreditos}>
          <Text style={styles.etiquetaCreditos}>CREDITOS</Text>
          <Text style={styles.cantidadCreditos}>14 Horas de Crédito</Text>
        </View>

        {/* Lista de Registros de Historial */}
        {elementosHistorial.map((item) => (
          <Tarjetas key={item.id} style={styles.tarjetaElemento}>
            <View style={styles.filaSuperiorTarjeta}>
              <Text style={styles.tituloElemento}>{item.title}</Text>
              <View
                style={[
                  styles.insigniaHoras,
                  item.type === 'positive'
                    ? styles.insigniaPositiva
                    : styles.insigniaNegativa,
                ]}
              >
                <Text
                  style={[
                    styles.textoHoras,
                    item.type === 'positive'
                      ? styles.textoPositivo
                      : styles.textoNegativo,
                  ]}
                >
                  {item.hours}
                </Text>
              </View>
            </View>

            <Text style={styles.fechaElemento}>{item.date}</Text>

            <View style={styles.separador} />

            <Text style={styles.estadoCompletado}>{item.status}</Text>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 24,
  },
  contenedorSegmentado: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  pestanaSegmentada: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  pestanaSegmentadaActiva: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  textoSegmentado: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  textoSegmentadoActivo: {
    color: '#0F172A',
    fontWeight: '700',
  },
  bannerCreditos: {
    backgroundColor: '#0FAD76',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  etiquetaCreditos: {
    fontSize: 11,
    fontWeight: '700',
    color: '#D1FAE5',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  cantidadCreditos: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  tarjetaElemento: {
    padding: 16,
    marginBottom: 14,
  },
  filaSuperiorTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  tituloElemento: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  insigniaHoras: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  insigniaPositiva: {
    backgroundColor: '#DCFCE7',
  },
  textoPositivo: {
    color: '#15803D',
    fontWeight: '800',
    fontSize: 13,
  },
  insigniaNegativa: {
    backgroundColor: '#FEE2E2',
  },
  textoNegativo: {
    color: '#DC2626',
    fontWeight: '800',
    fontSize: 13,
  },
  textoHoras: {
    fontSize: 13,
    fontWeight: '700',
  },
  fechaElemento: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 12,
  },
  separador: {
    height: 1,
    backgroundColor: '#F8FAFC',
    marginBottom: 10,
  },
  estadoCompletado: {
    fontSize: 13,
    color: '#0FAD76',
    fontWeight: '700',
  },
});