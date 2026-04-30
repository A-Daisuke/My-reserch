const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          return VAR_1;
        }
        var VAR_2 = 1000;
        var VAR_3 = VAR_2 * FUNCTION_1().length;
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_5 < VAR_2; VAR_5++) {
          VAR_4.push(FUNCTION_1());
        }
        var VAR_6 = VAR_4.join("");
    }
};