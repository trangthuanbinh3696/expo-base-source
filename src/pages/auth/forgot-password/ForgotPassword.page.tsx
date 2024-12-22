import { Text, View } from 'react-native';
import ForgotPasswordStyles from './ForgotPassword.styles';
import { useAppTheme } from '@theme/theme';

const ForgotPassword = () => {
  return (
    <View style={ForgotPasswordStyles.container}>
      <Text>ForgotPassword page</Text>
    </View>
  );
};

export default ForgotPassword;
