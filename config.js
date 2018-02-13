'use strict';
const Confidence = require('confidence');
const Dotenv = require('dotenv');


Dotenv.config({ silent: true });

const criteria = {
    env: process.env.NODE_ENV
};


const config = {
    $meta: "This file configures the plot device.",
    projectName: "LinemanCheck",
    port: {
        web: {
            $filter: "env",
            test: 9000,
            production: process.env.PORT,
            $default: 8000
        }
    },
    baseUrl: {
        $filter: "env",
        $meta: 'values should not end in "/"',
        production: "https://linemancheck.herokuapp.com",
        $default: "http://127.0.0.1:8000"
    },
    authAttempts: {
        forIp: 50,
        forIpAndUser: 7
    },
    cookieSecret: {
        $filter: "env",
        production: process.env.COOKIE_SECRET,
        $default: "!k3yb04rdK4tz~4qu4~k3yb04rdd0gz!"
    },
    hapiMongoModels: {
        mongodb: {
            uri: {
                $filter: "env",
                production: process.env.MONGODB_URI,
                test: "mongodb://127.0.0.1:27017/linemancheck-test",
                $default: "mongodb://127.0.0.1:27017/linemancheck"
            }
        },
        autoIndex: true
    },
    nodemailer: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "williamp.robertson@gmail.com",
            pass: process.env.SMTP_PASSWORD
        }
    },
    system: {
        fromAddress: {
            name: "LinemanCheck",
            address: "williamp.robertson@gmail.com"
        },
        toAddress: {
            name: "LinemanCheck",
            address: "williamp.robertson@gmail.com"
        }
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
