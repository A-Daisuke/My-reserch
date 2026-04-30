const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        }
        function FUNCTION_2(VAR_7, VAR_8) {
          VAR_7.VAR_4 += VAR_8.VAR_4;
          VAR_7.VAR_5 += VAR_8.VAR_5;
          VAR_7.VAR_6 += VAR_8.VAR_6;
          return VAR_7;
        }
        var VAR_9 = new FUNCTION_1(1, 2, 3);
        var VAR_10 = new FUNCTION_1(4, 5, 6);
        for (var VAR_11 = 0; VAR_11 < 1000; ++VAR_11) {
          FUNCTION_2(VAR_9, VAR_10);
        }
    }
};