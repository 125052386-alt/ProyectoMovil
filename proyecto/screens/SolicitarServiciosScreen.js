import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Modal,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import SearchBar from '../components/SearchBar';
import Tarjetas from '../components/Tarjetas';
import CustomButton from '../components/CustomButton';
import UserBottomTabBar from '../components/UserBottomTabBar';

export default function SolicitarServiciosScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const categorias = [
    { name: 'Todos', active: true },
    { name: 'Tecnología', active: false },
    { name: 'Educación', active: false },
  ];

  const serviciosDisponibles = [
    {
      id: '1',
      provider: 'Juan Pérez',
      rating: '4.8',
      title: 'Ayuda con Programación',
      description: 'Asesoría práctica en algoritmos, React y resolución de errores.',
      duration: '2 horas',
      credits: '12 créditos',
    },
    {
      id: '2',
      provider: 'Lucía Méndez',
      rating: '4.9',
      title: 'Clases de Pintura Acrílica',
      description: 'Técnicas de mezcla de color, pinceladas y bodegones.',
      duration: '1.5 horas',
      credits: '1.5 créditos',
    },
  ];

  const abrirModalConfirmacion = (servicio) => {
    setServicioSeleccionado(servicio);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <AppHeader
        title="Solicitar Servicios"
        subtitle="Disponibles"
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <SearchBar placeholder="Buscar por servicio o miembro..." />

        <View style={styles.filaFiltros}>
          {categorias.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.fichaCategoria,
                cat.active ? styles.fichaCategoriaActiva : styles.fichaCategoriaInactiva,
              ]}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.textoCategoria,
                  cat.active ? styles.textoCategoriaActivo : styles.textoCategoriaInactivo,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {serviciosDisponibles.map((item) => (
          <Tarjetas key={item.id} style={styles.tarjeta}>
            <View style={styles.cabeceraTarjeta}>
              <View style={styles.filaProveedor}>
                <Text style={styles.nombreProveedor}>{item.provider}</Text>
                <Text style={styles.estrellaCalificacion}>★ {item.rating}</Text>
              </View>
              <View style={styles.insigniaDisponible}>
                <Text style={styles.textoInsigniaDisponible}>Disponible</Text>
              </View>
            </View>

            <Text style={styles.tituloServicio}>{item.title}</Text>
            <Text style={styles.descripcionServicio}>{item.description}</Text>

            <View style={styles.separador} />

            <View style={styles.pieTarjeta}>
              <Text style={styles.textoCosto}>
                {item.duration} · <Text style={styles.creditoDestacado}>{item.credits}</Text>
              </Text>
              <CustomButton
                title="Solicitar"
                variant="primary"
                style={styles.botonSolicitar}
                textStyle={styles.textoBotonSolicitar}
                onPress={() => abrirModalConfirmacion(item)}
              />
            </View>
          </Tarjetas>
        ))}
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.superposicionModal}>
          <View style={styles.contenidoModal}>
            
            <Text style={styles.tituloModal}>Confirmar Solicitud</Text>
            <Text style={styles.subtituloModal}>
              Solicitud: {servicioSeleccionado?.title} a {servicioSeleccionado?.provider}
            </Text>

            <View style={styles.cajaResumen}>
              <View style={styles.filaResumen}>
                <Text style={styles.etiquetaResumen}>Duracion:</Text>
                <Text style={styles.valorResumen}>{servicioSeleccionado?.duration || '2 Horas'}</Text>
              </View>
              
              <View style={styles.filaResumen}>
                <Text style={styles.etiquetaResumen}>Creditos A Transferir:</Text>
                <Text style={styles.valorResumenVerde}>{servicioSeleccionado?.credits || '2 Creditos'}</Text>
              </View>

              <View style={[styles.filaResumen, { marginBottom: 0 }]}>
                <Text style={styles.etiquetaResumen}>Tu Saldo Actual :</Text>
                <Text style={styles.valorResumen}>14 Horas</Text>
              </View>
            </View>

            <View style={styles.accionesModal}>
              <TouchableOpacity 
                style={styles.botonCancelar} 
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoBotonCancelar}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.botonConfirmar} 
                onPress={() => {
                  setModalVisible(false); 
                }}
              >
                <Text style={styles.textoBotonConfirmar}>Confirmar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

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
    paddingTop: 8,
    paddingBottom: 24,
  },
  filaFiltros: {
    flexDirection: 'row',
    marginBottom: 18,
    gap: 8,
  },
  fichaCategoria: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  fichaCategoriaActiva: {
    backgroundColor: '#0FAD76',
  },
  fichaCategoriaInactiva: {
    backgroundColor: '#E2E8F0',
  },
  textoCategoria: {
    fontSize: 13,
    fontWeight: '700',
  },
  textoCategoriaActivo: {
    color: '#FFFFFF',
  },
  textoCategoriaInactivo: {
    color: '#475569',
  },
  tarjeta: {
    padding: 18,
    marginBottom: 16,
  },
  cabeceraTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  filaProveedor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nombreProveedor: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
    marginRight: 6,
  },
  estrellaCalificacion: {
    fontSize: 13,
    fontWeight: '700',
    color: '#F59E0B',
  },
  insigniaDisponible: {
    backgroundColor: '#ECFDF5',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  textoInsigniaDisponible: {
    color: '#065F46',
    fontSize: 11,
    fontWeight: '700',
  },
  tituloServicio: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
  },
  descripcionServicio: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
    marginBottom: 14,
  },
  separador: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 12,
  },
  pieTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textoCosto: {
    fontSize: 13,
    color: '#475569',
  },
  creditoDestacado: {
    color: '#0FAD76',
    fontWeight: '700',
  },
  botonSolicitar: {
    paddingVertical: 9,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  textoBotonSolicitar: {
    fontSize: 14,
  },
  superposicionModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenidoModal: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tituloModal: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtituloModal: {
    fontSize: 11,
    color: '#94a3b8',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  cajaResumen: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
  },
  filaResumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  etiquetaResumen: {
    fontSize: 12,
    color: '#475569',
  },
  valorResumen: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
    textTransform: 'capitalize',
  },
  valorResumenVerde: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0FAD76',
    textTransform: 'capitalize',
  },
  accionesModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  botonCancelar: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotonCancelar: {
    color: '#475569',
    fontWeight: '700',
    fontSize: 13,
  },
  botonConfirmar: {
    flex: 1,
    backgroundColor: '#0FAD76',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotonConfirmar: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});