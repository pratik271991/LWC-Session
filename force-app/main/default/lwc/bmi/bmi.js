/* Export Functionality */


const getBmi=function(weightInKg,heightInMt){
    try{
        return weightInKg/(heightInMt*heightInMt) ;
        }catch(error){
            return undefined ;
        }
};

export{
    getBmi 
};

