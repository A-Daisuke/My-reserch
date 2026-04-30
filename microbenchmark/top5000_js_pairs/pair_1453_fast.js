const Benchmark = {
    run: function() {
        var VAR_7 = "3456784533";
        var VAR_8 = "34567845332";
        function FUNCTION_1(VAR_3, VAR_4) {
          return VAR_7.indexOf(VAR_8) == 0;
        }
        for (var VAR_6 = 0; VAR_6 < 100000; ++VAR_6) {
          FUNCTION_1(VAR_7, VAR_8);
        }
    }
};