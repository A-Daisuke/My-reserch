const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return function () {
            Array.prototype.unshift.call(arguments, null);
            return VAR_1.bind.apply(VAR_1, arguments);
          };
        }
        function FUNCTION_2(VAR_2) {
          VAR_2++;
        }
        for (var VAR_3 = 0; VAR_3 < 20000; VAR_3++) {
          FUNCTION_1(FUNCTION_2)(10)();
        }
    }
};