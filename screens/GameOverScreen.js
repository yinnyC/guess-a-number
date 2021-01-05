import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Card style={styles.summaryContainer}>
				<Text>The Game is Over!</Text>
				<Text>Number of Rounds:{props.roundsNumber}</Text>
				<Text>The Number was: {props.userNumber}</Text>
			</Card>
			<Button title="New Game" onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	summaryContainer: {
		width: 300,
		maxWidth: '80%',
		paddingVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -30,
		marginBottom: 20,
	},
});

export default GameOverScreen;
