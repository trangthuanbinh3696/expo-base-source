import font from '@theme/font';
import { useAppTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps, Text } from 'react-native-paper';

type PrimaryButtonProps = { label: string; children?: React.ReactNode } & Omit<ButtonProps, 'children'>;

export const PrimaryButton = ({ label, children, ...rest }: PrimaryButtonProps) => {
  const { colors } = useAppTheme();
  return (
    <Button
      {...rest}
      style={[
        {
          width: '100%',
          backgroundColor: rest.disabled ? colors.orangeLight500 : colors.mainColorOLight900,
          borderRadius: 4,
        },
      ]}
      mode="contained">
      {label ? (
        <Text style={StyleSheet.compose(font.buttonLarge, { color: colors.mainColorTextWhite })}>{label}</Text>
      ) : (
        children
      )}
    </Button>
  );
};

export default PrimaryButton;
