const Benchmark = {
    run: function() {
        this.VAR_1 = 0;
        function FUNCTION_1(VAR_2) {
          this.VAR_1 += VAR_2;
        }
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) FUNCTION_1(VAR_3);
    }
};