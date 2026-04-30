const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 == undefined) VAR_2 = 2;
          var VAR_4 = 1;
          for (var VAR_5 = 0; VAR_5 < VAR_2; VAR_5++) VAR_4 *= VAR_1;
          return VAR_4;
        }
        for (var VAR_3 = 0; VAR_3 <= 10000; VAR_3++) {
          FUNCTION_1(VAR_3, 2);
        }
    }
};