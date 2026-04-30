const Benchmark = {
    run: function() {
        var FUNCTION_2 = function (VAR_9) {
          return VAR_9 + 1;
        };
        var VAR_10 = (function () {
          return { KEY_4: FUNCTION_2 };
        })();
        var VAR_3 = (function () {
          return {
            KEY_1: 0,
            KEY_2: function (VAR_4) {
              this.KEY_1++;
            },
          };
        })();
        var VAR_5 = (function () {
          var VAR_6 = 0;
          return {
            KEY_3: function (VAR_7) {
              VAR_9++;
            },
          };
        })();
        var VAR_2 = 0;
        for (var VAR_8 = 0; VAR_8 < 100000; ++VAR_8) {
          VAR_2 = VAR_10.KEY_4(VAR_2);
        }
    }
};