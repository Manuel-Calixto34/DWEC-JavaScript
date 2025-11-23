import './styles.css'

export default function Card({title,children}){
    return(
        <>
            <div id="miDiv">
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        </>
    )
}