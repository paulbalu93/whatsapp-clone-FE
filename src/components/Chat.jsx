import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar />
				<div className="chatheader__info">
					<h3> Room name</h3>
					<p>Last seen at</p>
				</div>
				<div className="chatheader__right">
					<IconButton>
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton>
						<AttachFileOutlinedIcon />
					</IconButton>
					<IconButton>
						<MoreVertOutlinedIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				<p className="chat__message">
					<span className="chat__name">Paul</span>
					§This is a message
					<span className="chat__time"> {new Date().toUTCString()}</span>
				</p>
				<p className="chat__message chat__receiver">
					<span className="chat__name">Paul</span>
					§This is a message
					<span className="chat__time"> {new Date().toUTCString()}</span>
				</p>
			</div>
			<div className="chat__footer">
				<InsertEmoticonOutlinedIcon />
				<form>
					<input placeholder="type a message" type="text" />
					<button type="submit">Send a message </button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;
