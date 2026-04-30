const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 20000; VAR_1++) {
          FUNCTION_1(VAR_1, 10);
        }
        function FUNCTION_1(VAR_2, VAR_3) {
          return (100000000000000000000 + "0" + VAR_2).substr(-VAR_3);
        }
    }
};