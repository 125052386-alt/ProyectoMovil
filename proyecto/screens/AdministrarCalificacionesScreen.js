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
import Avatar from '../components/Avatar';
import Tarjetas from '../components/Tarjetas';
import CustomButton from '../components/CustomButton';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdministrarCalificacionesScreen() {
  const listaCalificaciones = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'Correo: juan.perez@ejemplo.com',
      rating: '4.9',
      initials: 'JP',
      avatarBg: '#0FAD76',
      services: '12',
      credits: '5h',
      status: 'Activo',
    },
    {
      id: '2',
      name: 'Ana García',
      email: 'Correo: ana@ejemplo.com',
      rating: '4.5',
      initials: 'AG',
      avatarBg: '#2563EB',
      services: '4',
      credits: '8h',
      status: 'Activo',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera con menú hamburguesa */}
      <AppHeader
        title="Administrar Calificaciones"
        showMenu={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Selector de Filtro de Calificaciones */}
        <TouchableOpacity style={styles.contenedorDesplegable} activeOpacity={0.8}>
          <Text style={styles.textoDesplegable}>Mejores calificaciones</Text>
          <Text style={styles.flechaDesplegable}>∨</Text>
        </TouchableOpacity>

        {/* Lista de Calificaciones */}
        {listaCalificaciones.map((item) => (
          <Tarjetas key={item.id} style={styles.tarjeta}>
            {/* Cabecera de la Tarjeta con Avatar, Datos y Rating Pill */}
            <View style={styles.cabeceraTarjeta}>
              <Avatar
                initials={item.initials}
                size={44}
                backgroundColor={item.avatarBg}
                style={styles.avatar}
              />
              <View style={styles.columnaInfo}>
                <View style={styles.filaTitulo}>
                  <Text style={styles.nombre}>{item.name}</Text>
                  <View style={styles.insigniaCalificacion}>
                    <Text style={styles.textoCalificacion}>★ {item.rating}</Text>
                  </View>
                </View>
                <Text style={styles.correo}>{item.email}</Text>
              </View>
            </View>

            {/* Pastilla con Estadísticas */}
            <View style={styles.pastillaEstadisticas}>
              <Text style={styles.textoEstadisticas}>
                Servicios: <Text style={styles.estadisticasNegrita}>{item.services}</Text> · Créditos:{' '}
                <Text style={styles.creditosDestacados}>{item.credits}</Text> · Estado:{' '}
                <Text style={styles.estadisticasNegrita}>{item.status}</Text>
              </Text>
            </View>

            {/* Botón Inhabilitar */}
            <View style={styles.filaAcciones}>
              <CustomButton
                title="Inhabilitar"
                variant="action-disable"
              />
            </View>
          </Tarjetas>
        ))}
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
    paddingTop: 4,
    paddingBottom: 24,
  },
  contenedorDesplegable: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  textoDesplegable: {
    fontSize: 13.5,
    color: '#64748B',
    fontWeight: '500',
  },
  flechaDesplegable: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '700',
  },
  tarjeta: {
    padding: 16,
    marginBottom: 14,
  },
  cabeceraTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    marginRight: 12,
  },
  columnaInfo: {
    flex: 1,
  },
  filaTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  nombre: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  insigniaCalificacion: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  textoCalificacion: {
    color: '#B45309',
    fontSize: 12,
    fontWeight: '800',
  },
  correo: {
    fontSize: 12,
    color: '#64748B',
  },
  pastillaEstadisticas: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  textoEstadisticas: {
    fontSize: 12,
    color: '#64748B',
  },
  estadisticasNegrita: {
    fontWeight: '700',
    color: '#0F172A',
  },
  creditosDestacados: {
    color: '#0FAD76',
    fontWeight: '800',
  },
  filaAcciones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});