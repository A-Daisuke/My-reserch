const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var FUNCTION_2 = function () {
            this.VAR_1 = 0;
          };
          FUNCTION_2.prototype.FUNCTION_3 = function () {
            this.VAR_1 = Math.random();
          };
          return new FUNCTION_2();
        };
        for (var VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
          new FUNCTION_1().FUNCTION_3();
        }
    }
};