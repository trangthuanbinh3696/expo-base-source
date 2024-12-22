import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import LoginStyles from './Login.styles';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
export default function Login() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <View style={LoginStyles.container}>
      <Text>{t('login_screen.title')}</Text>
      <Text>{t('login_screen.username')}</Text>
      <Text>{t('login_screen.password')}</Text>
      <Button onPress={() => router.navigate('/auth/forgot-password')}>
        <Text>Forgot password</Text>
      </Button>
    </View>
  );
}
