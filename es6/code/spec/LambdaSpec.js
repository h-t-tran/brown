describe("Lambda", function() {

  it("should invoke callback", function() {
    function invokeCallback(cb) {
      cb(2);
    }

    let callbackVal = -1;
    invokeCallback( (val) => {
        callbackVal = val;
    });

    expect(callbackVal).toBe(2);
  });

});
