import {checkUrl} from './js/checkURL.js';
import {postToServer} from './js/postToServer.js';

import './styles/style.css';


export { checkUrl };
export { postToServer };
export { handleSubmit };

// TODO include your scss file here
 

window.onload=function(){
    
    const bttnSubmit = document.querySelector('.btn');

    bttnSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        let urlToCheck = document.getElementById('url').value;

        handleSubmit(urlToCheck);
    })

}

const handleSubmit = (urlToCheck) => {

    if ( checkUrl(urlToCheck) ) {
      console.log('handleSubmit');
      console.log(urlToCheck);
      const updateElements = (res) => {
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById("score_tag").innerHTML = `Score Tag: ${res.score_tag}`;
        }
        postToServer('/api', {url: urlToCheck})
        .then ( (res) => {
            updateElements(res);
        })
    } else {
        alert(' This is not a valid url ! please, enter a valid url.');
    }
}

