const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.FUNCTION_2 = function () {};
          this.FUNCTION_3 = function () {};
          this.FUNCTION_4 = function () {};
        };
        FUNCTION_5 = function () {};
        FUNCTION_5.prototype.FUNCTION_6 = function () {};
        FUNCTION_5.prototype.FUNCTION_7 = function () {};
        FUNCTION_5.prototype.FUNCTION_8 = function () {};
        var VAR_1 = 0;
        while (VAR_1 < 10000) {
          VAR_1++;
          new FUNCTION_1();
        }
    }
};