const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return Array(VAR_1).fill(this).join("");
        };
        "james".FUNCTION_1(10000);
    }
};