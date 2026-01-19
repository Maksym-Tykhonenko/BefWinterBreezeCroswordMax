import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Dimensions as Picksize,
    View as WrapotherElements,
    Text as Teniwextic,
} from 'react-native';
import React, { useEffect, useState } from 'react';

const SETTINGS = [
    {
        label: 'Sound',
        key: 'sorcez-bretni-snd-flg-for-playing',
        stateKey: 'musicOn',
    },
    {
        label: 'Notifications',
        key: 'breeze-notifications-flag',
        stateKey: 'notifOn',
    },
];

export default function PreparingApptouse({
    setMusicOn,
    musicOn,
}: {
    setMusicOn: (val: boolean) => void;
    musicOn: boolean | null;
}) {
    const { width: ezecw, height: feborheiz } = Picksize.get('window');
    const pad = ezecw * 0.04;
    const boxH = feborheiz * 0.07;
    const boxR = ezecw * 0.025;
    const fontSize = ezecw * 0.055;
    const switchW = ezecw * 0.16;
    const switchH = feborheiz * 0.038;
    const switchR = ezecw * 0.015;
    const switchFont = ezecw * 0.04;
    const gap = feborheiz * 0.025;

    const [settings, setSettings] = useState<{ [key: string]: boolean }>({
        musicOn: musicOn ?? true,
        notifOn: true,
    });

    // Load settings from AsyncStorage
    useEffect(() => {
        (async () => {
            let newSettings: any = {};
            for (const s of SETTINGS) {
                const val = await AsyncStorage.getItem(s.key);
                newSettings[s.stateKey] = val === null ? true : val === 'true';
            }
            setSettings(newSettings);
            if (typeof setMusicOn === 'function') setMusicOn(newSettings.musicOn);
        })();
    }, []);

    // Handler for toggling
    const handleToggle = async (stateKey: string, storageKey: string) => {
        const newVal = !settings[stateKey];
        setSettings((prev) => ({ ...prev, [stateKey]: newVal }));
        await AsyncStorage.setItem(storageKey, newVal ? 'true' : 'false');
        if (stateKey === 'musicOn' && typeof setMusicOn === 'function') setMusicOn(newVal);
    };

    return (
        <WrapotherElements
            style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: feborheiz * 0.07,
                backgroundColor: 'transparent',
            }}
        >
            {SETTINGS.map((item, idx) => (
                <WrapotherElements
                    key={item.key}
                    style={{
                        borderRadius: boxR,
                        marginBottom: gap,
                        height: boxH,
                        backgroundColor: '#275841',
                        flexDirection: 'row',
                        paddingHorizontal: pad,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: ezecw * 0.92,
                    }}
                >
                    <Teniwextic
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize,
                        }}
                    >
                        {item.label}
                    </Teniwextic>
                    <TouchableOpacity
                        onPress={() => handleToggle(item.stateKey, item.key)}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: switchW,
                            height: switchH,
                            borderRadius: switchR,
                            backgroundColor: '#004031',
                        }}
                        activeOpacity={0.7}
                    >
                        <Teniwextic style={{
                                fontWeight: '600',
                                color: '#fff',
                                fontSize: switchFont,
                                fontStyle: 'italic',
                            }}
                        >
                            {settings[item.stateKey] ? 'ON' : 'OFF'}
                        </Teniwextic>
                    </TouchableOpacity>
                </WrapotherElements>
            ))}
        </WrapotherElements>
    );
}