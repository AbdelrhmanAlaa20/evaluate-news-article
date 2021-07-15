// TODO declare a function to check the url ..

export  function checkUrl(value)
    {
        let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
        let regexp = new RegExp(expression);
        return regexp.test(value);
    } ;


