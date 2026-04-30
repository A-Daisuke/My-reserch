const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 10 };
        function FUNCTION_1(VAR_2, VAR_3) {
          return (VAR_1[VAR_4] = VAR_3);
        }
        var VAR_5 = { KEY_2: 11 };
        function FUNCTION_2(VAR_6, VAR_7) {
          return VAR_5[VAR_2];
        }
        function FUNCTION_3(VAR_8, VAR_9, VAR_10) {
          return (VAR_5[VAR_11] = VAR_10);
        }
        var VAR_12 = new Proxy(VAR_5, {
          KEY_3: FUNCTION_2,
          KEY_4: FUNCTION_3,
        });
        var VAR_13;
        for (var VAR_14 = 0; VAR_14 < 10000; VAR_14++) {
          VAR_13 = VAR_12["a"];
        }
    }
};