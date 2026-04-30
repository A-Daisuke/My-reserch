const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_3(VAR_6) {
          var VAR_7 = VAR_6;
          for (var VAR_8 = 0; VAR_8 < 9000; VAR_8++) {
            VAR_7++;
          }
          return VAR_7;
        }
        function FUNCTION_1() {
          this.VAR_2 = 0;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function (VAR_3) {
          var VAR_4 = VAR_3;
          for (this.VAR_2 = 0; this.VAR_2 < 9000; this.VAR_2++) {
            VAR_4++;
          }
          return VAR_4;
        };
        FUNCTION_3(VAR_1);
    }
};