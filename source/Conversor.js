
// Implement 
function Conversor() {

    return {
        convert: convert
    }

    function convert(decimal) {
        return Number((decimal >>> 0).toString(2));
    }
}

module.exports = Conversor();