import { StyleSheet, View, ViewProps } from 'react-native';

type ContentWrapperProps = ViewProps;

const ContentWrapper = (props: ContentWrapperProps) => {
  return (
    <View {...props} style={StyleSheet.compose(styles.container, props.style)}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ContentWrapper;
