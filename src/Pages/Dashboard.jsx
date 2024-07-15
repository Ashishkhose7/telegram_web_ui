/* eslint-disable */ 
import React, { useEffect, useState } from "react"
import Popover from '@mui/material/Popover';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import moment from 'moment';
import Skeleton from '@mui/material/Skeleton';

const Dashboard = () => {
    
    const [anchore1, setAnchore1] = useState(null);
    const [anchore2, setAnchore2] = useState(null);
    const [anchore3, setAnchore3] = useState(null);
    const [value, setValue] = useState(0);
    const [activechat, setActivechat] = useState(0);
    const [userchat, setUserchat] = useState([]);
    const [chathistory, setChathistory] = useState([]);
    const [chatid, setChatid] = useState(3888);

    useEffect(() => {
        const loadData = async () =>{
            const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
            const data = await response.json();
            setUserchat(data.data.data)
        }
        loadData();
    }, [])

    useEffect(() => {
        setChathistory([])
        const loadData = async () =>{
            const res = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatid}`);
            const data2 = await res.json();
            setChathistory(data2.data)
        }
        loadData();
    }, [chatid])
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (event) => {
        setAnchore1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchore1(null);
    };

    const handleClick2 = (event) => {
        setAnchore2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchore2(null);
    };

    const handleClick3 = (event) => {
        setAnchore3(event.currentTarget);
    };

    const handleClose3 = () => {
        setAnchore3(null);
    };

    const open = Boolean(anchore1);
    const open2 = Boolean(anchore2);
    const open3 = Boolean(anchore3);
    const id = open ? 'simple-popover' : undefined;
    const id2 = open2 ? 'simple-popover' : undefined;
    const id3 = open3 ? 'simple-popover' : undefined;

    const handleChat = (chatid, index) => {
        setActivechat(index);
        setChatid(chatid)
    };

    const loadTabs = (chat) => {
        if (value == 0) {
            return (
                <div className="chats px-2">
                        {
                           chat.length > 0 ? chat.map((data, index)=>{
                            return(
                            <div key={data.id} className={`chatButton ${activechat==index ? 'active' :null}`} onClick={()=>{handleChat(data.id, index)}}>
                                <div className="chatInfo">
                                    <div className="userpro text-light fw-bold mt-2 ms-2">
                                        {
                                           data.creator.name ? data.creator.name.at(0) : 'u'
                                        }
                                    </div>

                                    <p className="name">
                                        {data.creator.name || 'User'}
                                    </p>

                                    <p className="message">Chat..</p>
                                </div>

                                <div className="status normal">
                                    <p className="date">{moment(data.created_at).format('l')}</p>
                                    <p className={`count ${activechat==index ? 'text-primary bg-light' :null}`}>10</p>
                                    <i className="material-icons read">done_all</i>
                                </div>
                            </div>
                            )
                        }) :  <span>
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                        </span>

                        }
                </div>
            )
        } else if (value == 1) {
            return (
                <div className="text-center">
                    Group-1
                </div>
            )
        }
        else if (value == 2) {
            return (
                <div className="text-center">
                    Group-2
                </div>
            )
        }
        else if (value == 3) {
            return (
                <div className="text-center">
                    Group-3
                </div>
            )
        }
        else if (value == 4) {
            return (
                <div className="text-center">
                    Group-4
                </div>
            )
        }
        else if (value == 5) {
            return (
                <div className="text-center">
                    Group-5
                </div>
            )
        }
        else if (value == 6) {
            return (
                <div className="text-center">
                    Group-6
                </div>
            )
        }
    }

    const loadChats = (chats) => {
        if (chats.length > 0) {
            return(
                chats.map((ch) =>{
                    return(
                        <div key={ch.id} className={`msg ${ch.sender_id==1?'messageReceived':'messageSent'}`}>
                            <p className={`${ch.sender_id==1?"mb-1 text-danger fw-bold": "d-none"}`}>{ch.sender.name}</p>
                            <p className="chatfamily">{ch.message}</p>
                            <i className={`${ch.sender_id==1?"d-none": "material-icons readStatus"}`}>done_all</i>
                            <span className="timestamp">{moment(ch.created_at).endOf('day').fromNow()}</span>
                        </div>
                    )
                })
            )
        }else{
            return (
                <p className="text-center mt-2 loadingchat">chats loading..</p>
            )
        }
    }

    return (
        <>
            <section className="mainApp d-flex">
                <div className="leftPanel">
                    <header>
                        <button className="trigger" aria-describedby={id3} variant="contained" onClick={handleClick3}>
                            <svg viewBox="0 0 24 24">
                                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                            </svg>
                        </button>
                        <Popover
                            id={id3}
                            open={open3}
                            anchore1={anchore3}
                            onClose={handleClose3}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            className="rounded"
                            style={{ borderRadius: '20px' }}
                        >
                            <ul className="p-1 px-2 popoverlist">
                                <p> <i className="material-icons mute">bookmark</i>&nbsp;&nbsp;&nbsp;Saved Messages</p>
                                <p> <i className="material-icons call">menu_book</i>&nbsp;&nbsp;&nbsp;My Stories</p>
                                <p> <i className="material-icons call">contacts</i>&nbsp;&nbsp;&nbsp;Contacts</p>
                                <p> <i className="material-icons call">settings</i>&nbsp;&nbsp;&nbsp;Settings</p>
                                <p> <i className="material-icons call">dark_mode</i>&nbsp;&nbsp;&nbsp;Dark Mode</p>
                                <p> <i className="material-icons call">animation</i>&nbsp;&nbsp;&nbsp;Animations</p>
                                <p> <i className="material-icons call">info</i>&nbsp;&nbsp;&nbsp;Telegram Features</p>
                                <p className=""> <i className="material-icons call">bug_report</i>&nbsp;&nbsp;&nbsp;Report Bug</p>
                                <p className=""> <i className="material-icons call">text_format</i>&nbsp;&nbsp;&nbsp;Switch to A version</p>
                                <p className=""> <i className="material-icons call">download</i>&nbsp;&nbsp;&nbsp;Install App</p>

                            </ul>
                        </Popover>
                        <input className="searchChats" type="search" placeholder="Search..." />
                    </header>
                    <div className="tabs mb-3 border-bottom">
                        <Box sx={{ maxWidth: { xs: 320, sm: 400 }, bgcolor: 'background.paper', fontWeight: 'Bold' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons={false}
                                aria-label="scrollable prevent tabs example"
                            >
                                <Tab label="All" className="fw-bold" style={{ textTransform: "capitalize" }} />
                                <Tab label="Group-1" className="fw-bold" style={{ textTransform: "capitalize" }} />
                                <Tab label="Group-2" className="fw-bold" style={{ textTransform: "capitalize" }} />
                                <Tab label="Group-3" className="fw-bold" style={{ textTransform: "capitalize" }} />
                                <Tab label="Group-4" className="fw-bold" style={{ textTransform: "capitalize" }} />
                                <Tab label="Group-5" className="fw-bold" style={{ textTransform: "capitalize" }} />
                                <Tab label="Group-6" className="fw-bold" style={{ textTransform: "capitalize" }} />
                            </Tabs>
                        </Box>
                    </div>

                    {loadTabs(userchat)}

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
                            <button className="tbButton otherOptions" aria-describedby={id} variant="contained" onClick={handleClick}>
                                <i className="material-icons" >more_vert</i>
                            </button>
                        </div>
                        <Popover
                            id={id}
                            open={open}
                            anchore1={anchore1}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <ul className="p-1 px-2 popoverlist">
                                <p> <i className="material-icons mute">volume_off</i>&nbsp;&nbsp;&nbsp;Mute</p>
                                <p> <i className="material-icons call">phone_in_talk</i>&nbsp;&nbsp;&nbsp;Call</p>
                                <p> <i className="material-icons call">video_call</i>&nbsp;&nbsp;&nbsp;Video Call</p>
                                <p> <i className="material-icons call">check_circle</i>&nbsp;&nbsp;&nbsp;Select Messages</p>
                                <p> <i className="material-icons call">share</i>&nbsp;&nbsp;&nbsp;Share Contact</p>
                                <p> <i className="material-icons call">redeem</i>&nbsp;&nbsp;&nbsp;Gift Premium</p>
                                <p> <i className="material-icons call">block</i>&nbsp;&nbsp;&nbsp;Block User</p>
                                <p className="text-danger"> <i className="material-icons call">delete</i>&nbsp;&nbsp;&nbsp;Delete Chat</p>
                            </ul>
                        </Popover>
                        <button className="go-back text-light fw-bold">
                            B
                        </button>

                        <div className="leftSide">
                            <p className="chatName">BeyondChat</p>
                            <p className="chatStatus">Online</p>
                        </div>
                    </div>

                    <div className="convHistory userBg">
                        <div className="chats-sec">
                            {loadChats(chathistory)}
                        </div>
                    </div>

                    <div className="replyBar d-flex mt-3">
                        <div className="text-in mt-1">
                            <button className="attach ps-2" aria-describedby={id2} variant="contained" onClick={handleClick2}>
                                <i className="material-icons">mood</i>
                            </button>
                            <Popover
                                id={id2}
                                open={open2}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                onClose={handleClose2}
                            >
                                <div className="p-1 px-2 popoverlist">
                                    <li>
                                        <i className="material-icons mute">face</i>
                                        <i className="material-icons call">mood</i>
                                        <i className="material-icons call">add_reaction</i>
                                        <i className="material-icons call">face_6</i>
                                        <i className="material-icons call">face_3</i>
                                    </li>
                                    <li>
                                        <i className="material-icons call">mood_bad</i>
                                        <i className="material-icons call">face_4</i>
                                        <i className="material-icons call">face_2</i>
                                        <i className="material-icons call">face_5</i>
                                        <i className="material-icons call">flag</i>
                                    </li>
                                </div>
                            </Popover>
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
