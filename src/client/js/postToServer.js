
const postToServer= async (url = '', data = {} ) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json' 
           },
            body: JSON.stringify(data)
             } );
        try {
            const fetchedData = await response.json()
            return fetchedData ;
        }catch (err) {
            console.log('error', err)
        }
}

export {postToServer}; 