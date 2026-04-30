const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({
            KEY_1: 1,
            KEY_2: 2,
            KEY_3: 3,
          });
        }
        function FUNCTION_1(VAR_3) {
          delete VAR_3.KEY_2;
          return VAR_3;
        }
        VAR_1.map(FUNCTION_1);
    }
};