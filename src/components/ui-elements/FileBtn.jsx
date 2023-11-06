import '../../styles/ui-elements/FileBtn.scss'

export default function fileBtn() {
    const exit = () => {
        window.location.reload();
    }
    return (
        <div className="fileBtnMain">
            <div className="file-item" id="file-item1">Nouveau</div>
            <div className="file-item" id="file-item1">Ouvrir</div>
            <div className="file-item" id="file-item1">Fichiers récents</div>
            <div className="file-item" id="file-item1"></div>
            <div className="file-item" id="file-item1"></div>
            <div className="file-item" id="file-item1">Partager</div>
            <div className="file-item" id="file-item1">Enregistrer  </div>
            <div className="file-item" id="file-item2" onClick={exit}>Quitter</div>
        </div>
    )
}