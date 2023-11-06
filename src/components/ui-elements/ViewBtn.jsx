import '../../styles/ui-elements/ViewBtn.scss'

export default function viewBtn() {
    return (
        <div className="viewBtnMain">
            <div className="view-item">Plein Écran</div>
            <div className="view-item">Split Screen</div>
            <div className="view-item">Mode</div>
            <div className="view-item"></div>
            <div className="view-item"></div>
            <div className="view-item" id="view-item2"></div>
        </div>
    )
}