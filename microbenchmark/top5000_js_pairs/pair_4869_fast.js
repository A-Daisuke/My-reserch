const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = 1;
          this.FUNCTION_2 = function (VAR_2) {
            return VAR_2 + 1;
          };
        }
        var VAR_3 = 1000,
          VAR_4 = [];
        while (VAR_3--) {
          var VAR_5 = FUNCTION_1();
        }
    }
};