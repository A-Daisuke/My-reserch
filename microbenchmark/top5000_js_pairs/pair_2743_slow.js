const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        }
        var VAR_7 = [];
        for (var VAR_8 = 0; VAR_8 < 1000; VAR_8++) {
          VAR_7.push(new FUNCTION_1("Dannty", "Boy", "Assistant"));
        }
    }
};