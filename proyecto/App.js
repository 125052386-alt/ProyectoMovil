import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import AdministrarCalificacionesScreen from './screens/AdministrarCalificacionesScreen';
import AdministrarServiciosScreen from './screens/AdministrarServiciosScreen';
import AdministrarUsuariosScreen from './screens/AdministrarUsuariosSreen';
import CalificarServiciosScreen from './screens/CalificarServiciosScreen';
import CategoriasScreen from './screens/CategoriasScreen';
import FavoritosScreen from './screens/FavoritosScreen';
import HistorialScreen from './screens/HistorialScreen';
import LoginScreen from './screens/loginScreen';
import MisHabilidadesScreen from './screens/MHabilidadesScreen';
import MisServiciosScreen from './screens/MisServiciosScreen';
import PerfileUScreen from './screens/PerfilUScreen';
import RegistroScreen from './screens/registroScreen';
import ReportesScreen from './screens/ReportesScreen';
import SolicitarServiciosScreen from './screens/SolicitarServiciosScreen';

export default function App() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'login':
      return <SafeAreaProvider><LoginScreen /></SafeAreaProvider>;
    case 'registro':
      return <SafeAreaProvider><RegistroScreen /></SafeAreaProvider>;
    case 'perfil':
      return <SafeAreaProvider><PerfileUScreen /></SafeAreaProvider>;
    case 'habilidades':
      return <SafeAreaProvider><MisHabilidadesScreen /></SafeAreaProvider>;
    case 'misServicios':
      return <SafeAreaProvider><MisServiciosScreen /></SafeAreaProvider>;
    case 'solicitarServicios':
      return <SafeAreaProvider><SolicitarServiciosScreen /></SafeAreaProvider>;
    case 'favoritos':
      return <SafeAreaProvider><FavoritosScreen /></SafeAreaProvider>;
    case 'historial':
      return <SafeAreaProvider><HistorialScreen /></SafeAreaProvider>;
    case 'panelAdmin':
      return <SafeAreaProvider><AdminDashboardScreen /></SafeAreaProvider>;
    case 'categorias':
      return <SafeAreaProvider><CategoriasScreen /></SafeAreaProvider>;
    case 'administrarServicios':
      return <SafeAreaProvider><AdministrarServiciosScreen /></SafeAreaProvider>;
    case 'administrarUsuarios':
      return <SafeAreaProvider><AdministrarUsuariosScreen /></SafeAreaProvider>;
    case 'administrarCalificaciones':
      return <SafeAreaProvider><AdministrarCalificacionesScreen /></SafeAreaProvider>;
    case 'calificarServicios':
      return <SafeAreaProvider><CalificarServiciosScreen /></SafeAreaProvider>;
    case 'reportes':
      return <SafeAreaProvider><ReportesScreen /></SafeAreaProvider>;
    case 'menu':
    default:
      return (
        <SafeAreaProvider>
          <View style={styles.contenedor}>
            <Text>Menu de Interfaces</Text>
            <Button title="Login" onPress={() => setScreen('login')} />
            <Button title="Registro" onPress={() => setScreen('registro')} />
            <Button title="Perfil de usuario" onPress={() => setScreen('perfil')} />
            <Button title="Mis habilidades" onPress={() => setScreen('habilidades')} />
            <Button title="Mis servicios" onPress={() => setScreen('misServicios')} />
            <Button title="Solicitar servicios" onPress={() => setScreen('solicitarServicios')} />
            <Button title="Favoritos" onPress={() => setScreen('favoritos')} />
            <Button title="Historial" onPress={() => setScreen('historial')} />
            <Button title="Panel de administrador" onPress={() => setScreen('panelAdmin')} />
            <Button title="Categorías" onPress={() => setScreen('categorias')} />
            <Button title="Administrar servicios" onPress={() => setScreen('administrarServicios')} />
            <Button title="Administrar usuarios" onPress={() => setScreen('administrarUsuarios')} />
            <Button title="Administrar calificaciones" onPress={() => setScreen('administrarCalificaciones')} />
            <Button title="Calificar servicios" onPress={() => setScreen('calificarServicios')} />
            <Button title="Reportes" onPress={() => setScreen('reportes')} />
          </View>
        </SafeAreaProvider>
      );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
