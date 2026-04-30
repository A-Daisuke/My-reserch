const Benchmark = {
    run: function() {
        var VAR_1 = 50000,
          VAR_2 = "a";
        function FUNCTION_1(VAR_3, VAR_4) {
          return new Array(VAR_1 + 1).join(VAR_2);
        }
        function FUNCTION_2(VAR_5, VAR_6) {
          while (VAR_2.length < VAR_1) VAR_2 += VAR_2;
          return VAR_2.slice(0, VAR_1);
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};