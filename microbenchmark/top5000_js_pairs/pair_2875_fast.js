const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1(VAR_4) {
          var VAR_5 = VAR_4;
        }
        for (var VAR_2 = 0; VAR_2 < VAR_1; VAR_2++) {
          FUNCTION_1(VAR_2);
        }
    }
};