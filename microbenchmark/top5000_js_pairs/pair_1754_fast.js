const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          VAR_1;
        }
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        function FUNCTION_2(VAR_4) {
          for (var VAR_6 = 0; VAR_3 < VAR_4.length; VAR_3++) {
            var VAR_7 = VAR_4[VAR_3];
            FUNCTION_1(VAR_7);
          }
        }
        FUNCTION_1(FUNCTION_2(VAR_2));
    }
};