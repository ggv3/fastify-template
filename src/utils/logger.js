import winston, { format } from 'winston'

export default winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(
        format.colorize({
          colors: {
            error: 'red',
            warn: 'yellow',
            info: 'cyan',
            debug: 'green',
          },
        }),
        format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss Z' }),
        format.label({ label: 'user-service' }),
        format.align(),
        format.printf(
          (info) =>
            `${info.level}: ${[info.timestamp]}: ${info.label}: ${info.message}`
        )
      ),
    }),
  ],
})
