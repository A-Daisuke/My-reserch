const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return Array(VAR_1 + 1).join(this);
        };
        "abc".FUNCTION_1(100);
    }
};