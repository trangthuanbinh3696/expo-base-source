import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import LoginStyles from './Login.styles';
export default function Login() {
  const { t } = useTranslation();
  return (
    <View style={LoginStyles.container}>
      <Text>{t('login_screen.title')}</Text>
      <Text>{t('login_screen.username')}</Text>
      <Text>{t('login_screen.password')}</Text>
    </View>
  );
}
