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
import SearchBar from '../components/SearchBar';
import Tarjetas from '../components/Tarjetas';
import CustomButton from '../components/CustomButton';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdministrarServiciosScreen() {
  const listaServicios = [
    {
      id: '1',
      title: 'Programación Web & Python',
      info: 'Tecnología · 2 horas · 2 créditos · Activo',
    },
    {
      id: '2',
      title: 'Clases de Pintura Acrílica',
      info: 'Artes · 1.5 horas · 1.5 créditos · Activo',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera */}
      <AppHeader title="Administrar Servicios" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Barra de Búsqueda */}
        <SearchBar placeholder="Buscar Servicio..." />

        {/* Filtros de Categoría y Estado */}
        <View style={styles.filaFiltros}>
          <TouchableOpacity style={styles.filtroPastilla} activeOpacity={0.7}>
            <Text style={styles.textoFiltro}>
              Categoría: <Text style={styles.filtroNegrita}>Todas</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filtroPastilla} activeOpacity={0.7}>
            <Text style={styles.textoFiltro}>
              Estado: <Text style={styles.filtroNegrita}>Activos</Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tarjetas de Administración de Servicios */}
        {listaServicios.map((service) => (
          <Tarjetas key={service.id} style={styles.tarjeta}>
            <Text style={styles.tituloServicio}>{service.title}</Text>
            <Text style={styles.informacionServicio}>{service.info}</Text>

            {/* Fila de Botones: Ver, Editar, Eliminar */}
            <View style={styles.filaAcciones}>
              <CustomButton
                title="Ver"
                variant="action-view"
                style={styles.botonAccion}
              />
              <CustomButton
                title="Editar"
                variant="action-edit"
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

      {/* Barra de Navegación Administrador */}
      <AdminBottomTabBar activeTab="Servicios" />
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
  filaFiltros: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  filtroPastilla: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoFiltro: {
    fontSize: 12.5,
    color: '#475569',
  },
  filtroNegrita: {
    fontWeight: '800',
    color: '#0F172A',
  },
  tarjeta: {
    padding: 18,
    marginBottom: 14,
  },
  tituloServicio: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  informacionServicio: {
    fontSize: 12.5,
    color: '#64748B',
    marginBottom: 16,
  },
  filaAcciones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
    paddingTop: 10,
  },
  botonAccion: {
    marginLeft: 6,
  },
});