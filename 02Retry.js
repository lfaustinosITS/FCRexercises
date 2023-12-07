async function queryRetry(urlQuery,maxRetry,delay,useIncrement=false) {
   for (attempt = 1; attempt < maxRetry+2; attempt++){
      try{
         const response = await urlQuery();
         if (response.ok){
            return response;
         }
      }catch (error){
         if(attempt === maxRetry +1){
            throw new Error('Max retry exceeded') ;
         }
         if(useIncrement){
            newDelay = delay*attempt
         }else{newDelay = delay}
         await new Promise(resolve => setTimeout(resolve, newDelay));

      }
   } 
}
module.exports= queryRetry;


