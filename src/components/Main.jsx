import '../styles/Main.scss'
import Wp from '../assets/wp.png'
import Logo from '../assets/logo.png'
import Finder from './apps/Finder.jsx'
import Racos from './ui-elements/RacosBtn.jsx'
import FileBtn from './ui-elements/FileBtn.jsx'
import EditBtn from './ui-elements/EditBtn.jsx'
import ViewBtn from './ui-elements/ViewBtn.jsx'
import GoBtn from './ui-elements/GoBtn.jsx'
import FinderIcon from '../assets/icons/finder.png'
import React, { useState } from 'react'

export default function Main() {
    const [fileBtnStatus, setFileBtnStatus] = useState(false); 
    const [racosBtnStatus, setRacosBtnStatus] = useState(false);
    const [editBtnStatus, setEditBtnStatus] = useState(false);
    const [viewBtnStatus, setViewBtnStatus] = useState(false);
    const [goBtnStatus, setGoBtnStatus] = useState(false);
    const [finderStatus, setFinderStatus] = useState(false);
    let currentAppName = "Finder";

    return (
        <div className="content">
            <div className="screen-sct">
                <div className="desktop-sct" onClick={() => setFileBtnStatus(false) & setGoBtnStatus(false) & setViewBtnStatus(false) & setRacosBtnStatus(false) & setEditBtnStatus(false)}>
                    {finderStatus && <Finder/>}
                    <img className='desktop-wp' src={Wp} alt="" />
                </div>
            </div>
            <div className="panel-sct">
                        <div className="left-sct">
                            <div className="logo-sct">
                                <div className="main-logo" onClick={() => setRacosBtnStatus(true) & setGoBtnStatus(false) & setViewBtnStatus(false) & setFileBtnStatus(false) & setEditBtnStatus(false)}>
                                    {racosBtnStatus && <Racos/>}
                                    <img className='logo-img' src={Logo} alt="" />
                                </div>
                            </div>
                            <div className="menu-sct">
                                <div className="current-app" id='hover-btn'>
                                    <p>{ currentAppName }</p>
                                </div>
                                <div className="btn-sct">
                                    <div className="file sct" id='hover-btn'>
                                        <div className="file-btn" id='menu-btn' onClick={() => setFileBtnStatus(true) & setGoBtnStatus(false) & setViewBtnStatus(false) & setRacosBtnStatus(false) & setEditBtnStatus(false)}>File{fileBtnStatus && <FileBtn/>}</div>
                                    </div>
                                    <div className="edit-sct" id='hover-btn'>
                                        <div className="edit-btn" id='menu-btn' onClick={() => setEditBtnStatus(true) & setGoBtnStatus(false) & setViewBtnStatus(false) & setRacosBtnStatus(false) & setFileBtnStatus(false)}>Edit{editBtnStatus && <EditBtn/>}</div>
                                    </div>
                                    <div className="view-sct" id='hover-btn'>
                                        <div className="view-btn" id='menu-btn' onClick={() => setViewBtnStatus(true) & setGoBtnStatus(false) & setFileBtnStatus(false) & setEditBtnStatus(false) & setRacosBtnStatus(false)}>View{viewBtnStatus && <ViewBtn/>}</div>
                                    </div>
                                    <div className="go-sct" id='hover-btn'>
                                        <div className="go-btn" id='menu-btn' onClick={() => setViewBtnStatus(false) & setGoBtnStatus(true) & setFileBtnStatus(false) & setEditBtnStatus(false) & setRacosBtnStatus(false)}>Go {goBtnStatus && <GoBtn/>}</div>
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
                    <div className="dock-icon" onClick={() => setFinderStatus(true)}>
                        <img src={FinderIcon} className="finderImg" alt="finderIcon" />
                    </div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
                    <div className="dock-icon"></div>
            </div>
        </div>
    )
}