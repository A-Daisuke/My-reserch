const Benchmark = {
    run: function() {
        var VAR_1 = 1;
        (function () {
          "use strict";
          class CLASS_1 {
            KEY_1(VAR_2, VAR_3) {
              this.VAR_4 = VAR_2;
              this.VAR_5 = VAR_3;
            }
            KEY_2() {
              return this.VAR_4 + " " + this.VAR_5;
            }
          }
          var VAR_6 = new CLASS_1("Henk", "de Vries");
          VAR_6.KEY_2();
        })();
    }
};