const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 < 0) {
            throw new Error();
          }
          return new Array(VAR_2 + 1).join(VAR_1);
        }
        var VAR_3;
        var VAR_4;
        for (VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          VAR_3 = FUNCTION_1("abcdefg", VAR_4);
        }
    }
};