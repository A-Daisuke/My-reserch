const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2,
          VAR_3,
          VAR_4;
        for (VAR_2 = 0; VAR_2 < 300; VAR_2++) {
          VAR_4 = [];
          for (VAR_3 = 0; VAR_3 < VAR_2 % 17; VAR_3++) VAR_4.push(VAR_3);
          VAR_1.push(VAR_4);
        }
        function FUNCTION_1(VAR_5, VAR_6) {
          return VAR_5 + VAR_4;
        }
        function FUNCTION_2(VAR_7) {
          return function (VAR_8) {
            return VAR_8[VAR_7];
          };
        }
        var VAR_9 = VAR_1.map(FUNCTION_2("length")).reduce(FUNCTION_1);
    }
};