const Benchmark = {
    run: function() {
        var VAR_1;
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
        var VAR_5 = new FUNCTION_1();
        VAR_5.FUNCTION_2(VAR_1);
    }
};