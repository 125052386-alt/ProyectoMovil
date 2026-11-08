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
import Tarjetas from '../components/Tarjetas';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function ReportesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Cabecera */}
      <AppHeader title="Reportes" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Formulario de Generación de Reporte */}
        <Tarjetas style={styles.tarjetaFormulario}>
          <Text style={styles.tituloSeccion}>Generar Reporte</Text>

          {/* Selector de Tipo de Reporte */}
          <View style={styles.grupoEntrada}>
            <Text style={styles.etiquetaEntrada}>Tipo de reporte</Text>
            <TouchableOpacity style={styles.contenedorSelector} activeOpacity={0.8}>
              <Text style={styles.valorSeleccionado}>
                Intercambios de tiempo generales
              </Text>
              <Text style={styles.iconoDesplegable}>∨</Text>
            </TouchableOpacity>
          </View>

          {/* Fila de Fechas Desde / Hasta */}
          <View style={styles.filaFechas}>
            <View style={styles.columnaFecha}>
              <CustomInput
                label="Desde"
                value="01/01/2026"
                placeholder="DD/MM/AAAA"
                style={styles.contenedorEntradaFecha}
              />
            </View>
            <View style={styles.columnaFecha}>
              <CustomInput
                label="Hasta"
                value="01/10/2026"
                placeholder="DD/MM/AAAA"
                style={styles.contenedorEntradaFecha}
              />
            </View>
          </View>
        </Tarjetas>

        {/* Tarjeta de Resumen del Período */}
        <Tarjetas style={styles.tarjetaResumen}>
          <Text style={styles.encabezadoResumen}>RESUMEN DEL PERÍODO</Text>

          {/* Columnas de Estadísticas */}
          <View style={styles.filaEstadisticas}>
            {/* Usuarios */}
            <View style={styles.contenedorEstadistica}>
              <Text style={styles.numeroEstadistica}>125</Text>
              <Text style={styles.etiquetaEstadistica}>Usuarios</Text>
            </View>

            {/* Créditos */}
            <View style={styles.contenedorEstadistica}>
              <Text style={[styles.numeroEstadistica, styles.estadisticaVerde]}>1,480</Text>
              <Text style={styles.etiquetaEstadistica}>Créditos</Text>
            </View>

            {/* Horas Op. */}
            <View style={styles.contenedorEstadistica}>
              <Text style={styles.numeroEstadistica}>261</Text>
              <Text style={styles.etiquetaEstadistica}>Horas Op.</Text>
            </View>
          </View>
        </Tarjetas>

        {/* Botón Descargar Reporte */}
        <CustomButton
          title="Descargar Reporte"
          variant="primary"
          style={styles.botonDescargar}
        />
      </ScrollView>

      {/* Barra de Navegación Administrador */}
      <AdminBottomTabBar activeTab="Reportes" />
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
  tarjetaFormulario: {
    padding: 20,
    marginBottom: 16,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 18,
  },
  grupoEntrada: {
    marginBottom: 16,
  },
  etiquetaEntrada: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  contenedorSelector: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  valorSeleccionado: {
    fontSize: 14,
    color: '#0F172A',
  },
  iconoDesplegable: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '800',
  },
  filaFechas: {
    flexDirection: 'row',
    gap: 12,
  },
  columnaFecha: {
    flex: 1,
  },
  contenedorEntradaFecha: {
    marginBottom: 0,
  },
  tarjetaResumen: {
    padding: 18,
    marginBottom: 20,
  },
  encabezadoResumen: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  filaEstadisticas: {
    flexDirection: 'row',
    gap: 10,
  },
  contenedorEstadistica: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numeroEstadistica: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  estadisticaVerde: {
    color: '#0FAD76',
  },
  etiquetaEstadistica: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '600',
  },
  botonDescargar: {
    borderRadius: 14,
    paddingVertical: 16,
  },
});