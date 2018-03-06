// import chai as our assertion library
import chai from 'chai';

//require jsdom-global and run
require('jsdom-global')()

// import our library
import VanillaMap from '../src/App.es6';

// initialize chai should
chai.should();

var expect = chai.expect;


// create mock html tag
document.body.innerHTML = "<div>Sample text in div</div>";


describe('VanillaMap', function () {

    describe('initialize object', function () {
        it('should be an object', function () {
            VanillaMap().should.be.an('object');
            // VanillaMap('div').selector.should.equal('<div>Sample text in div</div>');
            // VanillaMap('div').selector.should.be.an('object');
            // expect(VanillaMap('div').selector).to.be.an('object');
        });
    });

    describe("constructor", function () {
        it("should have a default id", function () {
            var map = new VanillaMap();
            expect(map.id).to.equal("map");
        });

        it("should set map's id if provided", function () {
            var map = new VanillaMap("the-map");
            expect(map.id).to.equal("the-map");
        });
    });


});
