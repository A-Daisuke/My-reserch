const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1() {
          this.VAR_2 = 1;
          this.VAR_3 = 2;
          this.VAR_4 = 3;
          this.VAR_5 = 4;
        }
        for (var VAR_6 = 0; VAR_6 < 100000; VAR_6++) {
          VAR_1.push(new FUNCTION_1());
        }
    }
};