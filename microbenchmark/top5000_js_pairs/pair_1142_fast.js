const Benchmark = {
    run: function() {
        this.VAR_5 = 0;
        function FUNCTION_1(VAR_2) {
          this.VAR_5 += VAR_2;
        }
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) FUNCTION_1(VAR_4);
    }
};