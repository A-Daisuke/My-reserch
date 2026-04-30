const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          var FUNCTION_2 = function (VAR_4) {
            for (var VAR_5 = 0; VAR_5 < VAR_4.length; VAR_5++) {
              if (Array.isArray(VAR_4[VAR_5])) {
                FUNCTION_2(VAR_4[VAR_5]);
              } else {
                VAR_2.push(VAR_4[VAR_5]);
              }
            }
          };
          return VAR_2;
        }
        FUNCTION_1([{ KEY_1: "a" }, "b", ["c", "d"], ["e", ["f"]], "g"]);
    }
};