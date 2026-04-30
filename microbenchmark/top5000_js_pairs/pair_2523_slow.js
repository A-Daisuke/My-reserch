const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          return VAR_1 + VAR_2 + VAR_3;
        }
        function FUNCTION_2(VAR_4) {
          return VAR_4[0] + VAR_4[1] + VAR_4[2];
        }
        var VAR_5 = {
          KEY_1: 0,
          KEY_2: 0,
          KEY_3: 0,
        };
        for (var VAR_6 = 0; VAR_6 < 1000; VAR_6++) {
          var VAR_7 = Object.create(VAR_5);
          VAR_7.KEY_1 = VAR_6;
          VAR_7.KEY_2 = VAR_6;
          VAR_7.KEY_3 = VAR_6;
          FUNCTION_2(VAR_7);
        }
    }
};