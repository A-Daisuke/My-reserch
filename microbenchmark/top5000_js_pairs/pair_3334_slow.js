const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = [];
        };
        FUNCTION_1.prototype.VAR_2 = 4;
        FUNCTION_1.prototype.VAR_3 = true;
        FUNCTION_1.prototype.VAR_4 = "blah";
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          FUNCTION_1.call();
        }
    }
};