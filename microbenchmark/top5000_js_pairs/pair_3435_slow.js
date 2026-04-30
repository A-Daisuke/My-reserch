const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return new Array(VAR_1 + 1).join(this);
        };
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          "abcdefgh".FUNCTION_1(100);
        }
    }
};