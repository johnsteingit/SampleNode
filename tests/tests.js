/**
 * Created by fritz on 3/22/14.
 */


var should = require('should');
var assert = require('assert');

describe('Test Framwork', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    })
    it('should have the library installed and running for fluent testing.', function () {
        true.should.eql(true);
    })

})