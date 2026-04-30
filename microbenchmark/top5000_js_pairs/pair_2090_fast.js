const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4 += 1) {
            VAR_3.push(Array.isArray(VAR_1) ? VAR_1.slice() : VAR_1);
          }
          return VAR_3;
        };
        FUNCTION_1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 10);
    }
};