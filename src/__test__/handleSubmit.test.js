import 'babel-polyfill'

import {handleSubmit} from '../client/index.js';

describe ('should be defined', () => {
    test('should be defined', () => {
        // const submit = handleSubmit();
        expect(handleSubmit).toBeDefined();
    })
})