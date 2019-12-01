//reducer负责突变state和获取state，所以不管你点不调用reducer，它一开始就会运行一次返回state给组件
//reducer要求一定要返回state
export default (state, action) => {
    let { type, payload } = action;
    let list = [...state.list];
    let isExist = 0;
    switch (type) {
        case 'ADD':
            list.map((value, index) => {
                value.search[0].id == payload[0].id && ++list[index].num && isExist++
            })
            isExist == 0 ? list.push({ search: payload, num: 1 }) : isExist--
            return { ...state, list: list };
        case 'BUY':
            list.map((value, index) => {
                value.search[0].id == payload[0].id && ++list[index].num && isExist++
            })
            isExist == 0 ? list.push({ search: payload, num: 1 }) : isExist--
            return { ...state, list: list };
        case 'CLEAR':
            return { ...state, list: [] }
        default:
            return state;

    }

};