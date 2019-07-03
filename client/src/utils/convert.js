const convertToLakh =(price)=>{
        if ((parseInt(price) > 100000) && (parseInt(price) < 1000000)) {
          return `${price.slice(0)} Lakhs`;
        }
        else if((parseInt(price) > 1000000) && (parseInt(price) < 10000000)){
            return `${price.slice(0,2)} Lakhs`
        }
        else if((parseInt(price) > 10000000) && (parseInt(price) < 100000000)){
             return `${price.slice(0,1)}.${price.slice(1,2)} Cr.`;
        }
         else if((parseInt(price) > 100000000) && (parseInt(price) < 10000000000)){
             return `${price.slice(0)}.${price.slice(2)} Cr.`;
        }
        
}

export default convertToLakh;