const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1.replace(VAR_2, "");
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          return VAR_1.substring(VAR_2.length);
        }
        function FUNCTION_3() {
          var VAR_5 = [],
            VAR_6 = new Array(50000);
          VAR_5.concat.apply(VAR_5, VAR_6);
        }
        FUNCTION_3();
    }
};