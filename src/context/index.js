import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';

const initialValue = {
    data : [],
    newData: [],
    tern: '',
    filter: 'all'
}

export const Content = createContext()

const reducer = (state = initialValue, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'GET_DATA':
            return {...state, data: payload}
        case 'ON_DELETE' : 
        return {...state, data: state.data.filter(c => c.id !== payload), newData: state.newData.filter(c => c.id !== payload) }
        case 'ON_TOGGLE_PROP' :
            const {id, prop} = payload
            const newArr = state.data.map(item => {
                if(item.id === id ) {
                  return {...item, [prop]: !item[prop]}
                }else {
                  return item
                }
              });
              return {...state, data: newArr }
        case 'ON_FILTER' : 
            return {...state, filter: payload}      
        case 'ON_TERN' : 
            return {...state, tern: payload}      
        case 'ON_ADDFORM' : 
            const newItem = {...payload, favourite: false, like: false, id: uuidv4()}
            return {...state, data: [...state.data, newItem], newData: [...state.newData, newItem] }    
        default:
           return state
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return <Content.Provider value={{state, dispatch}}> {children} </Content.Provider>
}
export default Provider