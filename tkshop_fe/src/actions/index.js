export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
 
export function fc_increment(){
    return{
        type:'INCREMENT'
       
    }
}
 
export function fc_decrement(){
    return {
        type:'DECREMENT'
    }
}
