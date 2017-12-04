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
                location: String,
                Slot: Array,
                Days: Array,
                Description: String
        });

        const plumberInfo = mongoose.model('plumberInfo', plumberSchema);

        return {
                plumberInfo
        }
}
