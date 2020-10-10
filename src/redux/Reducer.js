import {ADD_TODO} from `./Action`
const initialState ={
    list=[]
};

function todos(state =initialState,action) {
    switch(action.type){
        case ADD_TODO:
            return Object.assign({},state,{
                list:[
                    ...state.list,
                    {
                        text:action
                    }
                ]
            })
    }
}