const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 < 0) {
            throw new Error();
          }
          var VAR_3 = "";
          while (VAR_2--) {
            VAR_3 += VAR_1;
          }
          return VAR_3;
        }
        var VAR_4;
        var VAR_5;
        for (VAR_5 = 0; VAR_5 < 100; VAR_5++) {
          VAR_4 = FUNCTION_1("abcdefg", VAR_5);
        }
    }
};