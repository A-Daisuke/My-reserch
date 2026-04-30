const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var FUNCTION_1 = function (VAR_2) {
          this.VAR_3 = VAR_2;
        };
        FUNCTION_1.prototype.FUNCTION_5 = function () {};
        FUNCTION_1.prototype.FUNCTION_6 = function () {};
        FUNCTION_1.prototype.FUNCTION_7 = function () {};
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          VAR_1.push(new FUNCTION_1());
        }
    }
};