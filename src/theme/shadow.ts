const ShadowStyles = {
  extraSmall: {
    shadowColor: '#4c4c4c29',
    shadowOffset: { width: 0, height: 2 }, // Position x: 0, y: 2
    // shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 4, // Android only
  },
  small: {
    // iOS shadow properties
    shadowColor: '#4c4c4c2e',
    shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 6, // Android only
  },
  medium: {
    shadowColor: '#4c4c4c33', // Shadow color without alpha
    shadowOffset: { width: 0, height: 4 }, // Position x: 0, y: 4
    // shadowOpacity: 0.2, // Approximation of #20 hex alpha (~12.5% opacity)
    shadowRadius: 10, // Blur radius
    // Android shadow
    elevation: 10, // Android approximation of shadow
  },
  large: {
    shadowColor: '#4c4c4c38', // Shadow color without alpha
    shadowOffset: { width: 0, height: 6 },
    // shadowOpacity: 0.22,
    shadowRadius: 16, // Blur radius
    // Android shadow
    elevation: 16, // Android approximation of shadow
  },
  extraLarge: {
    // iOS shadow properties
    shadowColor: '#4c4c4c3d', // Shadow color without alpha
    shadowOffset: { width: 0, height: 8 }, // Position x: 0, y: 8
    // shadowOpacity: 24, //
    shadowRadius: 28, // Blur radius
    // Android shadow
    elevation: 28, // Android approximation of shadow
  },
};
export default ShadowStyles;
