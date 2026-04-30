const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return function () {
            VAR_1.apply(Array.prototype.slice.call(arguments));
          };
        }
        function FUNCTION_2(VAR_2, VAR_3, VAR_4, VAR_5, VAR_6, VAR_7) {
          return VAR_2 + VAR_3 + VAR_4 + VAR_5 + VAR_6 + VAR_7;
        }
        for (var VAR_8 = 0; VAR_8 < 1000; VAR_8++) FUNCTION_1(FUNCTION_2)(VAR_8, VAR_8, VAR_8, VAR_8, VAR_8, VAR_8);
    }
};