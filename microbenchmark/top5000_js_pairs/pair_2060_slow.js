const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return new Array(VAR_1 + 1).join(this);
        };
        var VAR_2 = "longstring".FUNCTION_1(10000);
        VAR_2.match(/.{1,1000}/g);
    }
};