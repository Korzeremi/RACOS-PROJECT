import '../../styles/apps/Finder.scss'

export default function Finder() {
    return(
        <div className="content2">
            <div className="app2">
                <div className="app-header">
                    <div className="traffic">
                        <div className="redlight"></div>
                        <div className="yellowlight"></div>
                        <div className="greenlight"></div>                    
                    </div>
                    <div className="app-title">Finder</div>
                </div>
                <div className="app-sct">
                    <div className="select-sct">
                        <div className="items-sct"></div>
                        <div className="other-sct"></div>
                    </div>
                    <div className="main-sct"></div>
                </div>
            </div>
        </div>
    )
}