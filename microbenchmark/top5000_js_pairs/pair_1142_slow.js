const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 0 };
        function FUNCTION_1(VAR_2) {
          this.KEY_1 += VAR_2;
        }
        var VAR_3 = FUNCTION_1.bind(1);
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) VAR_3();
    }
};