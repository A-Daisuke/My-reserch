const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return new Array(1 + VAR_1).join(this);
        };
        "james".FUNCTION_1(10000);
    }
};