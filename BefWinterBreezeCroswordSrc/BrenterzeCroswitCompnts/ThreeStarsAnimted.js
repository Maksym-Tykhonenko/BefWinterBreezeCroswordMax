import { WebView } from 'react-native-webview';
import { View, Dimensions } from 'react-native';

const ThreeStarsAnimted = () => {
  const dimensions = Dimensions.get('window');

  const starsAnimationHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* From Uiverse.io by LightAndy1 */ 
        .loader {
          user-select: none;
        }

        .star {
          opacity: 0;
          fill: #f8de7e;
          animation: loader 2s infinite alternate;
        }

        .star2 {
          height: 20px;
          margin-left: -10px;
          animation-delay: 0.25s;
        }

        .star3 {
          height: 16px;
          margin-left: -15px;
          animation-delay: 0.5s;
        }

        @keyframes loader {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(50px) rotate(0deg);
          }
          10% {
            opacity: 0;
            transform: translateY(0) translateX(50px) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(-20px) translateX(0) rotate(360deg);
          }
        }
        html, body {
          height: 100%;
          margin: 0;
          background: transparent;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <div class="loader">
        <svg
          viewBox="0 0 256 256"
          class="star star1"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
          ></path>
        </svg>
        <svg
          viewBox="0 0 256 256"
          class="star star2"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
          ></path>
        </svg>
        <svg
          viewBox="0 0 256 256"
          class="star star3"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
          ></path>
        </svg>
      </div>
    </body>
    </html>
  `;

  return (
    <View style={{
      width: dimensions.width * 0.9,
      flex: 0,
      alignSelf: 'center',
      height: dimensions.height * 0.55,
    }}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        domStorageEnabled={true}
        bounces={false}
        allowsInlineMediaPlayback={true}
        scrollEnabled={false}
        javaScriptEnabled={true}
        startInLoadingState={false}
        scalesPageToFit={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        source={{ html: starsAnimationHTML }}
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
        mixedContentMode="compatibility"
      />
    </View>
  );
};

export default ThreeStarsAnimted;