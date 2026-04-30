const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          return Math.random() + this.FUNCTION_2();
        };
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return Math.random() + this.FUNCTION_3();
        };
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          return Math.random();
        };
        for (var VAR_1 = 0; VAR_1 < 100; VAR_1++) {
          new FUNCTION_1();
        }
    }
};