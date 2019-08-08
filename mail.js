var nodemailer = require('nodemailer');

// var data = {
//     first_name: 'Oleksiy',
//     email: 'musiyezdov@gmail.com'
// };


function mail(data) {

    console.log(data);

    var transporter = nodemailer.createTransport({
        //service: 'lanaluchiksportlab.space',

        host: 'smtp.lanaluchiksportlab.space',
        port: 587,
        auth: {
            user: '******',
            pass: '******'
        }
    });

    var mailOptions = {
        from: 'admin@lanaluchiksportlab.space',
        to: data.email,
        subject: 'Authorisation on lanaluchiksportlab.space',
        text: 'Hello, ' + data.name + '!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        console.log(mailOptions);
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 

} 

module.exports = { mail: mail }