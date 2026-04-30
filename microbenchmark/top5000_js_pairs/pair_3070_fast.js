const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_4 = VAR_1;
        }
        var VAR_2 = [];
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.push(new FUNCTION_1(VAR_3).VAR_4);
        }
    }
};