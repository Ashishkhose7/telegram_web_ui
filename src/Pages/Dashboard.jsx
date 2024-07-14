import React, { useEffect } from "react"

const Dashboard = () => {
    useEffect(() => {

        console.log("dashboard loaded")
    }, [])

    return (
        <>
            <section className="mainApp d-flex">
                <div className="leftPanel">
                    <header>
                        <button className="trigger">
                            <svg viewBox="0 0 24 24">
                                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                            </svg>
                        </button>

                        <input className="searchChats" type="search" placeholder="Search..." />
                    </header>
                    <div className="chats px-2">
                        <div className="chatButton active">
                            <div className="chatInfo">
                                <div className="image my-image">

                                </div>

                                <p className="name">
                                    Renan Mayrinck
                                </p>

                                <p className="message">Actually, more ...</p>
                            </div>

                            <div className="status onTop">
                                <p className="date">00:02</p>
                                <p className="count">10</p>
                                <i className="material-icons read">done_all</i>
                                
                                {/* <svg className="fixed" viewBox="0 0 24 24">
                                    <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                                </svg> */}
                            </div>
                        </div>

                        <div className="chatButton">
                            <div className="chatInfo">
                                <div className="image">

                                </div>

                                <p className="name">
                                    Doge
                                </p>

                                <p className="message">Wow!</p>
                            </div>

                            <div className="status normal">
                                <p className="date">Now</p>
                                <p className="count">42</p>
                                <i className="material-icons read">done_all</i>
                                <i className="material-icons fixed">loyalty</i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightPanel">
                    <div className="topBar">
                        <div className="rightSide">
                            <button className="tbButton search">
                                <i className="material-icons call">call</i>
                            </button>
                            <button className="tbButton search">
                                <i className="material-icons">&#xE8B6;</i>
                            </button>
                            <button className="tbButton otherOptions">
                                <i className="material-icons">more_vert</i>
                            </button>
                        </div>

                        <button className="go-back text-light fw-bold">
                            RM
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Go back</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg> */}
                        </button>

                        <div className="leftSide">
                            <p className="chatName">Renan Mayrinck</p>
                            <p className="chatStatus">Online</p>
                        </div>
                    </div>

                    <div className="convHistory userBg">
                        <div className="chats-sec">
                            <div className="msg messageReceived">
                                Dude, why no one did this before?
                                <span className="timestamp">00:00</span>
                            </div>

                            <div className="msg messageReceived">
                                Dude, why no one did this before?
                                <span className="timestamp">00:00</span>
                            </div>

                            <div className="msg messageSent">
                                    Lorem ipsum dolor sit amet.
                                <i className="material-icons readStatus">done_all</i>
                                <span className="timestamp">00:01</span>
                            </div>

                            <div className="msg messageSent">
                                Dunno...
                                <i className="material-icons readStatus">done_all</i>
                                <span className="timestamp">00:01</span>
                            </div>

                            <div className="msg messageReceived">
                                This don't matter now, I did it!
                                <span className="timestamp">00:02</span>
                            </div>

                            <div className="msg messageReceived">
                                Hope someone see this... Someday...
                                <span className="timestamp">00:02</span>
                            </div>

                            <div className="msg messageSent">
                                Actually, more than 10K people did... Congrats!
                                <i className="material-icons readStatus">done</i>
                                <span className="timestamp">00:04</span>
                            </div>
                        </div>
                    </div>

                    <div className="replyBar d-flex mt-3">
                        <div className="text-in mt-1">
                        <button className="attach ps-2">
                            <i className="material-icons">face</i>
                        </button>
                        <input type="text" className="replyMessage pe-5" placeholder="Type your message..." />
                        <button className="attach pe-3">
                            <i className="material-icons d45">attach_file</i>
                        </button>
                        </div>

                        <div className="otherTools">
                            <button className="audio ms-3 bg-primary text-light">
                                <i className="material-icons">mic</i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menuWrap">
                <div className="menu">
                    <div className="me userBg">
                        <div className="image"></div>

                        <div className="myinfo">
                            <p className="name">Random Name</p>
                            <p className="phone">+1 12 1234 5678</p>
                        </div>

                        <button className="cloud">
                            <i className="material-icons">bookmark</i>
                        </button>

                        <button className="settings">
                            <i className="material-icons">settings</i>
                        </button>
                    </div>
                    <nav>
                        <button className="ng">
                            <i className="material-icons">&#xE8D3;</i>

                            <span>New Group</span>
                        </button>

                        <button className="nc">
                            <i className="material-icons">&#xE0B6;</i>

                            <span>New Channel</span>
                        </button>

                        <button className="cn">
                            <i className="material-icons">&#xE851;</i>

                            <span>Contacts</span>
                        </button>

                        <button className="cl">
                            <i className="material-icons">&#xE0B0;</i>

                            <span>Calls History</span>
                        </button>

                        <a href="https://telegram.org/faq" target="_blank">
                            <button className="faq">
                                <i className="material-icons">&#xE000;</i>

                                <span>FAQ and Support</span>
                            </button>
                        </a>

                        <button className="lo">
                            <i className="material-icons">&#xE879;</i>

                            <span>Logout</span>
                        </button>
                    </nav>

                    <div className="info">
                        <p>Telegram Web</p>
                        <p>Ver 0.0.2 - <a href="https://en.wikipedia.org/wiki/Telegram_(messaging_service)">About</a></p>
                        <p>Layout coded by: <a href="https://www.github.com/mayrinck">Mayrinck</a></p>
                    </div>
                </div>
            </section>

            <div className="moreMenu">
                <button className="option about">See Info</button>
                <button className="option notify">Disable Notifications</button>
                <button className="option block">Block User</button>
            </div>

            <section className="switchMobile">
                <p className="title">Mobile Device Detected</p>

                <p className="desc">Switch to the mobile app for a better performance.</p>

                <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=pt_BR&gl=US">
                    <button className="okay">OK</button>
                </a>
            </section>

            <section className="config">
                <section className="configSect">
                    <div className="profile">
                        <p className="confTitle">Settings</p>

                        <div className="image"></div>

                        <div className="side">
                            <p className="name">Random Name</p>
                            <p className="pStatus">Online</p>
                        </div>

                        <button className="changePic">Change Profile Picture</button>
                        <button className="edit">Edit Profile Info</button>
                    </div>
                </section>

                <section className="configSect second">

                    <p className="confTitle">Your Info</p>

                    <div className="information">
                        <ul>
                            <li>Phone Number: <span className="blue phone">+1 12 1234 5678</span></li>
                            <li>Username: <span className="blue username">@USERNAME</span></li>
                            <li>Profile: <span className="blue">https://t.me/USERNAME</span></li>
                        </ul>
                    </div>

                    <p className="confTitle">Notifications</p>

                    <div className="optionWrapper deskNotif">
                        <input type="checkbox" id="deskNotif" className="toggleTracer" defaultChecked />

                        <label className="check deskNotif" htmlFor="deskNotif">
                            <div className="tracer"></div>
                        </label>
                        <p>Enable Desktop Notifications</p>
                    </div>

                    <div className="optionWrapper showSName">
                        <input type="checkbox" id="showSName" className="toggleTracer" />

                        <label className="check" htmlFor="showSName">
                            <div className="tracer"></div>
                        </label>
                        <p>Show Sender Name</p>
                    </div>

                    <div className="optionWrapper showPreview">
                        <input type="checkbox" id="showPreview" className="toggleTracer" />

                        <label className="check" htmlFor="showPreview">
                            <div className="tracer"></div>
                        </label>
                        <p>Show Message Preview</p>
                    </div>

                    <div className="optionWrapper playSounds">
                        <input type="checkbox" id="playSounds" className="toggleTracer" />

                        <label className="check" htmlFor="playSounds">
                            <div className="tracer"></div>
                        </label>
                        <p>Play Sounds</p>
                    </div>


                    <p className="confTitle">Other Settings</p>

                    <div className="optionWrapper">
                        <input type="checkbox" id="checkNight" className="toggleTracer" />

                        <label className="check DarkThemeTrigger" htmlFor="checkNight">
                            <div className="tracer"></div>
                        </label>
                        <p>Dark Theme</p>
                    </div>

                </section>
            </section>

            <section className="overlay"></section>

            <div className="alerts">
                Trying to reconnect...
            </div>
        </>
    )
};

export default Dashboard;
