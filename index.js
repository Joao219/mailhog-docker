const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAILHOG_HOST,
    port: '1025',
    auth: null
});

transport.sendMail({
    from: 'João victor <santosjoao133@gmail.com>',
    to: 'em mesmo <santosjoao133@gmail.com>',
    subject: 'Testando mailhog',
    html: '<h1>Funcionou</h1>'
});