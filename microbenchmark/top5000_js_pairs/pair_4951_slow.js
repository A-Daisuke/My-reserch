const Benchmark = {
    run: function() {
        var VAR_1 = 1;
        (function () {
          "use strict";
          function FUNCTION_1(VAR_2, VAR_3) {
            this.VAR_4 = VAR_2;
            this.VAR_5 = VAR_3;
          }
          FUNCTION_1.prototype.FUNCTION_2 = function () {
            return this.VAR_4 + " " + this.VAR_5;
          };
          var VAR_6 = new FUNCTION_1("Henk", "de Vries");
          VAR_6.FUNCTION_2();
        })();
    }
};