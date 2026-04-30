const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_2, VAR_1) {
          return "random text " + VAR_2 + " some more text " + VAR_1;
        }
        for (var VAR_5 = 0; VAR_5 < 100; VAR_5++) {
          FUNCTION_1("FIRST", "SECOND");
        }
    }
};