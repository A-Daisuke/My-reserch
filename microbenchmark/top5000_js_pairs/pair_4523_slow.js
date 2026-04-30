const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          this.VAR_2 = VAR_1.VAR_2;
          this.VAR_3 = VAR_1.VAR_3;
          this.VAR_4 = VAR_1.VAR_4;
          this.VAR_5 = VAR_1.VAR_5;
        };
        var VAR_6 = Object.create(FUNCTION_1, {
          KEY_1: { KEY_2: "Bob" },
          KEY_3: { KEY_4: "53" },
          KEY_5: { KEY_6: "70" },
          KEY_7: { KEY_8: "180" },
        });
    }
};