var Hapi = require('hapi');
var Path = require('path');
var Good = require('good');

var server = new Hapi.Server();

server.connection({ port: 3000 });

server.views({
    engines: {
        html: require('handlebars')
    },
    layout: true,
    relativeTo: __dirname,
    path: './../templates',
    layoutPath: './../templates/layout',
    helpersPath: './../templates/helpers'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index');
    }
});

server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: Path.join(__dirname, './../../public/'),
        }
    }
});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});