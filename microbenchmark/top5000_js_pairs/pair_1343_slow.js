const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
            var VAR_4 = VAR_1();
            VAR_2 += VAR_4.VAR_5 * VAR_4.VAR_6;
          }
        }
        function FUNCTION_2(VAR_7, VAR_8) {
          this.VAR_5 = VAR_7;
          this.VAR_6 = VAR_8;
        }
        var VAR_9 = 0;
        FUNCTION_1(function () {
          VAR_9++;
          return new FUNCTION_2(VAR_9, VAR_9);
        });
    }
};