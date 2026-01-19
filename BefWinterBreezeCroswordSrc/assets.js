import RNFS from 'react-native-fs';
const signaturePath = RNFS.MainBundlePath + '/BefWinterBreezeCroswordAssets/BefWinterBreezeCrosword_signature.dat';
RNFS.readFile(signaturePath).then(data => {
}).catch(() => {
});
