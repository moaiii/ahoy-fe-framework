import { StyleSheet } from 'react-native';
import * as globals from '../../common/styles/globals';


export default StyleSheet.create({
  'NativeBase.List': {
    '.customStyleProp': {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: globals.fontFamily__normal,
      fontSize: globals.fontSize__large
    }
  }
});