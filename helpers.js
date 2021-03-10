// contain functions that we reuse in this projects
import {TIMEOUT_SEC} from "./config.js"


// this is the function to help slow internet connections (fetch could last forever)
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


export const getJSON = async function(url){
    try{

    const res = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)])  // we can reuse that function for all kinds of urls
    const data = await res.json() // converting to json
  
    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
    } catch (err) {
        throw err
    }
}