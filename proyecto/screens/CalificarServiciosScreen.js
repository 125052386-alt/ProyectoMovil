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
import Avatar from '../components/Avatar';
import Tarjetas from '../components/Tarjetas';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import UserBottomTabBar from '../components/UserBottomTabBar';

export default function CalificarServicioScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera con botón volver y etiqueta Paso Final */}
      <AppHeader
        title="Calificar Servicio"
        showBack={true}
        rightBadgeText="Paso Final"
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Tarjeta del Proveedor del Servicio */}
        <Tarjetas style={styles.tarjetaProveedor}>
          <View style={styles.filaProveedor}>
            <Avatar
              initials="JP"
              size={46}
              backgroundColor="#0FAD76"
              style={styles.avatar}
            />
            <View style={styles.infoProveedor}>
              <Text style={styles.nombreProveedor}>Juan Pérez</Text>
              <Text style={styles.subtituloProveedor}>Proveedor verificado</Text>
            </View>
          </View>

          {/* Pastilla con el servicio recibido */}
          <View style={styles.pastillaServicio}>
            <Text style={styles.textoPastillaServicio}>
              Ayuda con Programación & React · <Text style={styles.horasDestacadas}>2 Horas</Text>
            </Text>
          </View>
        </Tarjetas>

        {/* Tarjeta de Calificación de Estrellas */}
        <Tarjetas style={styles.tarjetaCalificacion}>
          <Text style={styles.indicacionCalificacion}>¿CÓMO CALIFICARÍAS ESTE INTERCAMBIO?</Text>

          {/* 5 Estrellas */}
          <View style={styles.filaEstrellas}>
            {['★', '★', '★', '★', '★'].map((star, idx) => (
              <Text key={idx} style={styles.iconoEstrella}>
                {star}
              </Text>
            ))}
          </View>

          {/* Mensaje de Feedback */}
          <View style={styles.insigniaComentario}>
            <Text style={styles.textoComentario}>
              ¡Excelente experiencia! Totalmente recomendado
            </Text>
          </View>
        </Tarjetas>

        {/* Tarjeta de Comentarios */}
        <Tarjetas style={styles.tarjetaComentario}>
          <CustomInput
            label="Comentario sobre la experiencia"
            value="Excelente sesión. Resolvió todas mis dudas de React con mucha paciencia."
            multiline={true}
            numberOfLines={3}
            inputStyle={styles.entradaComentario}
          />
        </Tarjetas>

        {/* Notificación de Horas a Transferir */}
        <View style={styles.alertaTransferencia}>
          <Text style={styles.textoTransferencia}>
            Horas a transferir: <Text style={styles.transferenciaNegrita}>2 Horas de tu saldo</Text>
          </Text>
        </View>

        {/* Botón de Confirmación */}
        <CustomButton
          title="Confirmar & Enviar Calificación"
          variant="primary"
          style={styles.botonConfirmar}
        />
      </ScrollView>

      {/* Barra de Navegación Inferior */}
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
  tarjetaProveedor: {
    padding: 16,
    marginBottom: 16,
  },
  filaProveedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    marginRight: 12,
  },
  infoProveedor: {
    flex: 1,
  },
  nombreProveedor: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtituloProveedor: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  pastillaServicio: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  textoPastillaServicio: {
    fontSize: 13,
    color: '#1E293B',
    fontWeight: '600',
  },
  horasDestacadas: {
    color: '#0FAD76',
    fontWeight: '700',
  },
  tarjetaCalificacion: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  indicacionCalificacion: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  filaEstrellas: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  iconoEstrella: {
    fontSize: 32,
    color: '#F59E0B',
  },
  insigniaComentario: {
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  textoComentario: {
    color: '#B45309',
    fontSize: 12.5,
    fontWeight: '700',
  },
  tarjetaComentario: {
    padding: 16,
    marginBottom: 16,
  },
  entradaComentario: {
    minHeight: 70,
  },
  alertaTransferencia: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  textoTransferencia: {
    fontSize: 13,
    color: '#065F46',
  },
  transferenciaNegrita: {
    fontWeight: '800',
  },
  botonConfirmar: {
    borderRadius: 14,
    paddingVertical: 15,
  },
});