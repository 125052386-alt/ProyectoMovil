import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function RegistroScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Cabecera Superior */}
        <View style={styles.cabecera}>
          <Text style={styles.tituloCabecera}>Registro de Usuario</Text>
        </View>

        {/* Tarjeta de Formulario de Registro */}
        <View style={styles.contenedorTarjeta}>
          <Text style={styles.textoInsignia}>ÚNETE AL BANCO</Text>
          <Text style={styles.tituloTarjeta}>Crear Nueva Cuenta</Text>

          {/* Campos del Formulario */}
          <CustomInput
            label="Nombre completo"
            value="Karen Hernandez"
            placeholder="Ingresa tu nombre completo"
          />

          <CustomInput
            label="E-mail"
            value="Karen@ejemplo.com"
            placeholder="correo@ejemplo.com"
            keyboardType="email-address"
          />

          <CustomInput
            label="Número de tel"
            value="+34 612 345 678"
            placeholder="+34 000 000 000"
            keyboardType="phone-pad"
          />

          <CustomInput
            label="Fecha de nacimiento"
            value="12/04/2007"
            placeholder="DD/MM/AAAA"
          />

          {/* Checkbox Acepto Normas */}
          <View style={styles.filaCasilla}>
            <View style={styles.casilla}>
              <Text style={styles.marcaVerificacion}>✓</Text>
            </View>
            <Text style={styles.etiquetaCasilla}>
              Acepto las normas comunitarias del Banco
            </Text>
          </View>

          {/* Botón Acción Registro */}
          <CustomButton
            title="INICIO / REGISTRARSE"
            variant="primary"
            style={styles.botonEnviar}
          />

          {/* Enlace para Iniciar Sesión */}
          <View style={styles.filaPie}>
            <Text style={styles.textoPie}>¿Ya tienes cuenta? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.textoEnlace}>Inicia sesión aquí</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 16,
    paddingBottom: 32,
  },
  cabecera: {
    paddingVertical: 14,
    marginBottom: 12,
  },
  tituloCabecera: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  contenedorTarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 20,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  textoInsignia: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0FAD76',
    letterSpacing: 0.5,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  tituloTarjeta: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 20,
  },
  filaCasilla: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  casilla: {
    width: 20,
    height: 20,
    backgroundColor: '#0FAD76',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  marcaVerificacion: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  etiquetaCasilla: {
    fontSize: 12.5,
    color: '#475569',
    flex: 1,
  },
  botonEnviar: {
    marginTop: 16,
    borderRadius: 14,
    paddingVertical: 15,
  },
  filaPie: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  textoPie: {
    fontSize: 13,
    color: '#0FAD76',
  },
  textoEnlace: {
    fontSize: 13,
    color: '#0FAD76',
    fontWeight: '800',
  },
});