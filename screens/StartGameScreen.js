import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game</Text>
			<Card style={styles.inputContainer}>
				<Text>Select A Number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Reset" onPress={() => {}} color="#c717fc" />
					</View>
					<View style={styles.button}>
						<Button title="Confirm" onPress={() => {}} color="#f7287b" />
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: '40%',
	},
});

export default StartGameScreen;
