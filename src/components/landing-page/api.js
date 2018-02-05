import axios from 'axios';
import store from '../../store';
import * as actions from './actions';


export function dummy() {
  return axios.get('/dummy')
    .then(response => {
    	store.dispatch(actions.dummy());
      
    })
    .catch(e => {
    	console.error('~ Error in api: ', e);
    });
};



/** 
 * 
  THINGS THAT ARE COMMON TO NATIVE/ WEB
  /common
    /internationalization
    /styles
      /globals.js
      /colors.js
    /form_validation
    /components
      /landingPage
        /api.js
        /reducer.js
        /action.js
        /types.js
        /test.js
        /api.js
 */

/** 
 * 
  THINGS THAT ARE VIEW SPECIFIC (NATIVE/ WEB CODE SPLIT)
  jsx
  styles
  view based tests
 * 
 */

//Form validations
// export.cardValidator = function(string) {

//   return {
//     isValidated,
//     message
//   };
// };