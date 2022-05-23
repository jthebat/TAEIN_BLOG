const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb+srv://test:sparta@cluster0.l2ux3.mongodb.net/taein_blog?retryWrites=true&w=majority", { ignoreUndefined: true }).catch((err) => {
        console.error(err);
})
};

module.exports = connect;