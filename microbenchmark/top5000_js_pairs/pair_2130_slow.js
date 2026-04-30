const Benchmark = {
    run: function() {
        var VAR_1 = ["First 2k squares: "];
        function FUNCTION_1(VAR_2, VAR_3) {
          VAR_1.push(VAR_2, "=", VAR_2 * VAR_2);
        }
        for (var VAR_4 = 0; VAR_4 < 2000; VAR_4++) {
          FUNCTION_1(VAR_4, VAR_1);
        }
        var VAR_5 = VAR_1.join(" ");
    }
};