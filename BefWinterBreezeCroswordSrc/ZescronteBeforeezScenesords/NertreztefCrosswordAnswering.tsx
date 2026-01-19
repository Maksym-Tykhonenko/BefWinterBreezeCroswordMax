import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Dimensions as Szsefniwer,
    View as ConentContainer,
    Share,
    Text as Fontswrited,
    TextInput,
    Image,
    KeyboardAvoidingView, // додано
    Platform, // додано
    TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react';
import crosswrdt from '../Crodatnni/crosswrdt';

const crosswordLayouts = [
    // Cold Air - FROST, BREEZE, ICE, MIST
    {
        words: [
            {
                word: 'FROST', number: 1, wordIndex: 0, letters: [
                    { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }
                ]
            },
            {
                word: 'BREEZE', number: 2, wordIndex: 1, letters: [
                    { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }
                ]
            },
            {
                word: 'ICE', number: 3, wordIndex: 2, letters: [
                    { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }
                ]
            },
            {
                word: 'MIST', number: 4, wordIndex: 3, letters: [
                    { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }
                ]
            },
        ]
    },
    // Northern Silence - NORTH, POLE, STILL, SKY
    {
        words: [
            {
                word: 'NORTH', number: 1, wordIndex: 0, letters: [
                    { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }
                ]
            },
            {
                word: 'POLE', number: 2, wordIndex: 1, letters: [
                    { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }
                ]
            },
            {
                word: 'STILL', number: 4, wordIndex: 2, letters: [
                    { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }
                ]
            },
            {
                word: 'SKY', number: 3, wordIndex: 3, letters: [
                    { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }
                ]
            },
        ]
    },
    // Frozen Ground - STONE, SNOW, COLD, EARTH
    {
        words: [
            {
                word: 'STONE', number: 1, wordIndex: 0, letters: [
                    { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }
                ]
            },
            {
                word: 'SNOW', number: 2, wordIndex: 1, letters: [
                    { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }
                ]
            },
            {
                word: 'COLD', number: 3, wordIndex: 2, letters: [
                    { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }
                ]
            },
            {
                word: 'EARTH', number: 4, wordIndex: 3, letters: [
                    { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }
                ]
            },
        ]
    },
    // Winnter Words - WINNTER, WIND, CHILL, SILENT
    {
        words: [
            {
                word: 'WINNTER', number: 1, wordIndex: 0, letters: [
                    { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }
                ]
            },
            {
                word: 'WIND', number: 2, wordIndex: 1, letters: [
                    { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }
                ]
            },
            {
                word: 'CHILL', number: 3, wordIndex: 2, letters: [
                    { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }
                ]
            },
            {
                word: 'SILENT', number: 4, wordIndex: 3, letters: [
                    { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }
                ]
            },
        ]
    },
    // Polar Zone - ARCTIC, ZERO, STAR, CIRCLE
    {
        words: [
            {
                word: 'ARCTIC', number: 1, wordIndex: 0, letters: [
                    { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }
                ]
            },
            {
                word: 'ZERO', number: 2, wordIndex: 1, letters: [
                    { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }
                ]
            },
            {
                word: 'STAR', number: 3, wordIndex: 2, letters: [
                    { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }
                ]
            },
            {
                word: 'CIRCLE', number: 4, wordIndex: 3, letters: [
                    { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }
                ]
            },
        ]
    },
];

