const Benchmark = {
    run: function() {
        var VAR_1 = "html5";
        var FUNCTION_1 = function () {
          return VAR_1 === "html5" ? "Good choice!" : "Bad choice!";
        };
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          FUNCTION_1();
        }
    }
};