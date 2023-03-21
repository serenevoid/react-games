interface props {
    value: string;
}

const Die = (props: props) => {
    return (
        <div className="die">
            <h2>{props.value}</h2>
        </div>
    )
}

export default Die;
