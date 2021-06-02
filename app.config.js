// https://docs.expo.io/guides/environment-variables/#from-appconfigjs
import 'dotenv/config';

const {
    OPENWEATHER_API_URL = '',
    OPENWEATHER_API_KEY = '',
    REGION = 'kr',
<<<<<<< HEAD

    GOOGLE_API_KEY = ''
=======
>>>>>>> 4281b9fc8ca4d098b954b1a2bfc4566d4f83a520
} = process.env;

export default {
  extra: {
    openWeatherApi: {
        baseUrl: OPENWEATHER_API_URL,
        apiKey: OPENWEATHER_API_KEY,
        region: REGION,
    },
<<<<<<< HEAD

      googleApiKey: GOOGLE_API_KEY,
=======
>>>>>>> 4281b9fc8ca4d098b954b1a2bfc4566d4f83a520
  },
};