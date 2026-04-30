const Benchmark = {
    run: function() {
        var FUNCTION_4 = function (VAR_6, VAR_7) {
          var VAR_8 = VAR_6;
          var VAR_9 = VAR_7;
          return {
            KEY_1: function () {
              console.log(VAR_8);
            },
            KEY_2: function () {
              return VAR_9 >= 18;
            },
          };
        };
        var VAR_10 = FUNCTION_4("Kylo Ren", 21);
    }
};