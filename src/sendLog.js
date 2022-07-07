import { notify } from '@ilb/mailer/src/errormailer.js';

const sendLog = async (req, res) => {
  const { wild, ...logs } = req.body;
  const error = Object.values(logs)[0];

  notify({
    message:
      'Client error:\n' +
      JSON.stringify(
        {
          datetime: new Date(error.ts),
          messages: error.messages
        },
        null,
        2
      ),
    stack: ''
  }).catch(console.log);

  res.end();
};

export default sendLog;
