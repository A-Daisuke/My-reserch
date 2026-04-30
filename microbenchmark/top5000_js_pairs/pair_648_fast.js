const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1() {
          var VAR_2 = { KEY_1: "neat" };
          VAR_2.KEY_1 += "sweet";
        }
        for (var VAR_3 = 0; VAR_3 != VAR_1; VAR_3++) {
          FUNCTION_1();
        }
    }
};