const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        function FUNCTION_1() {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            VAR_2++;
          }
          return VAR_2;
        }
        FUNCTION_1();
    }
};