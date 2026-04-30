const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          this.VAR_2 = VAR_1.VAR_2;
          this.VAR_3 = VAR_1.VAR_3;
          this.VAR_4 = VAR_1.VAR_4;
          this.VAR_5 = VAR_1.VAR_5;
        };
        var FUNCTION_2 = function (VAR_6) {
          return {
            KEY_1: VAR_1.VAR_2,
            KEY_2: VAR_1.VAR_3,
            KEY_3: VAR_1.VAR_4,
            KEY_4: VAR_1.VAR_5,
          };
        };
        var VAR_7 = Object.create(FUNCTION_1, {
          KEY_5: { KEY_6: "Bob" },
          KEY_7: { KEY_8: "53" },
          KEY_9: { KEY_10: "70" },
          KEY_11: { KEY_12: "180" },
        });
    }
};