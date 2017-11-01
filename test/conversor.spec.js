const expect = require("chai").expect;
const conversor = require("../source/conversor");

describe("Decimal conversor", function() {

    it("should convert correctly", function () {
        expect(conversor.convert(19)).to.be.equal(10011);
        expect(conversor.convert(27)).to.be.equal(11011);
        expect(conversor.convert(32)).to.be.equal(100000);
    });

});