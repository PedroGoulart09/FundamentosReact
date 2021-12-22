
export default function Filho(props) {
    const ageAll = parseInt(Math.random()*(30))+54
    const nerd = Math.random() > 0.5
    return (
        <div>
            <button onClick={_=>props.info('pedro', ageAll,nerd)}>Information</button>
        </div>
    )
}