const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = (1 + Math.sqrt(5)) / 2;
          var VAR_3 = Math.pow(VAR_2, VAR_1) - Math.pow(-VAR_2, -VAR_1);
          return Math.floor(VAR_3 / Math.sqrt(5));
        }
        FUNCTION_1(20);
    }
};