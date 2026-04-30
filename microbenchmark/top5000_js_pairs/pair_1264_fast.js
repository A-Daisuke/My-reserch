const Benchmark = {
    run: function() {
        var VAR_4 = { KEY_1: 0 };
        function FUNCTION_1(VAR_2) {
          this.KEY_1 += VAR_2;
        }
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) FUNCTION_1.call(VAR_4, VAR_3);
    }
};