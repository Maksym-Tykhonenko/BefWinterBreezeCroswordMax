import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Text as BreezWordInk,
    View as BefCrosHull,
    SafeAreaView as WinterSafePocket,
    TouchableOpacity as ChillTapGly,
    Image as FrostRasterVein,
    useWindowDimensions as SnowSpanOzeaacl,
} from 'react-native';

import { useNavigation as BreezNavSpiral } from '@react-navigation/native';

const FROST_BRZE_LOCK_INIT = 'benterwi_brize_cross_lock_-keu-value-secret';

import React, { useState as DriftLatchRune } from 'react';

const WintBebrezOnboaCswod: React.FC = () => {
    const navCurrentFlow = BreezNavSpiral();
    const [snowpagnw, setSnowpagnw] = DriftLatchRune(0);

    const { width: iceWidthFlux, height: calmHeightFlux } = SnowSpanOzeaacl();

    const breezePanels = [
        {
            uid: 11,
            crown: `BefWINTER
BREEZE
CROSSWORD`,
            whisper: `Words from before winter, found in the calm of winter.`,
            frostPic: require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/onelems/TakeBreathLetbegin.png'),
            sigil: 'Get Started',
        },
        {
            uid: 22,
            crown: `SLOVE THE WINNTER
CROSSWORD`,
            whisper: `A single calm crossword focused on words, not speed or pressure.`,
            frostPic: require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/onelems/crossWord.png'),
            sigil: 'Continue',
        },
        {
            uid: 33,
            crown: `EXPLORE THE
WINTER POLE`,
            whisper: `Take short quizzes and discover facts about the winter pole.`,
            frostPic: require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/onelems/TakeShortQuizzes.png'),
            sigil: 'Check In',
        },
        {
            uid: 44,
            crown: `YOUR PACE.
NO RUSH.`,
            whisper: `Solve, learn, and explore in complete calm.`,
            frostPic: require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/onelems/DiscoverFactsFromTheQuietNorth.png'),
            sigil: 'Start My Journey',
        },
    ];

    const driftForwardRite = async () => {
        if (snowpagnw < breezePanels.length - 1) {
            setSnowpagnw(p => p + 1);
        } else {
            try {
                await AsyncStorage.setItem(FROST_BRZE_LOCK_INIT, 'sealed');
            } catch (frostErr) {
                if (__DEV__) console.warn('BefWinter::orbitSealFail', frostErr);
            }
            navCurrentFlow.replace?.('CrositerBeroObgrdkord');
        }
    };

    const activeFrostShard = breezePanels[snowpagnw].frostPic;

    return (
        <BefCrosHull
            style={{
                alignItems: 'center',
                height: calmHeightFlux,
                flex: 1,
                width: iceWidthFlux,
            }}
        >
            <WinterSafePocket />
            <FrostRasterVein
                source={require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/greegrnd.png')}
                style={{
                    zIndex: 0,
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    height: calmHeightFlux,
                    width: iceWidthFlux,
                }}
                resizeMode="cover"
            />

            <BefCrosHull
                style={{
                    alignItems: 'center',
                    marginTop: calmHeightFlux * 0.03,
                    alignSelf: 'center',
                    width: iceWidthFlux * 0.93,
                }}
            >
                <BreezWordInk
                    style={{
                        textAlign: 'center',
                        fontSize: iceWidthFlux * 0.1,
                        marginBottom: calmHeightFlux * 0.015,
                        color: '#FFFFFF',
                        fontWeight: '800',
                    }}
                >
                    {breezePanels[snowpagnw].crown}
                </BreezWordInk>

                <BreezWordInk
                    style={{
                        color: '#FFFFFF',
                        fontSize: iceWidthFlux * 0.05,
                        width: iceWidthFlux * 0.64,
                        textAlign: 'center',
                        fontWeight: '600',
                    }}
                >
                    {breezePanels[snowpagnw].whisper}
                </BreezWordInk>
            </BefCrosHull>

            <FrostRasterVein
                source={activeFrostShard}
                resizeMode="contain"
                style={{
                    marginTop: calmHeightFlux * 0.035,
                    zIndex: 3,
                    height: calmHeightFlux * 0.3,
                    alignSelf: 'center',
                    width: iceWidthFlux,
                }}
            />

            <BefCrosHull
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: calmHeightFlux * 0.0888345,
                }}
            >
                <ChillTapGly
                    onPress={driftForwardRite}
                    style={{
                        height: calmHeightFlux * 0.08,
                        justifyContent: 'center',
                        borderRadius: iceWidthFlux * 0.044,
                        zIndex: 4,
                        backgroundColor: '#CBB969',
                        width: iceWidthFlux * 0.7,
                        alignItems: 'center',
                    }}
                    activeOpacity={0.8}
                >
                    <BreezWordInk
                        style={{
                            fontStyle: 'italic',
                            fontWeight: '600',
                            color: 'white',
                            textAlign: 'center',
                            fontSize: iceWidthFlux * 0.059023,
                        }}
                    >
                        {snowpagnw === 0
                            ? 'Start'
                            : snowpagnw === breezePanels.length - 1
                                ? 'Begin'
                                : 'Next'}
                    </BreezWordInk>
                </ChillTapGly>

                <ChillTapGly
                    onPress={() => {
                        navCurrentFlow.replace?.('CrositerBeroObgrdkord');
                    }}
                    style={{
                        zIndex: 4,
                        opacity: snowpagnw === breezePanels.length - 1 ? 0 : 1,
                    }}
                    activeOpacity={0.8}
                    disabled={snowpagnw === breezePanels.length - 1}
                >
                    <BreezWordInk
                        style={{
                            marginTop: calmHeightFlux * 0.025,
                            fontWeight: '600',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            color: 'white',
                            fontSize: iceWidthFlux * 0.061,
                        }}
                    >
                        Skip
                    </BreezWordInk>
                </ChillTapGly>
            </BefCrosHull>
        </BefCrosHull>
    );
};

export default WintBebrezOnboaCswod;