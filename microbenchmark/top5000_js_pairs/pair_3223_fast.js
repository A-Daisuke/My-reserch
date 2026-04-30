const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return new Array(VAR_1 + 1).join(this);
        };
        "123".FUNCTION_1(1000);
    }
};