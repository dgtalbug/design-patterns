import winston from 'winston';

const logLevelConfig = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'cyan',
    data: 'grey',
    info: 'green',
  }
};

winston.addColors(logLevelConfig.colors);

const logFormat = winston.format
  .combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `\n [${timestamp}] ${level}: ${message}` ;
    })
  )
  
export const Logger = winston.createLogger({
  levels:logLevelConfig.levels,
  transports: [
    new winston.transports.Console({
      format: logFormat
    }),
  ],
});