const Benchmark = {
    run: function() {
        var VAR_1 = "00000";
        function FUNCTION_1(VAR_2) {
          return (VAR_1 + VAR_2).slice(VAR_2.length);
        }
        for (var VAR_3 = 0; VAR_3 < 9999; VAR_3++) {
          FUNCTION_1(VAR_3);
        }
    }
};