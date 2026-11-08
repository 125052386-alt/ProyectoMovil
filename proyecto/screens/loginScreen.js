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

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0FAD76" />
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        {/* Banner Superior Verde */}
        <View style={styles.bannerSuperior}>
          <Text style={styles.insigniaModulo}>MÓDULO USUARIO</Text>
          <Text style={styles.tituloPrincipal}>Banco de Tiempo</Text>
          <Text style={styles.lema}>Intercambia habilidades por tiempo</Text>
        </View>

        {/* Formulario de Login */}
        <View style={styles.contenedorFormulario}>
          <Text style={styles.encabezado}>Inicia Sesión</Text>
          <Text style={styles.subencabezado}>
            Ingresa tus credenciales para continuar
          </Text>

          {/* Campo E-mail */}
          <CustomInput
            label="E-mail"
            value="karenU@bancotiempo.org"
            placeholder="correo@ejemplo.com"
          />

          {/* Campo Contraseña */}
          <CustomInput
            label="Contraseña"
            value="••••••••••••"
            placeholder="Tu contraseña"
            secureTextEntry={true}
          />

          {/* Botón Iniciar Sesión */}
          <CustomButton
            title="INICIA SESIÓN"
            variant="primary"
            style={styles.botonInicioSesion}
          />

          {/* Enlace de Registro */}
          <View style={styles.filaPie}>
            <Text style={styles.textoPie}>¿No tienes cuenta? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.textoEnlace}>Regístrate aquí</Text>
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
    backgroundColor: '#0FAD76',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  bannerSuperior: {
    backgroundColor: '#0FAD76',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 42,
  },
  insigniaModulo: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D1FAE5',
    letterSpacing: 1,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  lema: {
    fontSize: 14,
    color: '#ECFDF5',
    marginTop: 4,
    fontWeight: '400',
  },
  contenedorFormulario: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -16,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  subencabezado: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 28,
  },
  botonInicioSesion: {
    marginTop: 14,
    borderRadius: 14,
    paddingVertical: 16,
  },
  filaPie: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textoPie: {
    fontSize: 13,
    color: '#64748B',
  },
  textoEnlace: {
    fontSize: 13,
    color: '#0FAD76',
    fontWeight: '700',
  },
});