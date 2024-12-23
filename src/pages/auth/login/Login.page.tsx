import { useTranslation } from 'react-i18next';
import LoginStyles from './Login.styles';
import { Text } from 'react-native-paper';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormOutlineInput from '@components/form/FormOutlineInput';
import PageWrapper from '@components/view/PageWrapper';
import ContentWrapper from '@components/view/ContentWrapper';
import font from '@theme/font';
import { useAppTheme } from '@theme/theme';
import PrimaryButton from '@components/button/PrimaryButton';
import AppLogo from '@assets/icons/AppLogo';
import { View } from 'react-native';

// Define the validation schema using Yup
const schema = Yup.object({
  username: Yup.string().email('Invalid email address'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long'),
}).required();

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { colors } = useAppTheme();
  const { t } = useTranslation();
  const onSubmit = (data: { username?: string | undefined; password?: string | undefined }) => {
    console.log('data:', data);
  };

  return (
    <PageWrapper style={LoginStyles.container}>
      <ContentWrapper style={{ justifyContent: 'center' }}>
        <Text style={[font.headlineH4, { color: colors.mainColorOLight900, textAlign: 'center' }]}>
          {t('login_screen.title')}
        </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <AppLogo />
        </View>
        <Text style={[font.headlineH5, { color: colors.textPrimary, textAlign: 'center' }]}>
          {t('login_screen.introduction')}
        </Text>
        <FormOutlineInput name={'username'} control={control} label={t('login_screen.username')} />
        <FormOutlineInput name={'password'} control={control} label={t('login_screen.password')} />

        <PrimaryButton
          disabled={!isValid}
          label={t('login_screen.login_button_label')}
          onPress={handleSubmit(onSubmit)}
        />
      </ContentWrapper>
    </PageWrapper>
  );
}
