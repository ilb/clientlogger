import pino from 'pino';
import pinoTransmitHttp from 'pino-transmit-http';

export default pino({
  browser: {
    transmit: pinoTransmitHttp({
      url: process.env.API_PATH + (process.env.LOG_PATH || '/service/log')
    })
  }
});
