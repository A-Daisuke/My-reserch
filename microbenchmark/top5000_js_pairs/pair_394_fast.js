const Benchmark = {
    run: function() {
        var FUNCTION_2 = function () {
          this.VAR_1 = 0;
        };
        FUNCTION_2.prototype.FUNCTION_3 = function () {
          this.VAR_1 = Math.random();
        };
        for (var VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
          new FUNCTION_2().FUNCTION_3();
        }
    }
};