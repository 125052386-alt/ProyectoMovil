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
import Avatar from '../components/Avatar';
import Tarjetas from '../components/Tarjetas';
import CustomButton from '../components/CustomButton';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdministrarUsuariosScreen() {
  const pestanasFiltro = [
    { label: 'Todos', active: true },
    { label: 'Administrador', active: false },
    { label: 'Usuario', active: false },
  ];

  const listaUsuarios = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'Correo: juan.perez@ejemplo.com',
      role: 'Administrador',
      roleType: 'admin',
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
      role: 'Usuario',
      roleType: 'user',
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
        title="Administrar Usuarios"
        showMenu={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Barra de Búsqueda */}
        <SearchBar placeholder="Buscar Usuario..." />

        {/* Pestañas de Filtro */}
        <View style={styles.filaPestanasFiltro}>
          {pestanasFiltro.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.pastillaPestana,
                tab.active ? styles.pastillaPestanaActiva : styles.pastillaPestanaInactiva,
              ]}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.textoPestana,
                  tab.active ? styles.textoPestanaActivo : styles.textoPestanaInactivo,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Lista de Tarjetas de Usuarios */}
        {listaUsuarios.map((user) => (
          <Tarjetas key={user.id} style={styles.tarjetaUsuario}>
            {/* Fila Superior con Avatar, Nombre y Rol */}
            <View style={styles.cabeceraUsuario}>
              <Avatar
                initials={user.initials}
                size={44}
                backgroundColor={user.avatarBg}
                style={styles.avatar}
              />
              <View style={styles.infoUsuario}>
                <View style={styles.filaNombre}>
                  <Text style={styles.nombreUsuario}>{user.name}</Text>
                  <View
                    style={[
                      styles.insigniaRol,
                      user.roleType === 'admin'
                        ? styles.insigniaAdmin
                        : styles.insigniaUsuario,
                    ]}
                  >
                    <Text
                      style={[
                        styles.textoRol,
                        user.roleType === 'admin'
                          ? styles.textoRolAdmin
                          : styles.textoRolUsuario,
                      ]}
                    >
                      {user.role}
                    </Text>
                  </View>
                </View>
                <Text style={styles.correoUsuario}>{user.email}</Text>
              </View>
            </View>

            {/* Pastilla con Estadísticas del Usuario */}
            <View style={styles.pastillaEstadisticas}>
              <Text style={styles.textoEstadisticas}>
                Servicios: <Text style={styles.estadisticasNegrita}>{user.services}</Text> · Créditos:{' '}
                <Text style={styles.creditosDestacados}>{user.credits}</Text> · Estado:{' '}
                <Text style={styles.estadisticasNegrita}>{user.status}</Text>
              </Text>
            </View>

            {/* Acciones: Ver, Editar, Eliminar */}
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
      <AdminBottomTabBar activeTab="Usuarios" />
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
  filaPestanasFiltro: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  pastillaPestana: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  pastillaPestanaActiva: {
    backgroundColor: '#0F172A',
  },
  pastillaPestanaInactiva: {
    backgroundColor: '#E2E8F0',
  },
  textoPestana: {
    fontSize: 12.5,
    fontWeight: '700',
  },
  textoPestanaActivo: {
    color: '#FFFFFF',
  },
  textoPestanaInactivo: {
    color: '#475569',
  },
  tarjetaUsuario: {
    padding: 16,
    marginBottom: 14,
  },
  cabeceraUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    marginRight: 12,
  },
  infoUsuario: {
    flex: 1,
  },
  filaNombre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  nombreUsuario: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  insigniaRol: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  insigniaAdmin: {
    backgroundColor: '#F3E8FF',
  },
  insigniaUsuario: {
    backgroundColor: '#EFF6FF',
  },
  textoRol: {
    fontSize: 11,
    fontWeight: '700',
  },
  textoRolAdmin: {
    color: '#7E22CE',
  },
  textoRolUsuario: {
    color: '#2563EB',
  },
  correoUsuario: {
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
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
    paddingTop: 10,
  },
  botonAccion: {
    marginLeft: 6,
  },
});