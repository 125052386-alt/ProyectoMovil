import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  StatusBar,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import Tarjetas from '../components/Tarjetas';
import UserBottomTabBar from '../components/UserBottomTabBar';

export default function MisServiciosScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listaServicios, setListaServicios] = useState([
    {
      id: '1',
      category: 'Tecnología',
      title: 'Ayuda con Programación',
      description: 'Asesoría en desarrollo web, React y resolución de bugs.',
      duration: '2 Horas',
      isActive: true,
    },
    {
      id: '2',
      category: 'Tecnología',
      title: 'Configuración y Redes Wi-Fi',
      description: 'Optimización de routers y cableado para hogares.',
      duration: '1 Hora',
      isActive: true,
    },
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <AppHeader
        title="Mis Servicios"
        rightActionTitle="+ Publicar"
        onRightActionPress={() => setModalVisible(true)}
      />

      <ScrollView contentContainerStyle={styles.scrollcontainer} showsVerticalScrollIndicator={false}>
        <View style={styles.contenedorBanner}>
          <View style={styles.informacionBanner}>
            <Text style={styles.tituloBanner}>Solicitudes Recibidas</Text>
            <Text style={styles.subtituloBanner}>
              3 miembros esperando confirmación
            </Text>
          </View>
          <TouchableOpacity style={styles.botonBanner} activeOpacity={0.8}>
            <Text style={styles.textoBotonBanner}>Ver (3)</Text>
          </TouchableOpacity>
        </View>

        {listaServicios.map((service) => (
          <Tarjetas key={service.id} style={styles.tarjetaServicio}>
            <Text style={styles.etiquetaCategoria}>
              Categoría: {service.category}
            </Text>
            <Text style={styles.tituloServicio}>{service.title}</Text>
            <Text style={styles.descripcionServicio}>{service.description}</Text>

            <View style={styles.separador} />

            <View style={styles.pieTarjeta}>
              <Text style={styles.textoDuracion}>
                Duración: <Text style={styles.textoNegrita}>{service.duration}</Text>
              </Text>

              <View style={styles.filaEstado}>
                <Text style={styles.etiquetaEstado}>
                  Estado:
                  <Text style={service.isActive ? styles.estadoActivo : styles.estadoInactivo}>
                    {service.isActive ? 'Activo' : 'Inactivo'}
                  </Text>
                </Text>
                <Switch
                  value={service.isActive}
                  onValueChange={(valor) =>
                    setListaServicios((servicios) =>
                      servicios.map((item) =>
                        item.id === service.id ? { ...item, isActive: valor } : item,
                      ),
                    )
                  }
                  trackColor={{ false: '#CBD5E1', true: '#0FAD76' }}
                  thumbColor="#FFFFFF"
                  style={styles.interruptor}
                />
              </View>
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
            
            <View style={styles.cabeceraModal}>
              <Text style={styles.tituloModal}>Publicar Servicio</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.iconoCerrar}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.etiquetaInput}>Título del Servicio</Text>
            <TextInput 
              style={styles.entradaTexto} 
              placeholder="Ej. Arreglo de Auto" 
              placeholderTextColor="#9ca3af"
            />

            <Text style={styles.etiquetaInput}>Categoría</Text>
            <View style={styles.entradaTexto}>
              <Text style={styles.textoDesplegable}>Mecanica</Text>
              <Text style={styles.iconoDesplegable}>⌄</Text> 
            </View>

            <Text style={styles.etiquetaInput}>Duración Hr</Text>
            <TextInput 
              style={styles.entradaTexto} 
              placeholder="2" 
              placeholderTextColor="#9ca3af"
              keyboardType="numeric"
            />

            <View style={styles.accionesModal}>
              <TouchableOpacity 
                style={styles.botonCancelar} 
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoBotonCancelar}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.botonGuardar} 
                onPress={() => {
                  setModalVisible(false); 
                }}
              >
                <Text style={styles.textoBotonGuardar}>✓ Guardar</Text>
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
  scrollcontainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  contenedorBanner: {
    backgroundColor: '#0FAD76',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  informacionBanner: {
    flex: 1,
    paddingRight: 10,
  },
  tituloBanner: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  subtituloBanner: {
    fontSize: 12,
    color: '#D1FAE5',
  },
  botonBanner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  textoBotonBanner: {
    color: '#0FAD76',
    fontSize: 13,
    fontWeight: '700',
  },
  tarjetaServicio: {
    padding: 18,
    marginBottom: 14,
  },
  etiquetaCategoria: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0FAD76',
    marginBottom: 6,
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
  textoDuracion: {
    fontSize: 13,
    color: '#475569',
  },
  textoNegrita: {
    fontWeight: '700',
    color: '#0F172A',
  },
  filaEstado: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  etiquetaEstado: {
    fontSize: 13,
    color: '#475569',
    marginRight: 8,
  },
  estadoActivo: {
    color: '#0FAD76',
    fontWeight: '700',
  },
  estadoInactivo: {
    color: '#64748B',
    fontWeight: '700',
  },
  interruptor: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
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
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cabeceraModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  tituloModal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
  },
  iconoCerrar: {
    fontSize: 18,
    color: '#6b7280',
    padding: 5,
  },
  etiquetaInput: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 6,
  },
  entradaTexto: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  textoDesplegable: {
    color: '#1f2937',
    fontSize: 14,
  },
  iconoDesplegable: {
    color: '#6b7280',
    fontSize: 16,
  },
  accionesModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 12,
  },
  botonCancelar: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotonCancelar: {
    color: '#4b5563',
    fontWeight: '600',
    fontSize: 14,
  },
  botonGuardar: {
    flex: 1,
    backgroundColor: '#00C875',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotonGuardar: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});