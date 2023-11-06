import '../../styles/ui-elements/RacosBtn.scss'

export default function RacosMenu() {
    return (
        <div className="racosMenuMain">
            <div id="menu-item" className="menu-item1">À propos de RacOS</div>
            <div id="menu-item" className="menu-item2">Rac Store</div>
            <div id="menu-item" className="menu-item2">Configuration</div>
            <div id="menu-item" className="menu-item3">Fermer la session</div>
            <div id="menu-item" className="menu-item3">Redémarrer</div>
            <div id="menu-item" className="menu-item4">Arrêter</div>
        </div>
    )
}