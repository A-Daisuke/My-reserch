const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_2 = Math.sqrt(5),
            VAR_3 = (1 + VAR_2) / 2,
            VAR_4 = (1 - VAR_2) / 2;
          return Math.ceil((Math.pow(VAR_3, VAR_1) - Math.pow(VAR_4, VAR_1)) / VAR_2);
        };
        FUNCTION_1(25);
    }
};