import ZImovaStorinkaDomashnya from './ZImovaStorinkaDomashnya';
import Brequizzeeeword from './Brequizzeeeword';
import PreparingApptouse from './PreparingApptouse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NertreztefCrosswordAnswering from './NertreztefCrosswordAnswering';
import PlrFactsColdWint from './PlrFactsColdWint';
import Sound from 'react-native-sound';
import React, { useEffect as checkChanges,useState as usageofsttmnt,} from 'react';
import {
    Text as SorefiTtl,
    Dimensions as DeviceRozmrs,
    View as SnowHullChamber,
    TouchableOpacity as IcewistTapuch,
    Image as PolarRasterPict,
    SafeAreaView as CalmShieldPocket,
} from 'react-native';


type BefBreezeSigils =
    | 'Cold Breseze Facts and Polar'
    | 'Test with levels you can complete'
    | 'Pick all words to complete the crossword'
    | 'Nalashtyvaty Sound And Notifcts'
    | 'Crswrding Starting Wlcm';
const BREEZE_TUNE_FLAG = 'sorcez-bretni-snd-flg-for-playing';
const BREEZE_TUNE_FILE = 'breewintr.mp3';

let frostSoundCore: Sound | null = null;

const { width: SNOW_WIND, height: FROIC_CALM_DPTH } =
    DeviceRozmrs.get('window');

const CrositerBeroObgrdkord: React.FC = () => {
    const [enivpg, setEnivpg] =
        usageofsttmnt<BefBreezeSigils>('Crswrding Starting Wlcm');

    const [quizPhase, setQuizPhase] =
        usageofsttmnt<'levels' | 'quiz' | 'result'>('levels');

    const [soundBreathing, setSoundBreathing] =
        usageofsttmnt<boolean | null>(null);

    // init sound preference
    checkChanges(() => {
        (async () => {
            const storedTone = await AsyncStorage.getItem(BREEZE_TUNE_FLAG);
            if (storedTone === null) {
                await AsyncStorage.setItem(BREEZE_TUNE_FLAG, 'true');
                setSoundBreathing(true);
            } else {
                setSoundBreathing(storedTone === 'true');
            }
        })();
    }, []);

    // sound engine
    checkChanges(() => {
        if (soundBreathing === null) return;

        if (frostSoundCore) {
            frostSoundCore.stop(() => {
                frostSoundCore?.release();
                frostSoundCore = null;
            });
        }

        if (soundBreathing) {
            Sound.setCategory('Playback');
            frostSoundCore = new Sound(
                BREEZE_TUNE_FILE,
                Sound.MAIN_BUNDLE,
                err => {
                    if (!err && frostSoundCore) {
                        frostSoundCore.setNumberOfLoops(-1);
                        frostSoundCore.play();
                    }
                },
            );
        }

        return () => {
            if (frostSoundCore) {
                frostSoundCore.stop(() => {
                    frostSoundCore?.release();
                    frostSoundCore = null;
                });
            }
        };
    }, [soundBreathing]);

    const rendrBrefiizscn = (sig: BefBreezeSigils) => {
        switch (sig) {
            case 'Crswrding Starting Wlcm':
                return <ZImovaStorinkaDomashnya setActiveSigil={setEnivpg} />;
            case 'Cold Breseze Facts and Polar':
                return <PlrFactsColdWint />;
            case 'Test with levels you can complete':
                return (
                    <Brequizzeeeword
                        screen={quizPhase}
                        setScreen={setQuizPhase}
                    />
                );
            case 'Pick all words to complete the crossword':
                return (
                    <NertreztefCrosswordAnswering
                        screen={quizPhase}
                        setScreen={setQuizPhase}
                    />
                );
            case 'Nalashtyvaty Sound And Notifcts':
                return (
                    <PreparingApptouse
                        setMusicOn={setSoundBreathing}
                        musicOn={soundBreathing}
                    />
                );
            default:
                return null;
        }
    };

    const frostTitleOracle = (sig: BefBreezeSigils) => {
        switch (sig) {
            case 'Cold Breseze Facts and Polar':
                return 'COLD FACTS';
            case 'Test with levels you can complete':
                return 'TEST';
            case 'Pick all words to complete the crossword':
                return 'CROSSWORD';
            case 'Nalashtyvaty Sound And Notifcts':
                return 'SETTINGS';
            default:
                return '';
        }
    };

    return (
        <SnowHullChamber
            style={{
                width: SNOW_WIND,
                flex: 1,

                height: FROIC_CALM_DPTH,

                backgroundColor: '#004031',
            }}
        >
            {enivpg === 'Cold Breseze Facts and Polar' && (
                <>
                    <PolarRasterPict
                        style={{
                            width: SNOW_WIND,
                            position: 'absolute',
                            height: FROIC_CALM_DPTH,
                        }}
                        resizeMode="cover"
                        source={require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/greegrnd.png')}
                    />
                    <SnowHullChamber
                        style={{
                            backgroundColor: 'rgba(191,255,210,0.35)',
                            width: SNOW_WIND,
                            position: 'absolute',
                            height: FROIC_CALM_DPTH,
                        }}
                    />
                </>
            )}

            <CalmShieldPocket />

            {enivpg !== 'Crswrding Starting Wlcm' && (
                <SnowHullChamber
                style={{
                        alignItems: 'center',
                        width: SNOW_WIND * 0.88,
                        marginTop: FROIC_CALM_DPTH * 0.01,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                    }}
                >
                    <IcewistTapuch
                        onPress={() => {
                            if (
                                (enivpg ===
                                    'Test with levels you can complete' ||
                                    enivpg ===
                                        'Pick all words to complete the crossword') &&
                                quizPhase !== 'levels'
                            ) {
                                setQuizPhase('levels');
                                return;
                            }
                            setEnivpg('Crswrding Starting Wlcm');
                        }}
                    >
                        <PolarRasterPict
                            source={require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/retgobck.png')}
                            style={{
                                width: SNOW_WIND * 0.07,
                                height: SNOW_WIND * 0.07,
                            }}
                            resizeMode="contain"
                        />
                    </IcewistTapuch>

                    <SorefiTtl
                        style={{ color: '#CBB969', fontSize: SNOW_WIND * 0.068, fontWeight: '800',
                        }}
                    >
                        {frostTitleOracle(enivpg)}
                    </SorefiTtl>

                    <SnowHullChamber style={{ width: SNOW_WIND * 0.07 }} />
                </SnowHullChamber>
            )}

            <SnowHullChamber style={{ flex: 1, zIndex: 1 }}>
                {rendrBrefiizscn(enivpg)}
            </SnowHullChamber>
        </SnowHullChamber>
    );
};

export default CrositerBeroObgrdkord;
