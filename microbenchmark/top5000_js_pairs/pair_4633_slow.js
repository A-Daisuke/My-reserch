const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2;
        }
        var VAR_3 = new Array(100).join("SOMETHING").split("");
        VAR_3.forEach(FUNCTION_1);
    }
};