const Benchmark = {
    run: function() {
        var VAR_1 =
          "(variables, functions, arrays or other objects that will be used in the tests) (runs before each clocked test loop, outside of the timed code region) (e.g. define local test variables, reset global variables, clear canvas, etc.)";
        var VAR_5 = new RegExp(" ", "g");
        var VAR_6 = VAR_1.replace(VAR_5, "");
    }
};