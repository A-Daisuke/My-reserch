const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        };
        var FUNCTION_2 = function (VAR_5, VAR_6) {
          return {
            KEY_1: VAR_1,
            KEY_2: VAR_2,
          };
        };
        var FUNCTION_3 = function (VAR_7, VAR_8) {
          return function (VAR_9) {
            return VAR_9(VAR_1, VAR_2);
          };
        };
        var VAR_10 = null;
        var VAR_11 = null;
        var VAR_12 = null;
        var VAR_13 = [];
        var VAR_14 = 10000;
        for (var VAR_15 = 0; VAR_15 < VAR_14; VAR_15++) {
          VAR_10 = new FUNCTION_1(VAR_15, VAR_10);
        }
    }
};