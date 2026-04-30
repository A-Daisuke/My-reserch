const Benchmark = {
    run: function() {
        VAR_1 = [1, 2, [3, 4]].concat(new Array(1000));
        function FUNCTION_1(VAR_2) {
          for (var VAR_3 = 0, VAR_4 = VAR_2.length; VAR_3 < VAR_4; VAR_3++) {
            Array.isArray(VAR_2[VAR_3]) ? FUNCTION_1(VAR_2[VAR_3]) : VAR_2[VAR_3];
          }
        }
        function FUNCTION_2(VAR_5) {
          VAR_2.forEach(function internal(VAR_6) {
            Array.isArray(VAR_6) ? VAR_6.forEach(internal) : VAR_6;
          });
        }
        FUNCTION_1(VAR_1);
    }
};