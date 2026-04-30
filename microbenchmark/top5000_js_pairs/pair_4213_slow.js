const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 1;
          this.VAR_2 = 1;
        };
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return [this.VAR_1, this.VAR_2];
        };
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          return this.VAR_1;
        };
        FUNCTION_1.prototype.FUNCTION_4 = function () {
          return this.VAR_2;
        };
        var VAR_3 = new FUNCTION_1();
        var VAR_4 = 0,
          VAR_5 = 0,
          VAR_6;
        for (var VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
          VAR_6 = VAR_3.FUNCTION_2();
          VAR_4 += VAR_6[0];
          VAR_5 += VAR_6[1];
        }
    }
};