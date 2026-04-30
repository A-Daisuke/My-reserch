const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          VAR_1 = VAR_1.toString();
          var VAR_3 = VAR_2 - VAR_1.length + 1;
          return new Array(1 + VAR_3).join("0") + VAR_1;
        }
        for (var VAR_4 = 1; VAR_4 < 100000; VAR_4++) {
          var VAR_5 = 10;
          FUNCTION_1(VAR_4, VAR_5);
        }
    }
};