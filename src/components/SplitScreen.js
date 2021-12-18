import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Pane = styled.div`
	flex: ${props => props.weight};
	background-color: ${props => props.darkMode ? '#333' : '#eee'};
	color: ${props => props.darkMode ? '#ccc' : '#333'};
	border: 1px solid #ccc;
	margin: 0 5px 5px 0;
	padding: 10px;
`;

export const SplitScreen = ({
	children,
	leftWeight = 1,
	rightWeight = 1
}) => {
	const [left, right] = children;
	return (
		<Container>
			<Pane darkMode weight={leftWeight}>
				{left}
			</Pane>
			<Pane weight={rightWeight}>
				{right}
			</Pane>
		</Container>
	)
};