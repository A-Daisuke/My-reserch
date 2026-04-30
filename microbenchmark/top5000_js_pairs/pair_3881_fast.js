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
        function FUNCTION_2(VAR_10, VAR_11) {
          return VAR_10 + VAR_11;
        }
        var VAR_12 = 0,
          VAR_13,
          VAR_14 = VAR_1.length;
        for (VAR_2 = 0; VAR_2 < VAR_14; VAR_2++) {
          VAR_12 = FUNCTION_2(VAR_12, VAR_1[VAR_2]);
        }
    }
};