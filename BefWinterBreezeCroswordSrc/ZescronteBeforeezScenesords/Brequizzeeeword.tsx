import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Dimensions as Fenozmin,
    View as Sorcbxx,
    Image as Droimg,
    Share,
    Text as ToSHowUserTtls,
    TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react';
import tebtestdata from '../Crodatnni/tebtestdata';

const qiznd = require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/quizended.png');
const mountainsImg = require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/mountains.png'); // ваше зображення гір

const LVL_DONE = '#382821';
const LVL_SELECTED = '#CBB969';
const LVL_DEFAULT = '#0E2C1E';
const BTN_START = '#CBB969';
const BTN_TEXT = '#fff';
const BTN_NEXT = '#2B4C3C';
const BTN_SHARE = '#2B4C3C';
const BTN_MENU = '#2B4C3C';
const CORRECT = '#69CB70';
const WRONG = '#CB6969';

const LVL_SIZE = Fenozmin.get('window').width * 0.16;
const LVL_RADIUS = LVL_SIZE * 0.25;
const LVL_MARGIN = LVL_SIZE * 0.13;
const BTN_HEIGHT = Fenozmin.get('window').height * 0.07;
const BTN_RADIUS = BTN_HEIGHT * 0.35;
const BTN_FONT = Fenozmin.get('window').width * 0.045;
const LVL_FONT = Fenozmin.get('window').width * 0.045;
const Q_FONT = Fenozmin.get('window').width * 0.045;
const OPT_HEIGHT = Fenozmin.get('window').height * 0.057;
const OPT_RADIUS = OPT_HEIGHT * 0.25;
const OPT_FONT = Fenozmin.get('window').width * 0.045;
const MOUNTAINS_HEIGHT = Fenozmin.get('window').height * 0.18;

const STORAGE_KEY = 'BWB_QUIZ_LEVELS';

