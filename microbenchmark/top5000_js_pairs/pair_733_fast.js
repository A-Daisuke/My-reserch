const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1.VAR_2 = 10000;
        function FUNCTION_1(VAR_3) {
          var VAR_6 = VAR_1.slice(),
            VAR_4 = VAR_1.VAR_2;
          for (var VAR_5 = 0; VAR_5 < VAR_6.VAR_2; VAR_5++) {
            VAR_1[VAR_7] = VAR_6[VAR_4 - VAR_5 - 1];
          }
          return VAR_1;
        }
        FUNCTION_1(VAR_1);
    }
};