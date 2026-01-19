import {
    Dimensions as WntrBndSpn,
    View as BrzCntHld,
    Image as FrozEmblm,
    Text as SnwGkdIHSTexs,
    TouchableOpacity as SnwfallswoTapping,
} from 'react-native';
import React from 'react';

const brzbwtnodes = [
    { mark: 'WORDS', rune: 'Pick all words to complete the crossword', hue: '#FCEC70' },
    { mark: 'TEST', rune: 'Test with levels you can complete', hue: '#FFFFFF' },
    { mark: 'COLD FACTS', rune: 'Cold Breseze Facts and Polar', hue: '#FFFFFF' },
    { mark: 'SETTING', rune: 'Nalashtyvaty Sound And Notifcts', hue: '#FFFFFF' },
];

export default function BefWintrBreezeHearth({
    setActiveSigil,
}: {
    setActiveSigil: (node: string) => void;
}) {
    const { width: frostW, height: chillH } = WntrBndSpn.get('window');

    const slabTall = chillH * 0.07;
    const slabCurve = frostW * 0.04;
    const slabGap = chillH * 0.018;
    const glyphScale = frostW * 0.07;

    return (
        <BrzCntHld
            style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', }}>
            <FrozEmblm source={require('../BefWinterBreezeCroswordAssets/WintebreswoImagsefb/befwntrlgo.png')}
                style={{
                    marginTop: chillH * 0.01,
                    height: frostW * 0.7,
                    width: frostW * 0.7,
                }}
                resizeMode="contain"
            />

            <BrzCntHld style={{
                marginTop: chillH * 0.06,
                width: frostW * 0.8,
                }}
            >
                {brzbwtnodes.map((slab) => (
                    <SnwfallswoTapping
                        key={slab.rune}
                        onPress={() => setActiveSigil(slab.rune)}
                        style={{
                            justifyContent: 'center',
                            marginBottom: slabGap,
                            height: slabTall,
                            alignItems: 'center',
                            backgroundColor: '#275841',
                            borderRadius: slabCurve,
                        }}
                    >
                        <SnwGkdIHSTexs
                            style={{
                                letterSpacing: 1.5,
                                fontSize: glyphScale,
                                fontWeight: '800',
                                color: slab.hue,
                            }}
                        >
                            {slab.mark}
                        </SnwGkdIHSTexs>
                    </SnwfallswoTapping>
                ))}
            </BrzCntHld>
        </BrzCntHld>
    );
}