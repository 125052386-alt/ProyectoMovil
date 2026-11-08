import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import UserBottomTabBar from '../components/UserBottomTabBar';

const PESTANAS_FILTRO = [
  { id: 'pendientes', etiqueta: 'Pendientes (3)', activo: true },
  { id: 'aceptadas', etiqueta: 'Aceptadas', activo: false },
  { id: 'rechazadas', etiqueta: 'Rechazadas', activo: false },
];

const LISTA_SOLICITUDES = [
  {
    id: '1',
    solicitante: 'Leonel Gracia',
    iniciales: 'LG',
    colorAvatar: '#F59E0B',
    tiempoTranscurrido: 'Hace 2 horas',
    servicio: 'Ayuda con Programación',
    duracion: '2 Horas',
    estado: 'Pendiente',
  },
  {
    id: '2',
    solicitante: 'Tony Ramirez',
    iniciales: 'TR',
    colorAvatar: '#2563EB',
    tiempoTranscurrido: 'Ayer, 18:30',
    servicio: 'Configuración y Redes Wi-Fi',
    duracion: '1 Hora',
    estado: 'Pendiente',
  },
  {
    id: '3',
    solicitante: 'Abraham Mendoza',
    iniciales: 'AM',
    colorAvatar: '#9333EA',
    tiempoTranscurrido: 'Hace 2 días',
    servicio: 'Ayuda con Programación',
    duracion: '2 Horas',
    estado: 'Pendiente',
  },
];

export default function SolicitudesRecibidasScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.contenedorCabecera}>
        <View style={styles.filaSuperior}>
          <TouchableOpacity style={styles.botonRetroceso} activeOpacity={0.7}>
            <Text style={styles.flechaRetroceso}>‹</Text>
          </TouchableOpacity>
          <View style={styles.columnaTitulo}>
            <Text style={styles.tituloPrincipal}>Solicitudes Recibidas</Text>
            <Text style={styles.subtituloPrincipal}>Módulo Usuario</Text>
          </View>
        </View>

        <View style={styles.insigniaContador}>
          <Text style={styles.textoInsignia}>3 Nuevas</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={styles.contenedorFiltros}>
          {PESTANAS_FILTRO.map((pestana) => (
            <TouchableOpacity
              key={pestana.id}
              style={[
                styles.pestanaFiltro,
                pestana.activo && styles.pestanaFiltroActiva,
              ]}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.textoFiltro,
                  pestana.activo && styles.textoFiltroActivo,
                ]}
              >
                {pestana.etiqueta}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {LISTA_SOLICITUDES.map((solicitud) => (
          <View key={solicitud.id} style={styles.tarjetaSolicitud}>
            <View style={styles.cabeceraTarjeta}>
              <View
                style={[
                  styles.avatarUsuario,
                  { backgroundColor: solicitud.colorAvatar },
                ]}
              >
                <Text style={styles.inicialesAvatar}>{solicitud.iniciales}</Text>
              </View>

              <View style={styles.columnaInfoUsuario}>
                <View style={styles.filaNombreYEstado}>
                  <Text style={styles.nombreUsuario}>{solicitud.solicitante}</Text>
                  <View style={styles.insigniaEstado}>
                    <Text style={styles.textoEstado}>{solicitud.estado}</Text>
                  </View>
                </View>
                <Text style={styles.fechaTiempo}>{solicitud.tiempoTranscurrido}</Text>
              </View>
            </View>

            <View style={styles.cajaServicio}>
              <View style={styles.columnaDetalleServicio}>
                <Text style={styles.etiquetaServicio}>Servicio Solicitado</Text>
                <Text style={styles.tituloServicio}>{solicitud.servicio}</Text>
              </View>

              <View style={styles.cajaDuracion}>
                <Text style={styles.textoHorasDestacadas}>{solicitud.duracion}</Text>
              </View>
            </View>

            <View style={styles.separador} />

            <View style={styles.filaBotonesAccion}>
              <TouchableOpacity
                style={styles.botonRechazar}
                activeOpacity={0.8}
              >
                <Text style={styles.textoBotonRechazar}>Rechazar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botonAceptar}
                activeOpacity={0.8}
              >
                <Text style={styles.textoBotonAceptar}>Aceptar Intercambio</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <UserBottomTabBar activeTab="Inicio" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 28,
  },

  contenedorCabecera: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    backgroundColor: '#FFFFFF',
  },
  filaSuperior: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  botonRetroceso: {
    marginRight: 10,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  flechaRetroceso: {
    fontSize: 30,
    fontWeight: '300',
    color: '#0F172A',
    lineHeight: 30,
  },
  columnaTitulo: {
    justifyContent: 'center',
  },
  tituloPrincipal: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  subtituloPrincipal: {
    fontSize: 12,
    color: '#0FAD76',
    fontWeight: '700',
    marginTop: 1,
  },
  insigniaContador: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  textoInsignia: {
    color: '#065F46',
    fontSize: 11.5,
    fontWeight: '800',
  },
  contenedorFiltros: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  pestanaFiltro: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  pestanaFiltroActiva: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  textoFiltro: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#64748B',
  },
  textoFiltroActivo: {
    color: '#0FAD76',
    fontWeight: '800',
  },
  tarjetaSolicitud: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cabeceraTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarUsuario: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  inicialesAvatar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  columnaInfoUsuario: {
    flex: 1,
  },
  filaNombreYEstado: {
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
  insigniaEstado: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  textoEstado: {
    color: '#B45309',
    fontSize: 11,
    fontWeight: '700',
  },
  fechaTiempo: {
    fontSize: 12,
    color: '#64748B',
  },
  cajaServicio: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  columnaDetalleServicio: {
    flex: 1,
    paddingRight: 8,
  },
  etiquetaServicio: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0FAD76',
    textTransform: 'uppercase',
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  tituloServicio: {
    fontSize: 13.5,
    fontWeight: '800',
    color: '#0F172A',
  },
  cajaDuracion: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  textoHorasDestacadas: {
    color: '#065F46',
    fontWeight: '800',
    fontSize: 12.5,
  },
  separador: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 12,
  },
  filaBotonesAccion: {
    flexDirection: 'row',
    gap: 10,
  },
  botonRechazar: {
    flex: 1,
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotonRechazar: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '700',
  },
  botonAceptar: {
    flex: 2,
    backgroundColor: '#0FAD76',
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0FAD76',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  textoBotonAceptar: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
});