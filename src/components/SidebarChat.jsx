import React from 'react';
import './SidebarChat.css';
import { Avatar, IconButton } from '@material-ui/core';

function SidebarChat() {
	return (
		<div className="sidebarchat">
			<Avatar />
			<div className="sidebarchat__info">
				<h2> Chat Room</h2>
				<p> this is the last message</p>
			</div>
		</div>
	);
}

export default SidebarChat;
