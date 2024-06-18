// khởi tạo state 
const initialCount:number=0;
// khởi tạo reducers
const reducerCount = (state=initialCount,action:any)=>{
    switch (action.type) {
        case "INCREASE":
            console.log("ăn vào increase");
            
            return state+1
        case "DECREASE":
            return state-1    
        
        default:
            return state;
    }
}
export default reducerCount;