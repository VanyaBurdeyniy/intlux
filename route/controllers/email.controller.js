var helper = require('sendgrid').mail;


exports.send = function(req, res) {
    console.log(req);
    var from_email = new helper.Email(req.body.email);
    var to_email = new helper.Email('office@intluxenergy.com');
    var subject = req.body.name;
    var content = new helper.Content('text/plain', req.body.message + '\n\n' + req.body.city + ', ' + req.body.phone);
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')('xxxxxxx');
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });
};
