const Benchmark = {
    run: function() {
        var VAR_1 = [3, 8, 20, 14, 12, 13, 17, 7, 6, 16, 2, 15, 4, 19, 9, 10, 5, 1, 11];
        function FUNCTION_1(VAR_2) {
          var VAR_7 = VAR_1.length + 1;
          var VAR_8 = (VAR_7 * (VAR_7 + 1)) / 2;
          for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
            VAR_8 -= VAR_1[VAR_5];
          }
          return VAR_8;
        }
        FUNCTION_1(VAR_1);
    }
};