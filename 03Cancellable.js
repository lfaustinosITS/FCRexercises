function cancellableFetch(url){
    let cancelled = false;

    const cancel = () => {
        cancelled =true;
    }

    const fetchPromise = new Promise((resolve,reject)=>{
        if (cancelled){
            reject(new Error('Request was cancelled'));
            return;
        }
        fetch(url)
            .then((response)=>{
                if (cancelled){
                    reject(new Error('Request was cancelled'));
                    return;
                }
                if (!response.ok){
                    reject(new Error('Network response fail'))
                    return;
                }else{
                    response.json().then(resolve).catch(reject);
                }
            })
            .catch(reject);
    });
    fetchPromise.cancel = cancel;
    
    return fetchPromise;
};

module.exports = cancellableFetch;


