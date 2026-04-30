const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = "test";
          this.VAR_2 = 20;
        };
        var VAR_3 = 1000;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          FUNCTION_1.prototype["setAge" + VAR_4] = function () {};
        }
    }
};