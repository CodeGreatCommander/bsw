
export default function Card({className,children}){
    return(<div className={"card-mentor "+className}>
            {children}
        </div>
    )
}