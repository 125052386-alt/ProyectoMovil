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
import Avatar from '../components/Avatar';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdminDashboardScreen() {
  const datosGrafica = [
    { month: 'Ene', height: 40, highlight: false },
    { month: 'Feb', height: 50, highlight: false },
    { month: 'Mar', height: 65, highlight: false },
    { month: 'Abr', height: 55, highlight: false },
    { month: 'May', height: 75, highlight: false },
    { month: 'Jun', height: 70, highlight: false },
    { month: 'Jul', height: 85, highlight: false },
    { month: 'Ago', height: 95, highlight: false },
    { month: 'Sep', height: 120, highlight: true },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera Administrador con Menú Hamburguesa */}
      <AppHeader
        title="BANCO DE TIEMPO"
        showMenu={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Fila de Tarjetas de Métricas Principales */}
        <View style={styles.filaMetricas}>
          {/* Tarjeta Usuarios */}
          <Tarjetas style={styles.tarjetaMetrica}>
            <View style={[styles.contenedorIconoMetrica, { backgroundColor: '#EFF6FF' }]}>
              <Text style={styles.emojiMetrica}>👥</Text>
            </View>
            <Text style={styles.valorMetrica}>125</Text>
            <Text style={styles.etiquetaMetrica}>Usuarios</Text>
          </Tarjetas>

          {/* Tarjeta Intercambios */}
          <Tarjetas style={styles.tarjetaMetrica}>
            <View style={[styles.contenedorIconoMetrica, { backgroundColor: '#ECFDF5' }]}>
              <Text style={styles.emojiMetrica}>⏱</Text>
            </View>
            <Text style={styles.valorMetrica}>261</Text>
            <Text style={styles.etiquetaMetrica}>Intercambios</Text>
          </Tarjetas>
        </View>

        {/* Tarjeta Actividad Reciente */}
        <Tarjetas style={styles.tarjetaActividad}>
          <Text style={styles.encabezadoSeccion}>ACTIVIDAD RECIENTE</Text>
          <View style={styles.filaActividad}>
            <Avatar
              initials="JU"
              size={44}
              backgroundColor="#0FAD76"
              style={styles.avatarActividad}
            />
            <View style={styles.detallesActividad}>
              <Text style={styles.nombreActividad}>Juan Usuario</Text>
              <Text style={styles.horaActividad}>1 intercambio · Hace 15 min</Text>
            </View>
          </View>
        </Tarjetas>

        {/* Tarjeta Gráfico de Barras: Intercambios por mes */}
        <Tarjetas style={styles.tarjetaGrafica}>
          <Text style={styles.tituloGrafica}>Intercambios por mes</Text>
          <Text style={styles.subtituloGrafica}>Tendencia de horas intercambiadas</Text>

          {/* Área de Gráfico */}
          <View style={styles.areaGrafica}>
            <View style={styles.contenedorBarras}>
              {datosGrafica.map((item, index) => (
                <View key={index} style={styles.columnaBarra}>
                  <View
                    style={[
                      styles.barra,
                      { height: item.height },
                      item.highlight ? styles.barraDestacada : styles.barraPredeterminada,
                    ]}
                  />
                  <Text
                    style={[
                      styles.etiquetaMes,
                      item.highlight && styles.etiquetaMesDestacada,
                    ]}
                  >
                    {item.month}
                  </Text>
                </View>
              ))}
            </View>
            {/* Línea horizontal base */}
            <View style={styles.lineaBaseGrafica} />
          </View>
        </Tarjetas>
      </ScrollView>

      {/* Barra de Navegación Administrador */}
      <AdminBottomTabBar activeTab="Panel" />
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
    paddingTop: 8,
    paddingBottom: 24,
  },
  filaMetricas: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 6,
  },
  tarjetaMetrica: {
    flex: 1,
    padding: 16,
  },
  contenedorIconoMetrica: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  emojiMetrica: {
    fontSize: 16,
  },
  valorMetrica: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  etiquetaMetrica: {
    fontSize: 12.5,
    color: '#64748B',
    fontWeight: '600',
    marginTop: 2,
  },
  tarjetaActividad: {
    padding: 18,
    marginBottom: 14,
  },
  encabezadoSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  filaActividad: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarActividad: {
    marginRight: 12,
  },
  detallesActividad: {
    flex: 1,
  },
  nombreActividad: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  horaActividad: {
    fontSize: 12.5,
    color: '#64748B',
    marginTop: 2,
  },
  tarjetaGrafica: {
    padding: 20,
    marginBottom: 14,
  },
  tituloGrafica: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtituloGrafica: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
    marginBottom: 20,
  },
  areaGrafica: {
    position: 'relative',
    paddingTop: 10,
  },
  contenedorBarras: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 130,
    paddingBottom: 24,
  },
  columnaBarra: {
    alignItems: 'center',
    flex: 1,
  },
  barra: {
    width: 18,
    borderRadius: 4,
  },
  barraPredeterminada: {
    backgroundColor: '#E2E8F0',
  },
  barraDestacada: {
    backgroundColor: '#0FAD76',
  },
  lineaBaseGrafica: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  etiquetaMes: {
    fontSize: 10.5,
    color: '#94A3B8',
    marginTop: 8,
    fontWeight: '600',
  },
  etiquetaMesDestacada: {
    color: '#0FAD76',
    fontWeight: '800',
  },
});