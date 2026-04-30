const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 100000;
        while (VAR_1 < VAR_2) {
          this.FUNCTION_1 = function () {
            VAR_1++;
          };
          this.FUNCTION_1();
        }
    }
};