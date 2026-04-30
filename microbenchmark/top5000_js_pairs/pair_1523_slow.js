const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return Math.random() + "";
        }
        var VAR_1 = "",
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) VAR_2.push(FUNCTION_1());
        VAR_1 = VAR_2.join("");
    }
};