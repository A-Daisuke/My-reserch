const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = [0, 10, 100, 1000, 10000, 10000];
          return (VAR_1 / VAR_3[VAR_2] + "").slice(-VAR_2);
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1(VAR_4, 4);
        }
    }
};