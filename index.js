    'use strict';
    var Alexa = require('alexa-sdk');

    var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
    var SKILL_NAME = 'Space Facts';

    /**
     * Array containing space facts.
     */
    var SONG = [
        `Fly me to the moon, and let me play among the stars.
        Let me see what spring is like on. Jupiter and Mars.
        In other words,
        Hold my hand.
        In other words darling, kiss me.
        Fill my heart with song,
        And let me sing forever more.
        You are all I long for, 
        All I worship and adore.
        In other words,
        Please be true.
        In other words,
        I love you`
    ];

    exports.handler = function(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.APP_ID = APP_ID;
        alexa.registerHandlers(handlers);
        alexa.execute();
    };

    var handlers = {
        'LaunchRequest': function () {
            this.emit('SingSong');
        },
        'GetNewFactIntent': function () {
            this.emit('SingSong');
        },
        'SingSong': function () {
            // Create speech output
            var speechOutput = SONG[0];

            this.emit(':tellWithCard', speechOutput, SKILL_NAME)
        },
        'AMAZON.HelpIntent': function () {
            var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
            var reprompt = "What can I help you with?";
            this.emit(':ask', speechOutput, reprompt);
        },
        'AMAZON.CancelIntent': function () {
            this.emit(':tell', 'Goodbye!');
        },
        'AMAZON.StopIntent': function () {
            this.emit(':tell', 'Goodbye!');
        }
    };