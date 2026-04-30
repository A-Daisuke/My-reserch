const Benchmark = {
    run: function() {
        var VAR_1 = parseInt(Math.random() * 4294967295, 10);
        function FUNCTION_1(VAR_2) {
          return eval(VAR_2.toString(2).split("").join("+"));
        }
        FUNCTION_1(VAR_1);
    }
};