const Benchmark = {
    run: function() {
        var FUNCTION_4 = function () {
          return (function (VAR_6) {
            VAR_6.VAR_7 = 5;
            VAR_6.VAR_8 = "7";
            VAR_6.VAR_9 = VAR_6.VAR_7 + +VAR_6.VAR_8;
          })(Object.create(null));
        };
        FUNCTION_4();
    }
};