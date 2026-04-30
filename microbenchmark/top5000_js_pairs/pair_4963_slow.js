const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          VAR_1.forEach(function (VAR_3) {
            VAR_2 = VAR_2.concat((Array.isArray(VAR_3) && FUNCTION_1(VAR_3)) || VAR_3);
          });
          return VAR_2;
        }
        FUNCTION_1([{ KEY_1: "a" }, "b", ["c", "d"], ["e", ["f"]], "g"]);
    }
};