const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
        mongoose.connect(mongoUrl, {
                useMongoclient: true
        });
        const plumberSchema = mongoose.Schema({
                Name: String,
                Password: {
                        type: String,
                        bcrypt: true
                },
                Contact: String,
                Slot: Object
        });

        const plumberInfo = mongoose.model('plumberInfo', plumberSchema);

        return {
                plumberInfo
        }
}
