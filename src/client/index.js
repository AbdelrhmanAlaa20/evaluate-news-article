import {checkUrl} from './js/checkURL.js';
import {postToServer} from './js/postToServer.js';

import './styles/style.scss';


export { checkUrl };
export { postToServer };
export { handleSubmit };

// TODO include your scss file here
 

window.onload=function(){
    
    const bttnSubmit = document.querySelector('.btn');

bttnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('event listener works');
    urlToCheck = document.getElementById('url').value;
    console.log(urlToCheck);

    handleSubmit();


})

}

let urlToCheck;

// const bttnSubmit = document.querySelector('.btn');

// bttnSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('event listener works');
//     urlToCheck = document.getElementById('url').value;
//     console.log(urlToCheck);

//     handleSubmit();

// })

const handleSubmit = () => {

    if ( checkUrl(urlToCheck) ) {

      console.log('reached handleSubmit');
      const updateElements = (res) => {
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById("score_tag").innerHTML = `Score Tag: ${res.score_tag}`;
        }
    

        postToServer('http://localhost:8081/api', {url: urlToCheck})
        .then ( (res) => {
            updateElements(res);
        })
    } else {
        alert(' This is not a valid url ! please, enter a valid url.');
    }
}

