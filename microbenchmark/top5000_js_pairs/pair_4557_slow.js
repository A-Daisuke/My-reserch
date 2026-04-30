const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          if (typeof VAR_1 !== "number") {
            throw "Not a number";
          }
          var VAR_2 = [0, 1];
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2.push(VAR_2.shift() + VAR_2[0]);
          }
          return VAR_2[0];
        };
        FUNCTION_1(500);
    }
};