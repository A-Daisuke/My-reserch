const Benchmark = {
    run: function() {
        var VAR_1 =
          "(variables, functions, arrays or other objects that will be used in the tests) (runs before each clocked test loop, outside of the timed code region) (e.g. define local test variables, reset global variables, clear canvas, etc.)";
        var VAR_2 = "";
        for (var VAR_3 in VAR_1) {
          VAR_4 = VAR_1[VAR_3];
          if (VAR_4 === " ") {
            VAR_2 += VAR_4;
          }
        }
    }
};