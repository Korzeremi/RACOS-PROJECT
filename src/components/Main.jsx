import '../styles/Main.scss'
import Wp from '../assets/wp.png'
import Logo from '../assets/logo.png'
import Finder from './apps/Finder.jsx'

export default function Main() {
    return (
        <div className="content">
            <div className="screen-sct">
                <div className="desktop-sct">
                    <img className='desktop-wp' src={Wp} alt="" />
                    <Finder className='finder' />
                </div>
            </div>
            <div className="ui-sct">
                <div className="panel-sct">
                        <div className="left-sct">
                            <div className="logo-sct">
                                <div className="main-logo">
                                    <img className='logo-img' src={Logo} alt="" />
                                </div>
                            </div>
                            <div className="menu-sct">
                                <div className="current-app" id='hover-btn'>
                                    <p>Control Panel</p>
                                </div>
                                <div className="btn-sct">
                                    <div className="file sct" id='hover-btn'>
                                        <div className="file-btn" id='menu-btn'>File</div>
                                    </div>
                                    <div className="edit-sct" id='hover-btn'>
                                        <div className="edit-btn" id='menu-btn'>Edit</div>
                                    </div>
                                    <div className="view-sct" id='hover-btn'>
                                        <div className="view-btn" id='menu-btn'>View</div>
                                    </div>
                                    <div className="go-sct" id='hover-btn'>
                                        <div className="go-btn" id='menu-btn'>Go</div>
                                    </div>
                                    <div className="tools-sct" id='hover-btn'>
                                        <div className="tools-btn" id='menu-btn'>Tools</div>
                                    </div>
                                    <div className="windows-sct" id='hover-btn'>
                                        <div className="windows-btn" id='menu-btn'>Windows</div>
                                    </div>
                                    <div className="help-sct" id='hover-btn'>
                                        <div className="help-btn" id='menu-btn'>Help</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tray-sct">
                            <div className="icons-sct">
                                <div className="icon">a</div>
                                <div className="icon">b</div>
                                <div className="icon">c</div>
                                <div className="icon">d</div>
                            </div>
                            <div className="infos-sct">
                                <div className="date-sct">Monday July 13rd</div>
                                <div className="time-sct">7:45 PM</div>
                            </div>
                        </div>
                </div>
                <div className="dock-sct">
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                </div>
            </div>
        </div>
    )
}