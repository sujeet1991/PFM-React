import {FETCH_DATA} from './type';
import Api from '../../Api'

export const fetchData=(data)=>dispatch=>{
    console.log('action fetch');
    fetch(Api.apiURL,{
        method:'POST',
        headers:{
            'content-type':'application/json',
            
        },
        body:JSON.stringify(data)
    }).then(res=>res.json()).then(posts=>dispatch({
        type:FETCH_DATA,
        payload:posts
    }))
}
