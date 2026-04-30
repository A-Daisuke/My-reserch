const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 20000; VAR_1++) {
          FUNCTION_1(VAR_1, 10);
        }
        function FUNCTION_1(VAR_2, VAR_3) {
          var VAR_4 = String(VAR_2);
          while (VAR_2.length < VAR_3) VAR_2 = "0" + VAR_2;
          return VAR_2;
        }
    }
};