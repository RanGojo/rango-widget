import { Widget } from "@rango-dev/widget-embedded";

function App() {
  const config = {
    from: {
      blockchain: 'POLYGON',
      token: {
        blockchain: 'POLYGON',
        address: null,
        symbol: 'MATIC'
      }
    },
    to: {
      blockchain: 'POLYGON',
      token: {
        blockchain: 'POLYGON',
        address: '0x42af7aac6ae6425ffa96370cfd0b12522aa4b458',
        symbol: 'KAX'
      }
    },
    "theme": {
      "mode": 'light',
      "singleTheme": true,
      "colors": {
        light: {
          primary: '#a8c416',
          secondary: '#a8c416',
          neutral: '#9793AD',
          info: '#744AB2',
          foreground: '#120f29ff',
          background: '#fcf7ff'
        }
      }
    },
    "apiKey": "cbdde8b1-9076-4bf8-bc61-6b72edfeff37",
    "rateLimitPerSecond": 10,
    "title": "Kaxaa",
    "allowedDomains": [
      "http://localhost:3000",
      "https://ewallet.kaxaa.com"
    ],
    "walletConnectProjectId": 'a3e6e436f4051afef56e5cf00a41e02d',
    _UNSTABLE_OR_INTERNAL_: {
      walletConnectListedDesktopWalletLink: 'https://link.kaxaa.com',
    },
  };
  return (
    <div>
      <Widget
        config={config}
      />
    </div>
  );
}

export default App;
