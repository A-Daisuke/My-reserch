const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijhiklmn";
        var FUNCTION_1 = function (VAR_2) {
          var VAR_4 = [];
          var FUNCTION_2 = function (VAR_8, VAR_9) {
            for (var VAR_10 = VAR_9; VAR_10 < VAR_2.length; VAR_10++) {
              VAR_4.push(VAR_8 + VAR_2[VAR_10]);
              FUNCTION_2(VAR_8 + VAR_2[VAR_10], VAR_10 + 1);
            }
          };
          FUNCTION_2("", 0);
          return VAR_4;
        };
        FUNCTION_1(VAR_1);
    }
};