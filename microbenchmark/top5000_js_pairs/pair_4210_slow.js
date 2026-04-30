const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        var FUNCTION_1 = function () {
          var VAR_3 = "Adam";
          this.FUNCTION_2 = function () {
            return VAR_3;
          };
        };
        for (VAR_2 = 0; VAR_2 < 400; VAR_2++) {
          VAR_1.push(new FUNCTION_1());
        }
    }
};