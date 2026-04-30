const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return String.fromCharCode(
            Math.floor(VAR_1 + VAR_2 * Math.random()),
          );
        }
        var VAR_3 = "";
        var VAR_4 = FUNCTION_1();
        var VAR_5 = 1000,
          VAR_1 = 32,
          VAR_2 = 132;
        while (VAR_5--) {
          VAR_3 += FUNCTION_1();
        }
        var VAR_9 = VAR_4,
          VAR_6 = VAR_3;
        for (
          var VAR_10 = -1, VAR_11 = 0;
          VAR_11 != -1;
          VAR_10++, VAR_11 = VAR_6.indexOf(VAR_9, VAR_11 + 1)
        );
    }
};