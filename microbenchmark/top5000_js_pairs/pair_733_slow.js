const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1.VAR_2 = 10000;
        function FUNCTION_1(VAR_3) {
          var VAR_4 = VAR_1.VAR_2 - 1;
          for (var VAR_5 = VAR_4; VAR_5 >= 0; VAR_5--) {
            Array.prototype.splice.apply(VAR_1, [VAR_5, 0].concat(VAR_1.splice(0, 1)));
          }
          return VAR_1;
        }
        FUNCTION_1(VAR_1);
    }
};