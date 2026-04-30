const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_2() {
          var VAR_4;
          VAR_4 = VAR_1.slice(-1)[0];
          return VAR_4;
        }
        function FUNCTION_1() {
          var VAR_3;
          VAR_3 = VAR_1[VAR_1.length - 1];
          return VAR_3;
        }
        var VAR_8 = FUNCTION_2(VAR_1);
    }
};