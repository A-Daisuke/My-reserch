const Benchmark = {
    run: function() {
        var VAR_1 = "asdf";
        var VAR_2 = 1000;
        function FUNCTION_1(VAR_3, VAR_4) {
          return new Array(VAR_4 + 1).join(VAR_3 + " ");
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};