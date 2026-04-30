const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          var VAR_3 = this.split()[0],
            VAR_4 = "";
          while (VAR_1 > 0) {
            VAR_4 += VAR_3;
            VAR_1--;
          }
          return VAR_4;
        };
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          "abcdefgh".FUNCTION_1(100);
        }
    }
};