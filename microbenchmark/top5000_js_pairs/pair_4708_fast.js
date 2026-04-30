const Benchmark = {
    run: function() {
        VAR_1 = [1, 2, [3, 4]].concat(new Array(1000));
        function FUNCTION_1(VAR_2) {
          VAR_2.forEach(function (VAR_7) {
            Array.isArray(VAR_7) ? FUNCTION_1(VAR_7) : VAR_7;
          });
        }
        function FUNCTION_2(VAR_5) {
          VAR_2.forEach(function internal(VAR_6) {
            Array.isArray(VAR_6) ? VAR_7.forEach(internal) : VAR_6;
          });
        }
        FUNCTION_1(VAR_1);
    }
};