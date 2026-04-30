const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "000000000" + VAR_1;
          return VAR_3.substr(VAR_3.length - VAR_2);
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1(VAR_4, 4);
        }
    }
};