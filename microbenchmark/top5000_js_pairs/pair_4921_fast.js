const Benchmark = {
    run: function() {
        var FUNCTION_6 = function (VAR_6) {
          var VAR_2;
          return {
            KEY_1: function (VAR_3) {
              VAR_6 = VAR_3;
            },
            KEY_2: function () {
              return VAR_6;
            },
            KEY_3: function () {
              return VAR_2;
            },
            KEY_4: function (VAR_4) {
              if (
                typeof VAR_4 == "string" &&
                (VAR_4.toLowerCase() == "male" || VAR_4.toLowerCase() == "female")
              ) {
                VAR_2 = VAR_4;
              }
            },
          };
        };
        var VAR_7 = FUNCTION_6("fish");
    }
};