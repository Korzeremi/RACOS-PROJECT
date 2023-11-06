import { useState } from 'react'
import '../../styles/apps/Finder.scss'

export default function Finder() {
    const [appStatus, setAppStatus] = useState(true);
    const quit = () => {
        setAppStatus(false);
    }
    if (!appStatus) {
        window.location.reload();
        return null;
    }
    return(
        <div className="content2">
            <div className="app2">
                <div className="app-header">
                    <div className="traffic">
                        <div className="redlight" onClick={quit}></div>
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