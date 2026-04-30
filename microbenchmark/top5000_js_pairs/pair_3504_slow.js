const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          return VAR_1.split(VAR_2).join(VAR_3);
        }
        var VAR_4 = new Array(1000).join("test \\n");
        FUNCTION_1(VAR_4, "\\n", "\n");
    }
};