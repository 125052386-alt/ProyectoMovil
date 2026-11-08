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
import SearchBar from '../components/SearchBar';
import Tarjetas from '../components/Tarjetas';
import CustomButton from '../components/CustomButton';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function CategoriasScreen() {
  const listaCategorias = [
    {
      id: '1',
      title: 'Tecnología',
      servicesCount: '12 Servicios',
      iconEmoji: '💻',
      iconBg: '#ECFDF5',
    },
    {
      id: '2',
      title: 'Educación & Idiomas',
      servicesCount: '18 Servicios',
      iconEmoji: '📚',
      iconBg: '#EFF6FF',
    },
    {
      id: '3',
      title: 'Hogar y Reparaciones',
      servicesCount: '14 Servicios',
      iconEmoji: '🔧',
      iconBg: '#FEF9C3',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera con botón + Agregar */}
      <AppHeader
        title="Categorías"
        rightActionTitle="+ Agregar"
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Barra de Búsqueda */}
        <SearchBar placeholder="Buscar Categoría..." />

        {/* Lista de Tarjetas de Categorías */}
        {listaCategorias.map((item) => (
          <Tarjetas key={item.id} style={styles.tarjetaCategoria}>
            <View style={styles.cabeceraCategoria}>
              <View style={[styles.contenedorIcono, { backgroundColor: item.iconBg }]}>
                <Text style={styles.textoIcono}>{item.iconEmoji}</Text>
              </View>
              <View style={styles.columnaTitulo}>
                <Text style={styles.tituloCategoria}>{item.title}</Text>
                <Text style={styles.cantidadServicios}>{item.servicesCount}</Text>
              </View>
            </View>

            {/* Separador */}
            <View style={styles.separador} />

            {/* Botones de Acción: Editar y Eliminar */}
            <View style={styles.filaAcciones}>
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
  tarjetaCategoria: {
    padding: 16,
    marginBottom: 14,
  },
  cabeceraCategoria: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  contenedorIcono: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  textoIcono: {
    fontSize: 22,
  },
  columnaTitulo: {
    flex: 1,
  },
  tituloCategoria: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 2,
  },
  cantidadServicios: {
    fontSize: 12.5,
    color: '#64748B',
  },
  separador: {
    height: 1,
    backgroundColor: '#F8FAFC',
    marginBottom: 10,
  },
  filaAcciones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  botonAccion: {
    marginLeft: 6,
  },
});