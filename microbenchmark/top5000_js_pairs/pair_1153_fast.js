const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_8, VAR_9) {
          return VAR_8.replace(VAR_9, "");
        }
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_8.substring(VAR_9.length);
        }
        function FUNCTION_3() {
          var VAR_6 = [],
            VAR_7 = new Array(50000);
          VAR_6.concat.apply(VAR_6, VAR_7);
        }
        FUNCTION_2("1.6.2.3.5.45.6456.4562.25.3", "1.6.2");
    }
};