export default function Brequizzeeeword({screen, setScreen} : {screen: 'levels' | 'quiz' | 'result', setScreen: (node: 'levels' | 'quiz' | 'result') => void},) {
    const { width: zebrishyr, height: febeszh } = Fenozmin.get('window');
    const [selectedLvl, setSelectedLvl] = useState<number | null>(null);
    const [passed, setPassed] = useState<number[]>([]);
    const [qIdx, setQIdx] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [quizResult, setQuizResult] = useState<'calm' | 'notcalm'>('calm');
    const [correctCount, setCorrectCount] = useState(0);

    // Load passed levels from storage
    useEffect(() => {
        AsyncStorage.getItem(STORAGE_KEY).then(val => {
            if (val) setPassed(JSON.parse(val));
        });
    }, []);

    // Save passed levels
    const markLevelPassed = async (lvl: number) => {
        const newPassed = passed.includes(lvl) ? passed : [...passed, lvl];
        setPassed(newPassed);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newPassed));
    };

    // Level select screen
    if (screen === 'levels') {
        return (
            <Sorcbxx style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                paddingTop: febeszh * 0.04,
                flex: 1,
            }}>
                <Sorcbxx style={{
                    flexWrap: 'wrap',
                    marginBottom: febeszh * 0.06,
                    width: zebrishyr * 0.88,
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                    {tebtestdata.map((_, i) => {
                        let bg = LVL_DEFAULT;
                        let disabled = false;
                        // Доступний якщо це перший рівень, або попередній пройдено
                        if (passed.includes(i)) bg = LVL_DONE;
                        else if (selectedLvl === i) bg = LVL_SELECTED;
                        // Заборонити вибір, якщо не перший і попередній не пройдено
                        if (i !== 0 && !passed.includes(i - 1) && !passed.includes(i)) {
                            disabled = true;
                        }
                        return (
                            <TouchableOpacity
                                key={i}
                                onPress={() => !disabled && setSelectedLvl(i)}
                                disabled={disabled}
                                style={{
                                    backgroundColor: bg,
                                    alignItems: 'center',
                                    height: LVL_SIZE,
                                    borderRadius: LVL_RADIUS,
                                    justifyContent: 'center',
                                    opacity: disabled ? 0.5 : 1,
                                    margin: LVL_MARGIN,
                                    width: LVL_SIZE,
                                }}>
                                <ToSHowUserTtls style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: LVL_FONT,
                                }}>{i + 1}</ToSHowUserTtls>
                            </TouchableOpacity>
                        );
                    })}
                </Sorcbxx>
                <TouchableOpacity
                    disabled={
                        selectedLvl === null ||
                        (selectedLvl !== 0 && selectedLvl !== null && !passed.includes(selectedLvl - 1) && !passed.includes(selectedLvl))
                    }
                    onPress={() => {
                        setCorrectCount(0);
                        setScreen('quiz');
                        setShowAnswer(false);
                        setSelectedOpt(null);
                        setQIdx(0);
                    }}
                    style={{
                        opacity: 1,
                        height: BTN_HEIGHT,
                        justifyContent: 'center',
                        backgroundColor: BTN_START,
                        alignItems: 'center',
                        borderRadius: BTN_RADIUS,
                        width: zebrishyr * 0.7,
                    }}>
                    <ToSHowUserTtls style={{
                        zIndex: 1000,
                        fontSize: BTN_FONT,
                        fontWeight: 'bold',
                        color: BTN_TEXT,
                    }}>
                        {selectedLvl === null
                            ? 'Start Level'
                            : (selectedLvl !== 0 && !passed.includes(selectedLvl - 1) && !passed.includes(selectedLvl))
                                ? 'Level Closed'
                                : `Start Level ${selectedLvl + 1}`}
                    </ToSHowUserTtls>
                </TouchableOpacity>
                <Sorcbxx style={{
                    zIndex: 0,
                    bottom: 0,
                    height: MOUNTAINS_HEIGHT,
                    width: zebrishyr,
                    position: 'absolute',
                }}>
                    <Droimg
                        source={mountainsImg}
                        style={{
                            width: zebrishyr,
                            height: MOUNTAINS_HEIGHT,
                            resizeMode: 'stretch',
                        }}
                    />
                </Sorcbxx>
            </Sorcbxx>
        );
    }

    // Quiz screen
    if (screen === 'quiz' && selectedLvl !== null) {
        const questions = tebtestdata[selectedLvl];
        const q = questions[qIdx];
        return (
            <Sorcbxx style={{
                alignItems: 'center',
                paddingTop: febeszh * 0.13,
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'flex-start',
            }}>
                <Sorcbxx style={{
                    padding: zebrishyr * 0.06,
                    alignItems: 'center',
                    borderRadius: zebrishyr * 0.05,
                    backgroundColor: '#275841',
                    width: zebrishyr * 0.88,
                }}>
                    <ToSHowUserTtls style={{
                        fontSize: Q_FONT,
                        textAlign: 'center',
                        fontStyle: 'italic',
                        color: '#fff',
                        marginBottom: febeszh * 0.04,
                        fontWeight: '500',
                    }}>{q.question}</ToSHowUserTtls>
                    {q.options.map((opt, idx) => {
                        let bg = '#CBB969';
                        if (showAnswer) {
                            if (opt.correct) bg = CORRECT;
                            else if (selectedOpt === idx) bg = WRONG;
                        }
                        return (
                            <TouchableOpacity
                                key={idx}
                                disabled={showAnswer}
                                onPress={() => {
                                    setSelectedOpt(idx);
                                    setShowAnswer(true);
                                    if (opt.correct) setCorrectCount(count => count + 1);
                                    setTimeout(() => {
                                        if (qIdx === questions.length - 1) {
                                            setScreen('result');
                                            // Якщо >=4 правильних, додаємо до пройдених
                                            if (correctCount + (opt.correct ? 1 : 0) >= 4) {
                                                markLevelPassed(selectedLvl);
                                                setQuizResult('calm');
                                            } else {
                                                setQuizResult('notcalm');
                                            }
                                        } else {
                                            setQIdx(qIdx + 1);
                                            setSelectedOpt(null);
                                            setShowAnswer(false);
                                        }
                                    }, 900);
                                }}
                                style={{
                                    backgroundColor: bg,
                                    borderRadius: OPT_RADIUS,
                                    alignItems: 'center',
                                    height: OPT_HEIGHT,
                                    justifyContent: 'center',
                                    marginBottom: febeszh * 0.018,
                                    width: zebrishyr * 0.7,
                                }}>
                                <ToSHowUserTtls style={{
                                    color: '#fff',
                                    fontSize: OPT_FONT,
                                    fontWeight: '500',
                                }}>{opt.text}</ToSHowUserTtls>
                            </TouchableOpacity>
                        );
                    })}
                </Sorcbxx>
                <Sorcbxx style={{
                    width: zebrishyr,
                    height: MOUNTAINS_HEIGHT,
                    bottom: 0,
                    position: 'absolute',
                }}>
                    <Droimg
                        source={mountainsImg}
                        style={{
                            width: zebrishyr,
                            height: MOUNTAINS_HEIGHT,
                            resizeMode: 'stretch',
                        }}
                    />
                </Sorcbxx>
            </Sorcbxx>
        );
    }

    // Result screen
    if (screen === 'result') {
        // Масив кнопок для рендера
        const resultButtons = [
            quizResult === 'calm'
                ? {
                    key: 'next',
                    text: 'Next Test',
                    onPress: () => {
                        setScreen('levels');
                        setSelectedLvl(null);
                        setQIdx(0);
                        setSelectedOpt(null);
                        setShowAnswer(false);
                    },
                    backgroundColor: BTN_NEXT,
                    marginBottom: febeszh * 0.018,
                }
                : {
                    key: 'tryagain',
                    text: 'Try Again',
                    onPress: () => {
                        setScreen('quiz');
                        setQIdx(0);
                        setSelectedOpt(null);
                        setShowAnswer(false);
                        setCorrectCount(0);
                    },
                    backgroundColor: BTN_NEXT,
                    marginBottom: febeszh * 0.018,
                },
            {
                key: 'share',
                text: 'Share',
                onPress: async () => {
                    await Share.share({
                        message: quizResult === 'calm'
                            ? 'I finished a quiz in calm focus!'
                            : 'I tried the quiz, but need more practice!',
                    });
                },
                backgroundColor: BTN_SHARE,
                marginBottom: febeszh * 0.018,
            },
            {
                key: 'menu',
                text: 'Back to Menu',
                onPress: () => {
                    setScreen('levels');
                    setSelectedLvl(null);
                    setQIdx(0);
                    setSelectedOpt(null);
                    setShowAnswer(false);
                },
                backgroundColor: BTN_MENU,
                marginBottom: 0,
            }
        ];

        return (
            <Sorcbxx style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: 'transparent',
            }}>
                <ToSHowUserTtls style={{
                    marginBottom: febeszh * 0.01,
                    textAlign: 'center',
                    fontWeight: '800',
                    fontSize: zebrishyr * 0.1,
                    color: '#fff',
                }}>
                    {quizResult === 'calm' ? 'TEST\nCOMPLETED' : 'TEST\nFAILED'}
                </ToSHowUserTtls>
                <ToSHowUserTtls style={{
                    marginBottom: febeszh * 0.03,
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: zebrishyr * 0.05,
                    fontWeight: '600',
                }}>
                    {quizResult === 'calm'
                        ? 'You finished this test in\ncalm focus.'
                        : 'You did not pass this test.\nTry again!'}
                </ToSHowUserTtls>
                <Sorcbxx style={{
                    marginVertical: febeszh * 0.025,
                    marginBottom: febeszh * 0.04,
                }}>
                    <Droimg
                        source={qiznd}
                        style={{
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            height: zebrishyr * 0.28,
                            width: zebrishyr * 0.28,
                        }}
                    />
                </Sorcbxx>
                {resultButtons.map(btn => (
                    <TouchableOpacity
                        key={btn.key}
                        onPress={btn.onPress}
                        style={{
                            justifyContent: 'center',
                            width: zebrishyr * 0.7,
                            marginBottom: btn.marginBottom,
                            borderRadius: zebrishyr * 0.035,
                            backgroundColor: '#275841',
                            alignItems: 'center',
                            height: febeszh * 0.057,
                        }}>
                        <ToSHowUserTtls style={{
                            color: BTN_TEXT,
                            fontSize: BTN_FONT,
                            fontWeight: '500',
                            fontStyle: 'italic',
                        }}>{btn.text}</ToSHowUserTtls>
                    </TouchableOpacity>
                ))}
            </Sorcbxx>
        );
    }

    return null;
}