export default function NertreztefCrosswordAnswering({ screen, setScreen }: { screen: 'levels' | 'quiz' | 'result', setScreen: (node: 'levels' | 'quiz' | 'result') => void },) {
    const { width: sordeshr, height: niweh } = Szsefniwer.get('window');
    const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [selectedWord, setSelectedWord] = useState<number | null>(null);
    const [cursorPosition, setCursorPosition] = useState<number>(0);
    const [completedLevels, setCompletedLevels] = useState<number[]>([]);

    // Завантаження completedLevels з AsyncStorage
    useEffect(() => {
        AsyncStorage.getItem('completedLevels').then(data => {
            if (data) setCompletedLevels(JSON.parse(data));
        });
    }, []);

    // Зберігаємо completedLevels у AsyncStorage при зміні
    useEffect(() => {
        AsyncStorage.setItem('completedLevels', JSON.stringify(completedLevels));
    }, [completedLevels]);

    // Додаємо рівень до completedLevels після проходження
    useEffect(() => {
        if (isCompleted && selectedLevel !== null && !completedLevels.includes(selectedLevel)) {
            setCompletedLevels([...completedLevels, selectedLevel]);
        }
    }, [isCompleted, selectedLevel]);

    useEffect(() => {
        if (selectedLevel !== null) {
            setAnswers(Array(crosswrdt[selectedLevel].clues.length).fill(''));
        }
    }, [selectedLevel]);

    useEffect(() => {
        if (selectedLevel !== null && answers.length > 0) {
            const allCorrect = crosswrdt[selectedLevel].clues.every((clue, idx) =>
                answers[idx]?.toUpperCase() === clue.answer.toUpperCase()
            );
            if (allCorrect && answers.every(a => a.length > 0)) {
                setIsCompleted(true);
            }
        }
    }, [answers, selectedLevel]);

    useEffect (() => {
        if (screen === 'levels') {
            setSelectedLevel (null);
            setAnswers ([]);
            setIsCompleted (false);
            setSelectedWord (null);
            setCursorPosition (0);
        }
    }, [screen]);

    const handleShare = async () => {
        try {
            await Share.share({
                message: `I completed the ${crosswrdt[selectedLevel!].name} crossword! Cold facts take time.`,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleNextCrossword = () => {
        setSelectedLevel(null);
        setAnswers([]);
        setIsCompleted(false);
    };

    const handleBackToMenu = () => {
        setScreen('levels');
    };

    const handleLetterInput = (text: string, wordIndex: number, position: number) => {
        if (text.length === 0) return;

        const letter = text.slice(-1).toUpperCase();
        const newAnswers = [...answers];
        const currentAnswer = newAnswers[wordIndex] || '';
        const wordLength = crosswrdt[selectedLevel!].clues[wordIndex].answer.length;

        let newAnswer = currentAnswer.padEnd(wordLength, ' ');
        newAnswer = newAnswer.substring(0, position) + letter + newAnswer.substring(position + 1);
        newAnswers[wordIndex] = newAnswer.trimEnd();

        // Update shared letters at same position
        const layout = crosswordLayouts[selectedLevel!];
        const currentWordData = layout.words[wordIndex];
        const currentLetterPos = currentWordData.letters[position];

        layout.words.forEach((wordData, idx) => {
            if (idx !== wordIndex) {
                wordData.letters.forEach((letterPos, letterIdx) => {
                    if (letterPos.x === currentLetterPos.x && letterPos.y === currentLetterPos.y) {
                        const sharedAnswer = newAnswers[idx] || '';
                        const sharedLength = crosswrdt[selectedLevel!].clues[idx].answer.length;
                        let updated = sharedAnswer.padEnd(sharedLength, ' ');
                        updated = updated.substring(0, letterIdx) + letter + updated.substring(letterIdx + 1);
                        newAnswers[idx] = updated.trimEnd();
                    }
                });
            }
        });

        setAnswers(newAnswers);

        if (position < wordLength - 1) {
            setCursorPosition(position + 1);
        }
    };

    const handleBackspace = (wordIndex: number, position: number) => {
        const newAnswers = [...answers];
        const currentAnswer = newAnswers[wordIndex] || '';

        if (position > 0) {
            const wordLength = crosswrdt[selectedLevel!].clues[wordIndex].answer.length;
            let newAnswer = currentAnswer.padEnd(wordLength, ' ');
            newAnswer = newAnswer.substring(0, position - 1) + ' ' + newAnswer.substring(position);
            newAnswers[wordIndex] = newAnswer.trimEnd();

            // Update shared letters at same position
            const layout = crosswordLayouts[selectedLevel!];
            const currentWordData = layout.words[wordIndex];
            const currentLetterPos = currentWordData.letters[position - 1];

            layout.words.forEach((wordData, idx) => {
                if (idx !== wordIndex) {
                    wordData.letters.forEach((letterPos, letterIdx) => {
                        if (letterPos.x === currentLetterPos.x && letterPos.y === currentLetterPos.y) {
                            const sharedAnswer = newAnswers[idx] || '';
                            const sharedLength = crosswrdt[selectedLevel!].clues[idx].answer.length;
                            let updated = sharedAnswer.padEnd(sharedLength, ' ');
                            updated = updated.substring(0, letterIdx) + ' ' + updated.substring(letterIdx + 1);
                            newAnswers[idx] = updated.trimEnd();
                        }
                    });
                }
            });

            setAnswers(newAnswers);
            setCursorPosition(position - 1);
        }
    };

    if (screen === 'levels') {
        return (
            <ConentContainer style={{
                backgroundColor: 'transparent',
                paddingHorizontal: sordeshr * 0.05,
                justifyContent: 'center',
                flex: 1,
                alignItems: 'center',
            }}>
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingVertical: niweh * 0.05,
                    }}
                    style={{ width: '100%' }}
                >
                    {crosswrdt.map((level, index) => {
                        const isCompleted = completedLevels.includes(index);
                        const isSelected = selectedLevel === index;
                        let bgColor = '#0E2C1E';
                        if (isCompleted) bgColor = '#382821';
                        if (isSelected) bgColor = '#CBB969';

                        return (
                            <React.Fragment key={index}>
                                <TouchableOpacity
                                    onPress={() => setSelectedLevel(index)}
                                    style={{
                                        elevation: isSelected ? 2 : 0,
                                        backgroundColor: bgColor,
                                        width: sordeshr * 0.85,
                                        shadowOpacity: 0.08,
                                        marginBottom: niweh * 0.018,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        shadowColor: '#000',
                                        shadowRadius: 2,
                                        height: niweh * 0.075,
                                        borderRadius: sordeshr * 0.025,
                                    }}
                                >
                                    <Fontswrited style={{
                                        color: isSelected ? '#fff' : '#fff',
                                        fontSize: sordeshr * 0.055,
                                        fontWeight: 'bold',
                                        letterSpacing: 0.5,
                                    }}>
                                        {level.name}
                                    </Fontswrited>
                                </TouchableOpacity>
                                {selectedLevel === index && (
                                    <TouchableOpacity
                                        onPress={() => setScreen('quiz')}
                                        style={{
                                            borderRadius: sordeshr * 0.018,
                                            shadowColor: '#000',
                                            backgroundColor: '#CBB969',
                                            marginBottom: niweh * 0.025,
                                            elevation: 1,
                                            height: niweh * 0.048,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            shadowOpacity: 0.06,
                                            shadowRadius: 1,
                                            width: sordeshr * 0.45,
                                        }}
                                    >
                                        <Fontswrited style={{
                                            color: '#fff',
                                            fontSize: sordeshr * 0.042,
                                            fontStyle: 'italic',
                                            fontWeight: '500',
                                        }}>
                                            Start
                                        </Fontswrited>
                                    </TouchableOpacity>
                                )}
                            </React.Fragment>
                        );
                    })}
                </ScrollView>
            </ConentContainer>
        );
    }

    if (isCompleted) {
        return (
            <ConentContainer style={{
                paddingHorizontal: sordeshr * 0.08,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                flex: 1,
            }}>
                <ConentContainer style={{
                    alignItems: 'center',
                    width: sordeshr * 0.7,
                    justifyContent: 'center',
                    marginBottom: niweh * 0.05,
                    height: sordeshr * 0.7,
                }}>
                    <Fontswrited style={{
                        marginBottom: niweh * 0.02,
                        textAlign: 'center',
                        fontSize: sordeshr * 0.12,
                        fontWeight: '800',
                        color: '#E0E4D7',
                    }}>
                        Crossword{'\n'}Completed
                    </Fontswrited>
                    <Image
                        source={require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/mntnsReslt.png')}
                        style={{
                            width: sordeshr * 0.7,
                            height: niweh * 0.21,
                            resizeMode: 'contain',
                        }}
                    />
                </ConentContainer>

                <Fontswrited style={{
                    marginBottom: niweh * 0.04,
                    color: '#D3D8C6',
                    fontWeight: '600',
                    fontSize: sordeshr * 0.05,
                    textAlign: 'center',
                }}>
                    Cold facts take time.
                </Fontswrited>

                {/* Кнопки через map */}
                {[
                    {
                        label: 'Next Crossword',
                        onPress: handleNextCrossword,
                    },
                    {
                        label: 'Share',
                        onPress: handleShare,
                    },
                    {
                        label: 'Back to Menu',
                        onPress: handleBackToMenu,
                    },
                ].map((btn, idx) => (
                    <TouchableOpacity
                        key={btn.label}
                        onPress={btn.onPress}
                        style={{
                            alignItems: 'center',
                            width: sordeshr * 0.75,
                            backgroundColor: '#1A5452',
                            borderRadius: sordeshr * 0.025,
                            height: niweh * 0.065,
                            justifyContent: 'center',
                            marginBottom: niweh * 0.015,
                        }}
                    >
                        <Fontswrited style={{
                            fontWeight: '500',
                            fontSize: sordeshr * 0.045,
                            fontStyle: 'italic',
                            color: '#ECE9D2',
                        }}>
                            {btn.label}
                        </Fontswrited>
                    </TouchableOpacity>
                ))}
            </ConentContainer>
        );
    }

    const layout = crosswordLayouts[selectedLevel];
    const cellSize = sordeshr * 0.1;

    const renderGrid = () => {
        const grid: Array<Array<{ letter: string; wordIndex: number; letterIndex: number; number?: number } | null>> = Array(8).fill(null).map(() => Array(8).fill(null));

        // Fill grid with words
        layout.words.forEach(wordData => {
            const userAnswer = answers[wordData.wordIndex] || '';
            wordData.letters.forEach((pos, idx) => {
                if (pos.y < 8 && pos.x < 8) {
                    const existing = grid[pos.y][pos.x];
                    grid[pos.y][pos.x] = {
                        letter: userAnswer[idx]?.toUpperCase() || '?',
                        wordIndex: wordData.wordIndex,
                        letterIndex: idx,
                        number: idx === 0 ? wordData.number : (existing?.number || undefined)
                    };
                }
            });
        });

        return grid.map((row, rowIndex) => (
            <ConentContainer key={rowIndex} style={{ flexDirection: 'row' }}>
                {row.map((cell, colIndex) => {
                    if (cell === null) {
                        return <ConentContainer key={colIndex} style={{ width: cellSize, height: cellSize }} />;
                    }

                    const isSelected = selectedWord === cell.wordIndex && cursorPosition === cell.letterIndex;

                    return (
                        <ConentContainer key={colIndex} style={{
                            borderWidth: 1,
                            alignItems: 'center',
                            backgroundColor: isSelected ? '#4A6A5A' : '#3A5A4A',
                            position: 'relative',
                            borderColor: '#2A4A3A',
                            justifyContent: 'center',
                            width: cellSize,
                            height: cellSize,
                        }}>
                            {cell.number && (
                                <Fontswrited style={{
                                    fontWeight: 'bold',
                                    fontSize: cellSize * 0.25,
                                    top: cellSize * 0.05,
                                    left: cellSize * 0.1,
                                    color: 'white',
                                    position: 'absolute',
                                }}>
                                    {cell.number}
                                </Fontswrited>
                            )}
                            <Fontswrited style={{
                                color: 'white',
                                fontSize: cellSize * 0.5,
                                fontWeight: 'bold',
                            }}>
                                {cell.letter}
                            </Fontswrited>
                        </ConentContainer>
                    );
                })}
            </ConentContainer>
        ));
    };

    const renderClues = () => {
        return crosswrdt[selectedLevel].clues.map((clue, index) => {
            const wordData = layout.words[index];
            const userAnswer = answers[index] || '';
            const isActive = selectedWord === index;

            return (
                <ConentContainer key={index} style={{
                    width: sordeshr * 0.9,
                    backgroundColor: isActive ? 'rgba(80, 110, 100, 0.8)' : 'rgba(60, 90, 80, 0.6)',
                    borderRadius: sordeshr * 0.04,
                    padding: sordeshr * 0.04,
                    marginBottom: niweh * 0.015,
                }}>
                    <Fontswrited style={{
                        color: 'white',
                        fontSize: sordeshr * 0.04,
                        marginBottom: niweh * 0.01,
                    }}>
                        {wordData.number}. {clue.clue}
                    </Fontswrited>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedWord(index);
                            setCursorPosition(userAnswer.length);
                        }}
                        style={{
                            width: '100%',
                            marginTop: niweh * 0.005,
                        }}
                    >
                        <TextInput
                            style={{
                                borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                                fontSize: sordeshr * 0.045,
                                letterSpacing: sordeshr * 0.02,
                                borderBottomWidth: 1,
                                paddingVertical: niweh * 0.005,
                                color: 'white',
                            }}
                            value={userAnswer}
                            onFocus={() => {
                                setSelectedWord(index);
                                setCursorPosition(userAnswer.length);
                            }}
                            onChangeText={(text) => {
                                if (text.length > userAnswer.length) {
                                    handleLetterInput(text, index, cursorPosition);
                                }
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace') {
                                    handleBackspace(index, cursorPosition);
                                }
                            }}
                            maxLength={clue.answer.length}
                            autoCapitalize="characters"
                            autoCorrect={false}
                            placeholder={`${clue.answer.length} letters`}
                            placeholderTextColor="rgba(255, 255, 255, 0.3)"
                            selection={{ start: cursorPosition, end: cursorPosition }}
                        />
                    </TouchableOpacity>
                </ConentContainer>
            );
        });
    };

    // --- Додаємо KeyboardAvoidingView для екрану з кросвордом ---
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={niweh * 0.12}
        >
            <ConentContainer style={{
                flex: 1,
                backgroundColor: 'transparent',
            }}>
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingVertical: niweh * 0.05,
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    <ConentContainer style={{
                        marginBottom: niweh * 0.03,
                        paddingTop: niweh * 0.02,
                    }}>
                        {renderGrid()}
                    </ConentContainer>

                    <ConentContainer style={{
                        width: '100%',
                        alignItems: 'center',
                    }}>
                        {renderClues()}
                    </ConentContainer>
                </ScrollView>
            </ConentContainer>
        </KeyboardAvoidingView>
    );
}