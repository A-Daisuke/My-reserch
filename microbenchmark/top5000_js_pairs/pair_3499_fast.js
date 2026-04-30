const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.FUNCTION_2 = function (VAR_1, VAR_2) {
            return VAR_1 + VAR_2;
          };
        };
        var FUNCTION_3 = function () {};
        FUNCTION_3.prototype.FUNCTION_4 = function (VAR_3, VAR_4) {
          return VAR_1 + VAR_2;
        };
        var VAR_7 = new FUNCTION_1();
        var VAR_5 = new FUNCTION_3();
        for (var VAR_6 = 0; VAR_6 < 1000; VAR_6++) {
          var VAR_8 = VAR_7.FUNCTION_2(5, 5);
        }
    }
};