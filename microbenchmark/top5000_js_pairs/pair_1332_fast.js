const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 10 };
        function FUNCTION_4(VAR_15) {
          return VAR_1[VAR_15];
        }
        function FUNCTION_1(VAR_2, VAR_3) {
          return (VAR_1[VAR_4] = VAR_3);
        }
        var VAR_13;
        for (var VAR_14 = 0; VAR_14 < 10000; VAR_14++) {
          VAR_13 = FUNCTION_4("a");
        }
    }
};