var chai = require('chai');
var fs = require('fs');
var should = chai.should();

describe('bookshelf-work-flow', function() {
  before(function() {
    fs.writeFileSync('test/file0.js', '[FILE_0_CONTENTS]');
    fs.writeFileSync('test/file1.js', '[FILE_1_CONTENTS]');
  });

  after(function() {
    fs.unlinkSync('test/file0.js');
    fs.unlinkSync('test/file1.js');
  });

  describe('images', function() {
    it('should exist in dist folder', function() {
      should.exist('test/file.js');
      // var stream = uglify();
      // stream.write(new File({ contents: null }));
      // stream.end();
    });
  });
});
