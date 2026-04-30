const Benchmark = {
    run: function() {
        var FUNCTION_4 = function (VAR_6, VAR_7) {
          return (function (VAR_8) {
            VAR_8.VAR_9 = VAR_6;
            VAR_8.VAR_10 = VAR_7;
          })(Object.create(null));
        };
        FUNCTION_4("Joe", 23);
        FUNCTION_4("Amy", 16);
        FUNCTION_4("Cory", 64);
    }
};