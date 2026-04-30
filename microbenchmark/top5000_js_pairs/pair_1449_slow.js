const Benchmark = {
    run: function() {
        FUNCTION_1 = function () {
          return Math.floor(this.valueOf() / 4);
        };
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          FUNCTION_1(VAR_1);
        }
    }
};