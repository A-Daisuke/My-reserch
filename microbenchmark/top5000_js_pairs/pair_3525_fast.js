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
        VAR_3.split(VAR_4).length - 1;
    }
};