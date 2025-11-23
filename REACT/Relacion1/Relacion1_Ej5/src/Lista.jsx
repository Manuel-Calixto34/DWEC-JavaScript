import Item from './Item';

export default function Lista(){
    let array = ["dog","cat","chicken","cow","sheep","horse","lizard"];
    let secuenciaItems = [];
    for(let i = 0;i<array.length;i++){
        secuenciaItems.push(<Item nombre={array[i]}></Item>)
    }
    return(
        <>
            <ul>{secuenciaItems}</ul>
        </>
    )
}