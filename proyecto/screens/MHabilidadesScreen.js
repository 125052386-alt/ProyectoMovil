import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import CustomButton from '../components/CustomButton';
import Tarjetas from '../components/Tarjetas';
import UserBottomTabBar from '../components/UserBottomTabBar';

export default function MisHabilidadesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const listaHabilidades = [
    {
      id: '1',
      title: 'Desarrollo Web & Programación',
      category: 'Tecnología',
    },
    {
      id: '2',
      title: 'Clases de Guitarra & Teoría',
      category: 'Artes y Música',
    },
    {
      id: '3',
      title: 'Inglés Conversacional',
      category: 'Idiomas',
    },
    {
      id: '4',
      title: 'Reparación de Computadoras',
      category: 'Tecnología',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <AppHeader
        title="Mis Habilidades"
        rightActionTitle="+ Añadir"
        onRightActionPress={() => setModalVisible(true)}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.bannerInformativo}>
          <Text style={styles.textoBannerInformativo}>
            Habilidades que puedes compartir con la comunidad
          </Text>
        </View>

        {listaHabilidades.map((skill) => (
          <Tarjetas key={skill.id} style={styles.tarjetaHabilidad}>
            <View style={styles.filaCabeceraTarjeta}>
              <View style={styles.insigniaNumero}>
                <Text style={styles.textoNumero}>{skill.id}</Text>
              </View>

              <View style={styles.columnaTitulo}>
                <Text style={styles.tituloHabilidad}>{skill.title}</Text>
                <Text style={styles.categoriaHabilidad}>{skill.category}</Text>
              </View>
            </View>

            <View style={styles.filaAcciones}>
              <CustomButton
                title="Ver"
                variant="action-view"
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.superposicionModal}>
          <View style={styles.contenidoModal}>
            
            <View style={styles.cabeceraModal}>
              <Text style={styles.tituloModal}>Añadir Nueva Habilidad</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.iconoCerrar}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.etiquetaInput}>Nombre de la habilidad</Text>
            <TextInput 
              style={styles.entradaTexto} 
              placeholder="Ej. Cocina" 
              placeholderTextColor="#9ca3af"
            />

            <Text style={styles.etiquetaInput}>Categoría</Text>
            <View style={styles.entradaTexto}>
              <Text style={styles.textoDesplegable}>Alimentos</Text>
              <Text style={styles.iconoDesplegable}>⌄</Text> 
            </View>

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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  bannerInformativo: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  textoBannerInformativo: {
    fontSize: 13,
    color: '#065F46',
    fontWeight: '500',
  },
  tarjetaHabilidad: {
    padding: 16,
    marginBottom: 14,
  },
  filaCabeceraTarjeta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  insigniaNumero: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#D1FAE5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  textoNumero: {
    fontSize: 14,
    fontWeight: '800',
    color: '#065F46',
  },
  columnaTitulo: {
    flex: 1,
  },
  tituloHabilidad: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },
  categoriaHabilidad: {
    fontSize: 12.5,
    color: '#64748B',
  },
  filaAcciones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
    paddingTop: 8,
  },
  botonAccion: {
    marginLeft: 8,
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