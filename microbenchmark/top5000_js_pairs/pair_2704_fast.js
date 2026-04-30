const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = [];
          this.VAR_2 = 0;
        };
        FUNCTION_1.prototype.FUNCTION_2 = function (VAR_3) {
          this.VAR_1[this.VAR_2++] = VAR_3;
          return this;
        };
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          return this.VAR_1.join("");
        };
        var VAR_6 = [];
        var VAR_7 = 0;
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          VAR_6[VAR_7++] = "Test123";
          VAR_6[VAR_7++] = "Test";
        }
        VAR_6.join("");
    }
};