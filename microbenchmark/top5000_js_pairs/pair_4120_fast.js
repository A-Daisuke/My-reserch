const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return {
            KEY_1: function () {
              return VAR_1;
            },
          };
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          VAR_3.push(FUNCTION_1(VAR_4));
          VAR_3[VAR_4].KEY_1();
        }
    }
};