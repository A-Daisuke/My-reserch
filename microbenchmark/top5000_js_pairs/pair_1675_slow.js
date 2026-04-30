const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          VAR_1(1, 2);
        }
        function FUNCTION_2(VAR_2) {
          this.VAR_3 = VAR_2;
        }
        FUNCTION_2.prototype.FUNCTION_3 = function (VAR_4, VAR_5) {
          VAR_6 = VAR_4 + VAR_5;
          VAR_7 = this.VAR_3;
        };
        function FUNCTION_4(VAR_8) {
          var VAR_9 = new FUNCTION_2(VAR_8);
          FUNCTION_1(VAR_9.FUNCTION_3);
        }
        for (var VAR_10 = 0; VAR_10 < 10000; ++VAR_10) {
          FUNCTION_4(VAR_10);
        }
    }
};