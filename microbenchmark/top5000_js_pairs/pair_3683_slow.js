const Benchmark = {
    run: function() {
        var VAR_1 = [3, 8, 20, 14, 12, 13, 17, 7, 6, 16, 2, 15, 4, 19, 9, 10, 5, 1, 11];
        function FUNCTION_1(VAR_2) {
          VAR_1.sort(function (VAR_3, VAR_4) {
            return VAR_1 - VAR_4;
          });
          for (var VAR_5 = 0; VAR_5 < VAR_1.length - 1; VAR_5++) {
            if (VAR_1[VAR_5 + 1] != VAR_1[VAR_5] + 1) {
              VAR_6 = VAR_1[VAR_5] + 1;
            }
          }
          return VAR_6;
        }
        FUNCTION_1(VAR_1);
    }
};