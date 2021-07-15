import 'babel-polyfill'

import {postToServer} from '../client/js/postToServer.js';

describe ('should be defined', () => {
    test('',  () => {
        
        expect(postToServer).toBeDefined();
    })
})