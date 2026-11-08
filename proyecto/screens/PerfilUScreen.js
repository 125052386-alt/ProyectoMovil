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
import Avatar from '../components/Avatar';
import CustomButton from '../components/CustomButton';
import UserBottomTabBar from '../components/UserBottomTabBar';

export default function PerfileUScreen() {
  const opcionesMenu = [
    { title: 'Mis Habilidades', iconBg: '#FEF08A' },
    { title: 'Mis Servicios', iconBg: '#DCFCE7' },
    { title: 'Solicitar Servicios', iconBg: '#E0F2FE' },
    { title: 'Favoritos', iconBg: '#FEF9C3' },
    { title: 'Historial', iconBg: '#F3E8FF' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0FAD76" />
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        {/* Cabecera Verde de Perfil */}
        <View style={styles.cabeceraPerfil}>
          <Avatar
            initials="KH"
            size={68}
            backgroundColor="#F59E0B"
            style={styles.avatar}
          />
          <View style={styles.infoPerfil}>
            <Text style={styles.nombreUsuario}>Karen Hernandez</Text>
            <Text style={styles.correoUsuario}>Karen@ejemplo.com</Text>
            <View style={styles.insigniaCreditos}>
              <Text style={styles.textoCreditos}>14 Creditos disponibles</Text>
            </View>
          </View>
        </View>

        {/* Lista de Opciones de Navegación */}
        <View style={styles.contenedorMenu}>
          {opcionesMenu.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.elementoMenu}
              activeOpacity={0.7}
            >
              <View style={styles.ladoIzquierdoMenu}>
                <View style={[styles.circuloIcono, { backgroundColor: item.iconBg }]} />
                <Text style={styles.tituloMenu}>{item.title}</Text>
              </View>
              <Text style={styles.flecha}>›</Text>
            </TouchableOpacity>
          ))}

          {/* Botón Cerrar Sesión */}
          <CustomButton
            title="Cerrar Sesión"
            variant="outline"
            style={styles.botonCerrarSesion}
          />
        </View>
      </ScrollView>

      {/* Barra de Navegación Inferior */}
      <UserBottomTabBar activeTab="Inicio" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0FAD76',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#F8FAFC',
  },
  cabeceraPerfil: {
    backgroundColor: '#0FAD76',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  avatar: {
    marginRight: 16,
  },
  infoPerfil: {
    flex: 1,
  },
  nombreUsuario: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  correoUsuario: {
    fontSize: 13,
    color: '#D1FAE5',
    marginTop: 2,
  },
  insigniaCreditos: {
    alignSelf: 'flex-start',
    backgroundColor: '#065F46',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 8,
  },
  textoCreditos: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  contenedorMenu: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
  },
  elementoMenu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  ladoIzquierdoMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circuloIcono: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 14,
  },
  tituloMenu: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
  },
  flecha: {
    fontSize: 22,
    color: '#94A3B8',
    fontWeight: '600',
    lineHeight: 22,
  },
  botonCerrarSesion: {
    marginTop: 28,
  },
});