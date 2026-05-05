import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image 
        source={require('..//assets/avatar.png')}
        style={styles.avatar}
        />
    </View>  
    <View style={styles.content}>
      <Text style={styles.title}>Duda Shopping List</Text>
      <Text style={styles.text}>
        Monte sua lista de compras e ão se esqueça mais o que precisa comprar ao sair de casa!!! 
      </Text>
      <Link style={styles.button} href={"/home"}>
      <Text style={styles.buttonText}>Acessar</Text>
      </Link>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  containerImage: {
  flex: 2,
  alignItems: 'center',
  justifyContent: 'center',
  },

  avatar: {
    width: 230,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 115,
  },
  
});

