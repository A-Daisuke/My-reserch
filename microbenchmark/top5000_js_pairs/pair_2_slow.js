const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        var VAR_5 = 0;
        for (VAR_5; VAR_5 < 1000000; VAR_5++) {
          new FUNCTION_1(1, 2);
        }
    }
};