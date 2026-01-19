import {
    SafeAreaView as FrostSafeCradle,
    View as CrosGuardHusk,
    Dimensions as WinterSpanGauge,
    Image as BefrostRasterVeil,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BREEZE_CROSS_BOOT_SIGIL = 'befwinter_breeze_cross_boot_sigil_v1';
import ThreeStarsAnimted from '../BrenterzeCroswitCompnts/ThreeStarsAnimted';
import { useNavigation as BreezeNavDrift } from '@react-navigation/native';
import React, { useEffect as WhirlFreezeLoop } from 'react';

const BefWinterBreezeLoading: React.FC = () => {
    const navCurrent = BreezeNavDrift();
    const { width: snowiw, height: frosh } = WinterSpanGauge.get('window');




    WhirlFreezeLoop(() => {
        const randomDrift = Math.floor(Math.random() * 900);
        let breezeAlive = true;
        const awakenBreeze = async () => {
            try {
                const storedSigil = await AsyncStorage.getItem(BREEZE_CROSS_BOOT_SIGIL);
                if (!storedSigil) {
                    await AsyncStorage.setItem(BREEZE_CROSS_BOOT_SIGIL, 'etched');
                }

                //setTimeout(() => {
                    //if (!breezeAlive) return;
//
                    //setTimeout(() => {
                    //    if (!breezeAlive) return;
                    //    navCurrent.replace(
                    //        storedSigil
                    //            ? 'CrositerBeroObgrdkord'
                    //            : 'BefWinterOnboardGate'
                    //    );
                    //}, 1000 + randomDrift);
                //}, 2500);
            } catch (breezeFault) {
                if (__DEV__) console.warn('BefWinter::bootFault', breezeFault);
            }
        };

        awakenBreeze();

        return () => {
            breezeAlive = false;
        };
    }, [navCurrent, snowiw]);

    return (
        <FrostSafeCradle style={{
            alignItems: 'center',
            flex: 1,
            height: frosh,
            justifyContent: 'center',
            width: snowiw,
        }}>
            <BefrostRasterVeil
                style={{
                    width: snowiw,
                    position: 'absolute',
                    height: frosh * 1.03,
                }}
                source={require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/greegrnd.png')}
                resizeMode="cover"
            />

            <BefrostRasterVeil
                source={require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/befwntrlgo.png')}
                resizeMode="contain"
                style={{
                    height: snowiw * 0.7,
                    width: snowiw * 0.7,
                }}
            />

            <CrosGuardHusk
                style={{
                    bottom: -frosh * 0.1,
                    alignSelf: 'center',
                    position: 'absolute',
                }}
            >
                <ThreeStarsAnimted />
            </CrosGuardHusk>
        </FrostSafeCradle>
    );
};

export default BefWinterBreezeLoading;