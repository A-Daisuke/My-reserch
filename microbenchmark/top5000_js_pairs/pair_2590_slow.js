const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1.KEY_1 + VAR_1.KEY_2 + VAR_1.KEY_3;
        }
        function FUNCTION_2(VAR_2) {
          return VAR_2[0] + VAR_2[1] + VAR_2[2];
        }
        var VAR_3 = {
          KEY_1: 0,
          KEY_2: 0,
          KEY_3: 0,
        };
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          var VAR_5 = Object.create(VAR_3);
          VAR_5.KEY_1 = VAR_4;
          VAR_5.KEY_2 = VAR_4;
          VAR_5.KEY_3 = VAR_4;
          FUNCTION_2(VAR_5);
        }
    }
};