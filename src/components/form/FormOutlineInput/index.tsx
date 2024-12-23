import React from 'react';
import { Control, Controller, FieldErrors, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import OutlineInput, { OutlineInputProps } from '@components/input/OutlineInput';
import { HelperText, Text } from 'react-native-paper';
import { useAppTheme } from '@theme/theme';
import font from '@theme/font';

interface FormOutlineInputProps<T extends FieldValues> extends OutlineInputProps {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'> | undefined;
}

const FormOutlineInput = <T extends FieldValues>({ control, name, rules, ...rest }: FormOutlineInputProps<T>) => {
  const { colors } = useAppTheme();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value, onBlur }, fieldState: { invalid, isTouched, error } }) => (
        <>
          <OutlineInput
            {...rest}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={rest.label?.toString()}
            placeholderTextColor={colors.textSecondary}
            label={
              <Text
                style={
                  invalid
                    ? { color: colors.redError600, ...font.inputLabel }
                    : { color: colors.textSecondary, ...font.inputLabel }
                }>
                {rest.label}
              </Text>
            }
            outlineColor={!!invalid ? colors.redError600 : colors.textFieldBorderFilled}
            activeOutlineColor={!!invalid ? colors.redError600 : colors.orangeLight500}
          />
          {isTouched && invalid && (
            <HelperText type="error" visible={!!invalid} style={{ color: colors.redError600, ...font.helperText }}>
              {error?.message?.toString() || ''}
            </HelperText>
          )}
        </>
      )}
    />
  );
};

export default FormOutlineInput;
