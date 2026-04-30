const Benchmark = {
    run: function() {
        var VAR_1 = 54320;
        function FUNCTION_1(VAR_2) {
          var VAR_5 = Math.sqrt(5);
          var VAR_3 = 0;
          var VAR_4 = 0;
          VAR_3 = (1 / VAR_5) * Math.pow((1 + VAR_5) / 2, VAR_2);
          VAR_4 = (1 / VAR_5) * Math.pow((1 - VAR_5) / 2, VAR_2);
          return Math.round(VAR_3 - VAR_4);
        }
        FUNCTION_1(VAR_1);
    }
};