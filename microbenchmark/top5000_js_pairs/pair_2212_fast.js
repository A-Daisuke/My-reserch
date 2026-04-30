const Benchmark = {
    run: function() {
        var VAR_1 = "<!--" + Array(10001).join("X") + "-->";
        var VAR_2 = "<!--XXXXX-->";
        var FUNCTION_1 = function (VAR_3) {
          return VAR_3.replace(/^<--/, "").replace(/-->$/, "");
        };
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1(VAR_2);
        }
    }
};