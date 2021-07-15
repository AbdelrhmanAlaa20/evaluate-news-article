import {checkUrl} from '../client/js/checkURL.js' ;
import 'babel-polyfill'

describe (' should be defined', () => {
    test('should be defined', () => {
        const checked = checkUrl();
        expect(checked).toBeDefined();

    })
})