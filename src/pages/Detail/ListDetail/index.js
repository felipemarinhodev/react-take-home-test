import { Typography } from '@mui/material'

import './ListDetail.module.css'

function ListDetail({ text, content }) {
	return (
		<div className='list-detail__item'>
			<Typography variant='h5'>{text}</Typography>
			<ul>
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</ul>
		</div>
	)
}

export default ListDetail
