const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1(VAR_2, VAR_3) {
          this.VAR_4 = VAR_2;
          this.VAR_5 = VAR_3;
        }
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) VAR_1.push(new FUNCTION_1(VAR_6, VAR_6 / 2));
    }
};