const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          var VAR_2 = 1000,
            VAR_3 = [];
          while (VAR_2) {
            VAR_3.push(VAR_2);
            VAR_2--;
          }
          return VAR_3;
        })();
        function FUNCTION_1(VAR_4, VAR_5, VAR_6, VAR_7) {
          return VAR_4 + VAR_5;
        }
        function FUNCTION_2(VAR_12, VAR_13) {
          return VAR_12 + VAR_13;
        }
        var VAR_14 = 0,
          VAR_15,
          VAR_16 = VAR_1.length;
        for (VAR_2 = 0; VAR_2 < VAR_16; VAR_2++) {
          VAR_14 = FUNCTION_2(VAR_14, VAR_1[VAR_2]);
        }
    }
};