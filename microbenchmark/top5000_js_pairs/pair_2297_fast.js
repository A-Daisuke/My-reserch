const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = "test";
          this.VAR_2 = 20;
        };
        var VAR_3 = 1000;
        var VAR_5 = {};
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          VAR_5["setAge" + VAR_4] = function () {};
        }
        FUNCTION_1.VAR_6 = VAR_5;
        FUNCTION_1.VAR_6.VAR_7 = FUNCTION_1;
    }
};