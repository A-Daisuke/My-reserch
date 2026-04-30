const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return Array.apply(null, new Array(VAR_1))
            .map(String.prototype.valueOf, this)
            .join("");
        };
        "123".FUNCTION_1(1000);
    }
};