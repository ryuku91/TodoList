import "./style/progress.css"
const Progress = ({vals}) => {
    const total = vals.length;
    const checked = vals.filter((item) => item.checked).length;
    const progress = total === 0 ? 0 : (checked / total) * 100;
    return(
        <>
            <h3>進捗は{progress.toFixed()}%です</h3>
        </>
    )
}

export default Progress;