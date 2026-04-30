const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
            var VAR_1, VAR_2;
            this.FUNCTION_2 = function (VAR_3, VAR_4) {
              VAR_1 = VAR_3;
              VAR_2 = VAR_4;
            };
            this.FUNCTION_3 = function () {
              VAR_1.call(VAR_2);
            };
          },
          VAR_5 = new FUNCTION_1();
        var FUNCTION_4 = function () {
          this.FUNCTION_5 = function () {
            var VAR_6 = 1;
          };
        };
        for (var VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
          var VAR_8 = new FUNCTION_4();
          VAR_5.FUNCTION_2(VAR_8.FUNCTION_5, VAR_8);
          VAR_5.FUNCTION_3();
        }
    }
};