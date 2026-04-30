const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_8 = Object();
          VAR_8.VAR_9 = 11;
          VAR_8.VAR_10 = 22;
          VAR_8.VAR_11 = 33;
          VAR_8.VAR_12 = "first";
          VAR_8.VAR_13 = "second";
          VAR_8.VAR_14 = false;
          return VAR_8;
        }
        VAR_7 = FUNCTION_1();
    }
};