# Client logger
Отправка ошибок клиента на почту

## Install
```
npm i @ssortia/clientlogger
```

## Usage

### Env
- SERVER_ADMIN - mail where the letter will be sent
- MAIL_URL - smpt url
- LOG_PATH - url to which the error will be sent ('/service/log' by default)

### Client
```
import { logger } from '@ilb/clientlogger';

window.onerror = (msg, url, line) => {
  logger.error({ msg, url, line, link: location.href });
}
```

### Server
```
import nc from 'next-connect';
import sendLog from "@ilb/clientlogger/src/sendLog";

export default nc().post(sendLog);

```
