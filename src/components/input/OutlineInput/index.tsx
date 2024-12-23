import React from 'react';
import { Control, Controller, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { useAppTheme } from '@theme/theme';
import { TextInput, TextInputProps } from 'react-native-paper';
import font from '@theme/font';

export interface OutlineInputProps extends TextInputProps {}

const OutlineInput = ({ ...rest }: OutlineInputProps) => {
  const { colors } = useAppTheme();

  return (
    <TextInput
      {...rest}
      mode={'outlined'}
      activeOutlineColor={rest.activeOutlineColor ?? colors.orangeLight500}
      placeholderTextColor={colors.textSecondary}
      label={rest.value ? rest.label : ''}
      textColor={colors.textPrimary}
      multiline={false}
      style={{ backgroundColor: colors.background }}
      outlineStyle={{
        borderWidth: 1,
        borderRadius: 6,
        borderColor: rest.outlineColor ?? colors.textFieldBorderFilled,
        height: 48,
      }}
      contentStyle={{ ...font.inputTextMedium }}
    />
  );
};

export default OutlineInput;
