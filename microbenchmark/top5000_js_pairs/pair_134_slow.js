const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return function () {
            Array.prototype.unshift.call(arguments, null);
            return VAR_1.bind.apply(VAR_1, arguments);
          };
        }
        for (var VAR_2 = 0; VAR_2 < 20000; VAR_2++) {
          FUNCTION_1(function (VAR_3) {
            VAR_3++;
          })(10)();
        }
    }
};