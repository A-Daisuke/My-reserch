const Benchmark = {
    run: function() {
        var FUNCTION_2 = function FUNCTION_2(VAR_5, VAR_6) {
          this.VAR_7 = 0;
          this.VAR_8 = 0;
          if (arguments.length == 1) {
            this.VAR_7 = VAR_5.VAR_7;
            this.VAR_8 = VAR_5.VAR_8;
          } else if (arguments.length == 2) {
            this.VAR_7 = VAR_5;
            this.VAR_8 = VAR_6;
          }
        };
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) new FUNCTION_2(2, 6);
    }
};