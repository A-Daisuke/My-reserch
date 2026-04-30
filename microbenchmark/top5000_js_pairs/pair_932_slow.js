const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = new Array(VAR_2 + 1);
          return VAR_3.join(VAR_1);
        }
        var VAR_4 = FUNCTION_1("a", 100000);
    }
};