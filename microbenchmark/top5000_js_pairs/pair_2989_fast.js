const Benchmark = {
    run: function() {
        var VAR_1 = "";
        function FUNCTION_1(VAR_3, VAR_4) {
          VAR_1 += "" + VAR_4;
        }
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2 += 1) {
          FUNCTION_1(VAR_1, VAR_2);
        }
    }
};