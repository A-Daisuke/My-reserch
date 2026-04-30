const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        var VAR_3 = [];
        for (VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3.push(new FUNCTION_1(VAR_4).VAR_2);
        }
    }
};