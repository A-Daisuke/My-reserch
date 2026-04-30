const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        }
        var FUNCTION_2 = function () {};
        for (var VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
          new FUNCTION_1(1, "string", FUNCTION_2);
        }
    }
};