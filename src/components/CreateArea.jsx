import React, { useState } from 'react';
import { Zoom } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
function CreateArea(props) {
	const [ expand, setExpand ] = useState(false);
	const [ note, setNote ] = useState({
		title: '',
		content: ''
	});

	const expandInput = () => {
		setExpand(true);
	};

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setExpand(!expand);
		setNote({
			title: '',
			content: ''
		});
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note">
				<input
					name="title"
					style={{ display: expand ? '' : 'none' }}
					onChange={handleChange}
					value={note.title}
					placeholder="Title"
					autoComplete="off"
				/>
				<textarea
					name="content"
					onFocus="true"
					onClick={expandInput}
					onChange={handleChange}
					value={note.content}
					placeholder={'Take a note...'}
					rows={expand ? 3 : 1}
				/>
				<Zoom in={expand}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
