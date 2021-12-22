export default function age (props){
    const age = props.age === 23 ? <h2>Pedro</h2> : <h2>João</h2>
    return age
}