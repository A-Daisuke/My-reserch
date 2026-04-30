const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Array.prototype.slice.call(arguments, 1).reduce(function (VAR_2, VAR_3) {
            return VAR_3(VAR_2);
          }, VAR_1);
        }
        function FUNCTION_2(VAR_4) {
          return VAR_4 * 2;
        }
        function FUNCTION_3(VAR_5) {
          return VAR_5 * VAR_5;
        }
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          FUNCTION_1(5, FUNCTION_3, FUNCTION_2);
        }
    }
};