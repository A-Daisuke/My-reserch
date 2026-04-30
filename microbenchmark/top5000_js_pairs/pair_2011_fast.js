const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_4 = "alo";
        }
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(new FUNCTION_1());
        }
    }
};