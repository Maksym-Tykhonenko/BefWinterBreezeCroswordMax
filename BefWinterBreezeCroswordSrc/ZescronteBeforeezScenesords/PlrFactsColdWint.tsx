import {
    Text as TextovElem,
    View as Swoboxie,
    TouchableOpacity,
    Dimensions as DrofenteRozsh,
    Share,
    Image as ReacnavePict,
} from 'react-native';
import React, { useState } from 'react';
import itercoldfacts from '../Crodatnni/itercoldfacts';

const polarBearImg = require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/polarBear.png');

export default function PlrFactsColdWint() {
    const { width: sworwsh, height: finth } = DrofenteRozsh.get('window');


    // Розміри
    const cardWidth = sworwsh * 0.87;
    const cardHeight = finth * 0.46;
    const cardRadius = sworwsh * 0.06;
    const bearImgWidth = sworwsh * 0.45;
    const bearImgHeight = finth * 0.18;
    const btnWidth = sworwsh * 0.62;
    const btnHeight = finth * 0.06;
    const btnRadius = sworwsh * 0.025;
    const btnSpacing = finth * 0.018;
    const factFontSize = sworwsh * 0.058;
    const btnFontSize = sworwsh * 0.05;

    // Стан для поточного факту
    const [factIdx, setFactIdx] = useState(0);

    // Кнопки
    const buttons = [
        {
            text: 'Next',
            onPress: () => setFactIdx((prev) => (prev + 1) % itercoldfacts.length),
        },
        {
            text: 'Share',
            onPress: () => {
               Share.share({
                    message: `Did you know?\n\n${itercoldfacts[factIdx]}\n\nLearn more about the Arctic with the BefWinter: Breeze Crossword app!`,
               })
            },
        },
    ];

    return (
        <Swoboxie style={{
            justifyContent: 'center',
            backgroundColor: 'transparent',            flex: 1,
            alignItems: 'center',
        }}>
            <Swoboxie style={{
                paddingHorizontal: sworwsh * 0.06,
                alignItems: 'center',
                height: cardHeight,
                borderRadius: cardRadius,
                justifyContent: 'flex-start',
                paddingTop: finth * 0.025,
                width: cardWidth,
                backgroundColor: '#1D4D4D',
            }}>
                <TextovElem style={{
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: factFontSize,
                    marginBottom: finth * 0.04,
                    color: 'white',
                }}>
                    {itercoldfacts[factIdx]}
                </TextovElem>
                <Swoboxie style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <ReacnavePict
                        source={polarBearImg}
                        style={{
                            width: bearImgWidth,
                            height: bearImgHeight,
                            resizeMode: 'contain',
                        }}
                    />
                </Swoboxie>
            </Swoboxie>
            <Swoboxie style={{
                marginTop: finth * 0.045,
                width: '100%',
                alignItems: 'center',
            }}>
                {buttons.map((btn, idx) => (
                    <TouchableOpacity
                        key={btn.text}
                        onPress={btn.onPress}
                        style={{
                            height: btnHeight,
                            backgroundColor: '#275841',
                            marginTop: idx === 0 ? 0 : btnSpacing,
                            borderRadius: btnRadius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: btnWidth,
                        }}
                    >
                        <TextovElem style={{
                            fontStyle: 'italic',
                            fontWeight: '500',
                            color: 'white',
                            fontSize: btnFontSize,
                        }}>
                            {btn.text}
                        </TextovElem>
                    </TouchableOpacity>
                ))}
            </Swoboxie>
        </Swoboxie>
    );
}