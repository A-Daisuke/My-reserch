const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1(VAR_2) {
          try {
            VAR_1 = VAR_2;
          } catch (VAR_4) {}
        }
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          FUNCTION_1(VAR_3);
        }
    }
};