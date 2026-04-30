const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 10 };
        function FUNCTION_4(VAR_14) {
          return VAR_1[VAR_14];
        }
        function FUNCTION_1(VAR_2, VAR_3) {
          return (VAR_1[VAR_4] = VAR_3);
        }
        var VAR_15;
        for (var VAR_13 = 0; VAR_13 < 10000; VAR_13++) {
          VAR_15 = FUNCTION_4("a");
        }
    }
};