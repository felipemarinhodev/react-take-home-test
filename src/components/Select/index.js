import { MenuItem, Select as MTSelect } from '@mui/material';
import colors from '../../theme/colors';

const MenuProps = {
	PaperProps: {
		style: {
			width: 200,
			backgroundColor: colors.secondaryVariant2,
			borderColor: '#fff',
		},
	},
};

export default function Select({
	value,
	setValue,
	placeholder,
	items,
}) {
	function handleChange(event) {
		const { value } = event.target
		setValue(value)
	}

	return (
		<MTSelect
			value={value}
			onChange={(e) => handleChange(e)}
			MenuProps={MenuProps}
			sx={{
				width: '100%',
				border: '2px solid white'
			}}
		>
			<MenuItem
				className='select-placeholder'
				value=""
				sx={{
					textTransform:
						'uppercase'
				}}
			>
				<em>{placeholder}</em>
			</MenuItem>
			{items.map((item, index) => (
				<MenuItem key={`${item}-${index}`} value={item}>
					<em>{item}</em>
				</MenuItem>
			))}
		</MTSelect>
	)
}
