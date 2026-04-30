const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var VAR_1 = true;
          var VAR_2 = false;
          var VAR_3 = false;
          this.FUNCTION_2 = function () {
            return VAR_1;
          };
          this.FUNCTION_3 = function () {
            return VAR_2;
          };
          this.FUNCTION_4 = function (VAR_4) {
            if (!VAR_1) {
              if (VAR_2) {
                return VAR_4.FUNCTION_3();
              }
              return !VAR_4.FUNCTION_3();
            }
            return VAR_4.FUNCTION_2();
          };
        };
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 9; VAR_6++) VAR_5.push(new FUNCTION_1());
    }
};